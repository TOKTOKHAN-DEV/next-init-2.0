import { ThemeConfig } from 'react-select';

import {
  RecursiveObject,
  SystemStyleObjectRecord,
  ThemeComponents,
  ThemeDirection,
} from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';

import { ColorToken } from '../utils/color/types/color';

type Dict = Record<string, any>;

interface Foundations {
  breakpoints: Dict;
  sizes: RecursiveObject;
  zIndices: RecursiveObject;
  textStyles: SystemStyleObjectRecord;
  styles: Styles;
  semanticTokens?: Partial<Record<'colors', Record<string, ColorToken>>>;
}
export interface ChakraTheme extends Foundations {
  components: ThemeComponents;
  config: ThemeConfig;
  direction: ThemeDirection;
  layerStyles?: SystemStyleObjectRecord;
}
