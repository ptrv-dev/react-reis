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
          [theme.breakpoints.up('xs')]: {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
          [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
            maxWidth: '100%',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Inter',
    h2: {
      fontWeight: 600,
      [theme.breakpoints.up('xs')]: {
        fontSize: '28px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '40px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '48px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '52px',
      },
    },
    h3: {
      fontWeight: 600,
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
      },
    },
    subtitle1: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
      },
    },
  },
});

export default theme;
