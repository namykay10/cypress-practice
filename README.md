# Add New Computer

This project contains end-to-end tests for the demo application at https://computer-database.gatling.io/computers using Cypress.

## Prerequisites

Before running the tests, ensure that the following dependencies are installed on your system:

- Node.js and npm
- Cypress

You can install Cypress using npm by running the following command(s)
- To initialize a new npm project: npm init -y
- To install the dependencies: npm install cypress --save-dev

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies.
4. Start the application locally or on a test environment.
5. Open Cypress using the Cypress Test Runner. Use command: npx cypress open
6. In the Cypress Test Runner, click on any test file (e.g `FilterCompList.cy.js`) under the `cypress/e2e` directory.
7. The tests will run in the Cypress Test Runner and you can view the test results.

## Running Tests in Headless Mode

If you want to run the tests in headless mode (without the Cypress Test Runner), you can use the following command: npx cypress run

This will run the tests in the default headless browser (Electron) and generate test results in the `cypress/results` directory.


## Additional Information

- The `cypress/e2e` directory contains the feature files and step definitions for the end-to-end tests.
- The `cypress/support` directory contains support files such as custom selectors, commands and utilities.
- The `cypress/fixtures` directory contains fixture files with sample data for the tests.



