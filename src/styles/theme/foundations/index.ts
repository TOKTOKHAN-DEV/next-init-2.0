import breakpoints from './breakpoints';
import colors from './colors';
import semanticTokens from './semanticTokens';
import sizes from './sizes';
import typography from './typography';

const foundations = {
  breakpoints,
  sizes,
  colors,
  semanticTokens,
  ...typography,
};

export default foundations;
