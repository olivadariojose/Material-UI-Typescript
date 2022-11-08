import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//IMPORTAMOS EL THEME PROVIDER Y EL THEME QUE CREAMOS
import { ThemeProvider } from '@mui/system';
// IMPORTAMOS CSSBASELINE PARA APLICAR LOS ESTILOS DEL THEME
import CssBaseline from '@mui/material/CssBaseline';
import {theme as tema} from './helpers/materialui/themeMui'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
