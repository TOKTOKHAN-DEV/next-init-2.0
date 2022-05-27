/* eslint-disable @typescript-eslint/no-var-requires */
const { prompt } = require('enquirer');

async function getApiLabel() {
  const { apiLabel } = await prompt({
    type: 'input',
    name: 'apiLabel',
    message: 'What is your api-tag?',
  });

  return apiLabel;
}

module.exports = {
  getApiLabel,
};
