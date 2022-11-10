import { createTheme } from '@mui/material/styles';

let theme = createTheme({});

theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#4A60A1',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: '1320px',
          },
          [theme.breakpoints.up('xs')]: {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
        },
        disableGutters: {
          maxWidth: '100%',
          [theme.breakpoints.up('lg')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('xs')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter',
    h2: {
      fontSize: '52px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '40px',
      fontWeight: 600,
    },
  },
});

export default theme;
