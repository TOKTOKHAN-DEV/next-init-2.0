/* eslint-disable @typescript-eslint/no-var-requires */
const { convertToCamelCase } = require('./convertToCamelCase');
const { convertToPascalCase } = require('./convertToPascalCase');
const { convertToSnakeCase } = require('./convertToSnakeCase');

function getTextCase(text) {
  return {
    pascal: convertToPascalCase(text),
    snake: convertToSnakeCase(text),
    camel: convertToCamelCase(text),
    snakeUpperCase: convertToSnakeCase(text).toUpperCase(),
  };
}

module.exports = { getTextCase };
