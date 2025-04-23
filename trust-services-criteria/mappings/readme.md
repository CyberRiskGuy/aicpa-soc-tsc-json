# Data mapping of TSC to NIST 800-53

This folder contains the 2017 Trust Services Criteria (TSC) mapped to the NIST 800-53 Rev 5 framework controls. Source files are Excel (XLSX) format. Also includes a converter script to convert the XLSX file to JSON in a flat structure format.

## Mapping Overview

| Source Framework                                                   | Target Framework  | Data Map                                                          |
| ------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------- |
| Trust Services Criteria 2017 (with revised points of focus - 2022) | NIST 800-53 Rev 5 | [XLSX](./tsc_to_nist_800-53.xlsx) [JSON](./tsc-to-nist80053.json) |

## Source file

[tsc_to_nist_800-53.xlsx](./tsc_to_nist_800-53.xlsx) is the source file containing the mapping of TSC to NIST 800-53 Rev 5 controls.

The file contains two sheets:

1. **Overview**: Metadata about the frameworks mapped.
2. **NIST 800-53 as Points of Focus**: This sheet contains the mapping of TSC to NIST 800-53 Rev 5 controls.

**From**: Trust Services Criteria 2017 (with revised points of focus - 2022)
**To**: NIST 800-53 rev 5

## Instructions to Convert Excel to JSON

### Prerequisites

1. Latest Node.js installed on your computer (Download from [nodejs.org](https://nodejs.org/))
2. Basic familiarity with command line/terminal

### Step 1: Set Up Your Project

1. Create a new folder for this project
2. Place your `tsc_to_nist_80053.xlsx` file in this folder
3. Open a terminal/command prompt and navigate to your project folder

### Step 2: Install Dependencies

You will need to install the `xlsx` package to read Excel files. Run the following command in your terminal:

```bash
npm install -D xlsx # Install xlsx package
```

### Step 3: Run the Conversion Script

Run the script with:

```bash
chmod +x convert-tsc-to-nist80053-json.js # Make the script executable
node convert-tsc-to-nist80053-json.js # Execute the script
```

### Step 4: Check the Output

The script will generate a file named `tsc-to-nist80053.json` in the same directory, containing the complete mapping in the flat structure format you requested.

### How the Script Works:

1. It reads the Excel file using the xlsx library
2. It locates the second sheet ("NIST 800-53 as Points of Focus")
3. It finds the header row with column titles
4. It processes each row, identifying criteria headers and mapping entries
5. It builds a flat JSON structure where each entry contains:
   - Trust Service Criteria code
   - Criteria description
   - NIST reference code
   - NIST description
6. It writes the output to a JSON file

### Running the Script with Arguments

By default, the script will look for `tsc_to_nist_80053.xlsx` in the current directory and output to `tsc-to-nist80053.json`. You can also specify different input and output files as command line arguments:

```bash
# node convert-tsc-to-nist80053-json.js <input_file> <sheet_index> <output_file>
node convert-tsc-to-nist80053-json.js input.xlsx 1 output.json
```

This command will:

- Read from `input.xlsx` (or whatever file you specify)
- Use the second sheet (index 1) of the Excel file
- Write the output to `output.json` (or whatever file you specify)

### Example Output

```json
[
	{
		"trust_service_criteria": "CC1.1",
		"criteria_description": "COSO Principal 1: The entity demonstrates a commitment to integrity and ethical values",
		"nist_reference": "PS-6a",
		"nist_description": "Access Agreements: Develop and document access agreements for organizational systems;"
	},
	{
		"trust_service_criteria": "CC1.1",
		"criteria_description": "COSO Principal 1: The entity demonstrates a commitment to integrity and ethical values",
		"nist_reference": "PS-6b",
		"nist_description": "Access Agreements: Review and update the access agreements [Assignment: organization-defined frequency]; and"
	},
	{
		"trust_service_criteria": "CC1.1",
		"criteria_description": "COSO Principal 1: The entity demonstrates a commitment to integrity and ethical values",
		"nist_reference": "PS-6c",
		"nist_description": "Access Agreements: Verify that individuals requiring access to organizational information and systems:"
	}
	// ... more entries
]
```
