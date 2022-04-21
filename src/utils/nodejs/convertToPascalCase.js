function convertToPascalCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
      return word.toUpperCase();
    })
    .replace(/(-|_)/g, '')
    .replace(/\s+/g, '');
}

module.exports = { convertToPascalCase };
