// tsc-to-json.js
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

// set params as file name and sheet index (default to 1)
const args = process.argv.slice(2);
const INPUT_FILE = args[0] || "tsc_to_nist_80053.xlsx";
const SHEET_INDEX = args[1] ? parseInt(args[1], 10) : 1;
const OUTPUT_FILE = args[2] || INPUT_FILE.replace(/\.xlsx$/, ".json");

// Check if the input file exists
if (!fs.existsSync(INPUT_FILE)) {
	console.error(`Input file ${INPUT_FILE} does not exist.`);
	process.exit(1);
}
// Check if the input file is an Excel file
if (path.extname(INPUT_FILE) !== ".xlsx") {
	console.error(`Input file ${INPUT_FILE} is not an Excel file.`);
	process.exit(1);
}

// Function to convert Excel to JSON
function convertExcelToJson() {
	console.log(`Reading Excel file: ${INPUT_FILE}`);

	// Read the workbook
	const workbook = xlsx.readFile(INPUT_FILE);

	// Get the sheet names
	const sheetNames = workbook.SheetNames;
	console.log(`Available sheets: ${sheetNames.join(", ")}`);

	if (SHEET_INDEX >= sheetNames.length) {
		throw new Error(`Sheet index ${SHEET_INDEX} is out of bounds. Total sheets: ${sheetNames.length}`);
	}

	const sheetName = sheetNames[SHEET_INDEX];
	console.log(`Processing sheet: ${sheetName}`);

	// Get the worksheet
	const worksheet = workbook.Sheets[sheetName];

	// Convert to array of arrays with headers
	const rawData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

	// Find the header row
	let headerRowIndex = -1;
	for (let i = 0; i < Math.min(20, rawData.length); i++) {
		if (
			rawData[i] &&
			rawData[i].length >= 3 &&
			rawData[i][0] === "TRUST SERVICES CRITERIA" &&
			rawData[i][1] === "FRAMEWORK REFERENCE" &&
			rawData[i][2] === "FRAMEWORK SPECIFIC POINTS OF FOCUS"
		) {
			headerRowIndex = i;
			break;
		}
	}

	if (headerRowIndex === -1) {
		throw new Error("Header row not found in the sheet.");
	}

	console.log(`Found header row at index: ${headerRowIndex}`);

	// Extract criteria descriptions
	const criteriaDescriptions = {};
	let currentCriteria = null;
	let currentCode = null;
	let currentDescription = null;

	// Process data to create the flat JSON structure
	const flatJson = [];

	// Start from the row after header
	for (let i = headerRowIndex + 1; i < rawData.length; i++) {
		const row = rawData[i];

		// Skip empty rows
		if (!row || row.length === 0) continue;

		// Check if this is a criteria header row (only column A filled, B and C empty)
		if (row[0] && (!row[1] || !row[2])) {
			currentCriteria = row[0];

			// Extract the short code and description
			const match = currentCriteria.match(/^([\w\d\.]+):\s*(.*)/);
			if (match) {
				currentCode = match[1];
				currentDescription = match[2];
				criteriaDescriptions[currentCode] = currentDescription;
			} else {
				// If no match, use the entire value as code and leave description empty
				currentCode = currentCriteria;
				currentDescription = "";
				criteriaDescriptions[currentCode] = currentDescription;
			}
		}
		// If this is a mapping row (columns A and B filled)
		else if (row[0] && row[1]) {
			// Use the criteria code in the row, or fall back to current code
			let criteriaCode = row[0];

			// Get the description for this code
			let criteriaDesc = criteriaDescriptions[criteriaCode] || currentDescription;

			// Add this mapping to our result
			flatJson.push({
				trust_service_criteria: criteriaCode,
				criteria_description: criteriaDesc,
				nist_reference: row[1],
				nist_description: row[2] || "",
			});
		}
	}

	console.log(`Total mappings found: ${flatJson.length}`);

	// Write to file
	fs.writeFileSync(OUTPUT_FILE, JSON.stringify(flatJson, null, 2));
	console.log(`Successfully wrote mappings to ${OUTPUT_FILE}`);
}

try {
	convertExcelToJson();
} catch (err) {
	console.error("An error occurred:", err.message);
}
