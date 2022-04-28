/* eslint-disable @typescript-eslint/no-var-requires */
const { prompt } = require('enquirer');

async function getSlugName() {
  const response = await prompt({
    type: 'input',
    name: 'slugName',
    message: 'What is your slug name?',
  });
  const { slugName } = response;
  return slugName;
}

module.exports = { getSlugName };
