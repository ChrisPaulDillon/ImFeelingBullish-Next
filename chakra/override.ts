// https://github.com/chakra-ui/chakra-ui
import foundations from './foundations';
import styles from './styles';
import components from './components';
import layerStyles from './layerStyles';
import { ThemeConfig, ColorMode, ThemeOverride } from '@chakra-ui/react';
/**
 * Color mode config
 */
const colorMode: ColorMode = 'light';

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: colorMode,
};

const themeOverride: ThemeOverride = {
   ...foundations,
  config,
  styles,
layerStyles,
   components,
};

export default themeOverride;
