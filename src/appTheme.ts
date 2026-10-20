import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  typography: {
    // Set Inter as the primary font, with fallback system fonts
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
});