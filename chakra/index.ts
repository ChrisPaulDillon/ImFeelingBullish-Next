import { extendTheme, Theme } from '@chakra-ui/react';
import themeOverride from './override';

const theme: Theme = extendTheme(themeOverride);

export default theme;