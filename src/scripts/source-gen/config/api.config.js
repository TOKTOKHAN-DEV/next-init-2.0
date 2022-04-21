/* eslint-disable @typescript-eslint/no-var-requires */
const { getTextCase } = require('../../../utils/nodejs/getTextCase');

function getEtaConfig(apiLabel) {
  const apiTextCase = getTextCase(apiLabel);
  return {
    data: {
      apiLabel,
      apiClassName: apiTextCase.pascal + 'Api',
      apiClassInstanceName: apiTextCase.camel + 'Api',
    },
    utils: {
      getTextCase,
    },
  };
}

module.exports = {
  getEtaConfig,
};
