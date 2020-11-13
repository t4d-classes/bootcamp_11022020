import { createMuiTheme } from '@material-ui/core';

export const carToolTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          padding: 0,
          margin: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontSize: 48,
      fontWeight: 500,
      margin: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
    h2: {
      fontSize: 24,
      fontWeight: 400,
      marginTop: 12,
      marginBottom: 4,
    },
  },
});
