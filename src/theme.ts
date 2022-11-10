import { createTheme } from '@mui/system';

let theme = createTheme({});

theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        padding: '0 15px',
        root: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: '1320px',
          },
          [theme.breakpoints.up('sm')]: {
            padding: '0 15px',
          },
        },
      },
    },
  },
});

export default theme;
