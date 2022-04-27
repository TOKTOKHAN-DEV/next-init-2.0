/* eslint-disable @typescript-eslint/no-var-requires */
const { prompt } = require('enquirer');

async function getPageName() {
  const response = await prompt({
    type: 'input',
    name: 'pageName',
    message: 'What is your page name?',
  });
  const { pageName } = response;
  return pageName;
}

module.exports = { getPageName };
