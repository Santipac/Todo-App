import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  colors: {
    black: '#444444',
    white: '#EDF2F7',
  },
});

export default theme;
