# Contributing to AICPA SOC Control Requirements

Thank you for considering contributing to our project! This document outlines the process for contributing to this repository and helps to make the contribution process easy and effective for everyone involved.

## How Can I Contribute?

- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)
- [Additional Notes](#additional-notes)

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

#### Before Submitting A Bug Report

- **Check the [issues](../../issues)** to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- **Check if the issue has been fixed** — try to reproduce it using the latest `main` or `master` branch in the repository.

#### How Do I Submit A Good Bug Report?

Bugs are tracked as [GitHub issues](../../issues). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots or animated GIFs** which show you following the described steps and clearly demonstrate the problem.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

#### Before Submitting An Enhancement Suggestion

- **Check the [issues](../../issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- **Make sure your idea fits with the scope and aims of the project**.

#### How Do I Submit A Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](../../issues). Create an issue and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Explain why this enhancement would be useful** to most users.
- **List some other applications where this enhancement exists.**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the [style guides](#style-guides)
- Include thoughtfully-worded, well-structured tests for any new code
- Document new code
- End all files with a newline

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript Style Guide

- Use [ESLint](https://eslint.org/) with the project's `.eslintrc` configuration
- Prefer ES6 classes over prototypes
- Use ES6 syntax when possible
- Use strict equality checks (`===` and `!==`) over loose ones (`==` and `!=`)
- Prefer arrow functions `=>` over the `function` keyword
- Prefer template strings over string concatenation
- Prefer promises over callbacks
- Prefer async/await over raw promises

### Documentation Style Guide

- Use [Markdown](https://daringfireball.net/projects/markdown/) for documentation
- Reference methods and classes in markdown with the custom `{}` notation:
  - Reference classes with `{ClassName}`
  - Reference instance methods with `{ClassName.methodName}`
  - Reference class methods with `{ClassName.methodName}`

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

#### Type of Issue and Issue State

| Label name                | Description                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `enhancement`             | Feature requests.                                                                                                               |
| `bug`                     | Confirmed bugs or reports that are very likely to be bugs.                                                                      |
| `question`                | Questions more than bug reports or feature requests (e.g. how do I do X).                                                       |
| `feedback`                | General feedback more than bug reports or feature requests.                                                                     |
| `help-wanted`             | The core team would appreciate help from the community in resolving these issues.                                               |
| `beginner`                | Less complex issues which would be good first issues to work on for users who want to contribute.                               |
| `more-information-needed` | More information needs to be collected about these problems or feature requests.                                                |
| `needs-reproduction`      | Likely bugs, but haven't been reliably reproduced.                                                                              |
| `blocked`                 | Issues blocked on other issues.                                                                                                 |
| `duplicate`               | Issues which are duplicates of other issues, i.e. they have been reported before.                                               |
| `wontfix`                 | The core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid`                 | Issues which aren't valid (e.g. user errors).                                                                                   |
| `vulnerability`           | Issues which are security vulnerabilities.                                                                                      |

## Thank You!

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.
