# Trust Services Criteria | Machine Readable Formats

A collection of machine-readable formats for the Trust Services Criteria (TSC) and related documents. The TSC is a set of criteria used to evaluate the security, availability, processing integrity, confidentiality, and privacy of systems and services.

## Overview

| Format                                                                                                   | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [TSC Controls (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.controls.json)      | JSON data for the 2017 Trust Services Criteria with revised POF 2022 extracted from PDF                        |
| [TSC Controls (CSV)](2017-trust-services-criteria-with-revised-points-of-focus-2022.controls.csv)        | CSV data for the 2017 Trust Services Criteria with revised POF 2022 extracted from PDF                         |
| [TSC Background (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.background.json)  | JSON data for the 2017 Trust Services Criteria with revised POF 2022 background information extracted from PDF |
| [TSC Appendix (JSON)](2017-trust-services-criteria-with-revised-points-of-focus-2022.appendix.json)      | JSON data for the 2017 Trust Services Criteria with revised POF 2022 appendix information extracted from PDF   |
| [TSC Controls (JSON Schema)](2017-trust-services-criteria-with-revised-points-of-focus-2022.schema.json) | JSON schema for the 2017 Trust Services Criteria with revised POF 2022 controls extracted from PDF             |

> Note: JSON controls data was generated using AI and is not guaranteed to be 100% accurate. The CSV file was generated from the JSON file and is also not guaranteed to be 100% accurate. The original PDF files are the authoritative source for the TSC.

### JSON control sample and schema

Since AICPA does not publish a schema for the JSON control files, we have created our own schema based on the data in the JSON files. A sample of the data is below. The JSON Schema file of the TSC controls is available as well.

```json
{
	"trustServicesCriteria": {
		"controlEnvironment": [
			{
				"id": "CC1.1",
				"principle": "COSO Principle 1: The entity demonstrates a commitment to integrity and ethical values.",
				"pof": [
					{
						"id": "CC1.1.a",
						"title": "Sets the Tone at the Top",
						"requirement": "The board of directors and management demonstrate the importance of integrity and ethical values."
					},
					{
						"id": "CC1.1.b",
						"title": "Establishes Standards of Conduct",
						"requirement": "The expectations are defined in standards of conduct and understood at all levels."
					},
					{
						"id": "CC1.1.c",
						"title": "Evaluates Adherence to Standards of Conduct",
						"requirement": "Processes evaluate individuals and teams against expected standards."
					},
					{
						"id": "CC1.1.d",
						"title": "Addresses Deviations in a Timely Manner",
						"requirement": "Deviations are identified and remedied in a timely and consistent manner."
					},
					{
						"id": "CC1.1.e",
						"title": "Considers Contractors and Vendor Employees in Demonstrating Its Commitment",
						"requirement": "Includes contractors and vendors in standards of conduct processes."
					}
				]
			}
			// ... more controls
		]
		// more sections
	}
}
```

## Source Files

All source files are from the AICPA website and are in PDF format. The JSON and CSV files were generated from the PDF files using a custom script. The original PDF files are available at the following links:

- [2017 Trust Services Criteria with revised Points of Focus 2022](https://www.aicpa.org/content/dam/aicpa/interestareas/frc/downloadabledocuments/2017-trust-services-criteria-with-revised-points-of-focus-2022.pdf)

# Disclaimer

> Note: Control data in JSON and CSV were generated using the source PDF and AI and is not guaranteed to be 100% accurate. The original PDF files are the authoritative source for the TSC.

All converted data is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the data or the use or other dealings in the data. Use at your own risk.
