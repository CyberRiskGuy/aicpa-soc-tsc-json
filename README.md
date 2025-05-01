# AICPA SOC 2 Control Requirements

This repository contains SOC 2 Trust Services Criteria (TSC), essentially the control requirements for SOC, and framework mappings in _machine readable format_. The Association of International Certified Professional Accountants (AICPA), originators of the data, do not provide the controls and mappings in machine readable formats. This repository is intended to make it easier to work with the data for compliance-as-code use cases. See [Disclaimer](#disclaimer) below.

## Contents

| Folder                                               | Description                                  |
| ---------------------------------------------------- | -------------------------------------------- |
| [soc-2](./soc-2)                                     | SOC 2 source documents                       |
| [trust-services-criteria](./trust-services-criteria) | Trust Services Criteria control requirements |

## What is SOC 2?

SOC 2 is an attestation, not a certification, meaning it's a report issued by an independent auditor (like a CPA firm) that verifies an organization's controls meet specific standards related to data security, availability, processing integrity, confidentiality, and privacy. SOC 2 itself is not prescriptive in the sense of dictating specific requirements, tools or processes, but rather sets criteria (the "Trust Services Criteria") for establishing and maintaining robust information security and privacy principles within an organization. 

In essence, SOC 2 broadly sets the "what to do" (criteria) and the organization details the "how we do it" (implementation and operations) to achieve compliance to the criteria.

## SOC 2 Types I vs II

A SOC 2 Type I report focuses on the suitability of the _design_ of controls, while a SOC 2 Type II report covers both _design_ and the _operating effectiveness_ of those controls.  A Type I report offers a _snapshot in time_ of the design of an organizatons controls (_well designed_ / _not well designed_) while a Type II report provides a more comprehensive and descriptive view of how an organization's controls are implemented and operate in practice (_well designed_ / _not well designed_ + _effective over time_ / _not effective over time_). 

## Disclaimer

All source data comes from source files, usually the AICPA website (frequently in PDF files) and the links are listed in the [References](#references) below, or within each subfolder. The source data is not modified, but converted to machine readable formats. All data rights are respective of their owners. If the data is modified, it is noted in the readme file within the subfolder. This repository is not affiliated with AICPA nor is it an official AICPA product. The data is provided as-is and should be used at your own risk. The data is not guaranteed to be up-to-date or accurate. Please refer to the AICPA website for the most current information.

## References

- [https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022)

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request. Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for more information.

## License

This project is licensed under a [GNU GPL v3 License](https://choosealicense.com/licenses/gpl-3.0/). See the [LICENSE](./LICENSE) file for details. This license applies only to the code and data files in this repository. The source data is not licensed under this license and is subject to the respective data rights of their owners. Please refer to the AICPA website for the most current licensing information.
