/* eslint-disable @typescript-eslint/no-var-requires */
const { AutoComplete } = require('enquirer');
const { apiResolver } = require('./resolver/api.resolver');

const resolvers = {
  api: apiResolver,
  page: () => console.log('준비중 입니다.'),
};

async function main() {
  const prompt = new AutoComplete({
    name: 'type',
    message: 'Select Source Code Type',
    initial: 1,
    choices: ['api', 'page'],
  });
  const target = await prompt.run();
  const resolver = resolvers[target];
  resolver();
}
main();
