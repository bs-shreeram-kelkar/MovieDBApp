import { DefaultTheme } from 'react-native-paper';

export const CombinedDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#040b29',
    accent: '#471539',
    background: '#FFFFFF',
  },
};

export const CombinedDarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#42f554',
    accent: '#16451b',
    background: '#00000',
  },
};
