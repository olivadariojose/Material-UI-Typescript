import { createTheme } from '@mui/material/styles';


// ESTO DEBEMOS PROVEERLO A LA APLICACION
// MEDIANTE EL THEME PROVIDER QUE PROPORCIONA MATERIAL UI
// ESTO LO HACEMOS EN EL index.js
export const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });