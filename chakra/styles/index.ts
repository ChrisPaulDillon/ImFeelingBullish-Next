import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: {
    fontFamily: 'body',
    color: 'lightTextColor',
    bg: 'lightBgColor',
    '.chakra-ui-dark &': { color: 'darkTextColor', bg: 'darkControlColor' },
    '*::placeholder': {
      color: 'gray.600',
      '.chakra-ui-dark &': { color: 'whiteAlpha.700' },
    },
    '*, *::before, &::after': {
      borderColor: 'gray.200',
      wordWrap: 'break-word',
      '.chakra-ui-dark &': { borderColor: 'whiteAlpha.300' },
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: 'proportional-nums',
  },
};

export default styles;