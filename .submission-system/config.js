require('dotenv').config();

const assert = require('assert');
const Rollbar = require('rollbar');

const {
  PESTO_API_TOKEN,
  TRAVIS_PULL_REQUEST_SLUG,
  TRAVIS_PULL_REQUEST,
  BATCH_ID,
  ROLLBAR_API_TOKEN,
  GITHUB_TOKEN,
} = process.env;

const rollbar = new Rollbar({
  accessToken: ROLLBAR_API_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const envVars = {
  PESTO_API_TOKEN,
  TRAVIS_PULL_REQUEST_SLUG,
  TRAVIS_PULL_REQUEST,
  BATCH_ID,
  GITHUB_TOKEN,
  EXERCISE_SUBMISSION_FILE: 'exercisesSubmission.json',
  PESTO_GRAPHQL_ENDPOINT: 'https://api.pesto.tech/graphql',
  ROLLBAR_API_TOKEN,
};

for (const [key, val] of Object.entries(envVars)) {
  assert.ok(val !== undefined, `\n${key} is undefined. Expected some environment variable`);
}

module.exports = envVars;
