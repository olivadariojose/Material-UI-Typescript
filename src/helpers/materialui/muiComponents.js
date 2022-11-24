//?? IMPORTAMOS LOS COMPONENTES DE MATERIAL UI EN OTRO ARCHIVO Y LOS EXPORTAMOS
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


export {
    Box,
    Badge,
    ButtonGroup,
    Button,
    Switch,
    FormControlLabel
}


// AHORA SIMPLEMENTE LO IMPORTAMOS DE ESTA MANERA DONDE NECESITEMOS COMPONENTES DE MATERIAL UI
// UANDO * Y LA PALABRA as SEGUIDO DE ALGUN IDENTIFICADOR QUE EN ESTE EJEMPLO SE USA mui
// MEDIANTE mui PODRIAMMOS LLAMAR LOS COMPONENTES DE MATERIAL UI QUE IMPORTAMOS ARRIBA
// mui.Box

// import * as mui from '../../helpers/materialui/allComponents'