import { defineParameterType, loadFeature } from 'cypress-cucumber-preprocessor/lib';

// Define a custom parameter type to match dates in Gherkin steps
defineParameterType({
  name: 'date',
  regexp: /\d{4}-\d{2}-\d{2}/,
  transformer: (date) => new Date(date)
});

// Load feature files
const featureFileRegex = /\.feature$/;
const featureContext = require.context('../features', true, featureFileRegex);
loadFeature(featureContext);
