# Data mapping of TSC to NIST 800-53

This folder contains the 2017 Trust Services Criteria (TSC) mapped to the NIST 800-53 Rev 5 framework controls. Source files are Excel (XLSX) format.

## Data Mapping Overview

The data mapping has already been done by AICPA and is available in the following formats.

| Source Framework                                                   | Target Framework  | Data Map                                                          |
| ------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------- |
| Trust Services Criteria 2017 (with revised points of focus - 2022) | NIST 800-53 Rev 5 | [XLSX](./tsc_to_nist_800-53.xlsx) [JSON](./tsc-to-nist80053.json) |

## Source file

[tsc_to_nist_800-53.xlsx](./tsc_to_nist_800-53.xlsx) is the source file containing the mapping of TSC to NIST 800-53 Rev 5 controls.

The file contains two worksheets:

1. **Overview**: Metadata about the frameworks mapped.
2. **NIST 800-53 as Points of Focus**: This sheet contains the mapping of TSC to NIST 800-53 Rev 5 controls.

**From**: Trust Services Criteria 2017 (with revised points of focus - 2022)
**To**: NIST 800-53 rev 5

### Example JSON Mapping

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
