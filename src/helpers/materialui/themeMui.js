import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, blue, deepBlue } from '@mui/material/colors';

const mode = 'dark'

export const theme = createTheme({
  palette: {
    mode,
     ...(mode === 'light'
       ? {
           // palette values for light mode
           primary: amber,
           divider: amber[200],
           text: {
             primary: grey[100],
             secondary: grey[100],
           },
         }
       : {
           primary: blue,
           divider: deepOrange[700],
           background: {
             default: blue[900],
             paper: blue[700],
           },
           text: {
             primary: '#fff',
             secondary: grey[500],
           },
         }),
  },
});
