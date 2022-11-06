import React from 'react'
import {styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
    // CUANDO EL INPUT TENGA EL FOCO
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
        // COLOR INCIAL DEL BORDE SIN TENER EL FOCO
      '& fieldset': {
        borderColor: 'red',
      },
      // COLOR AL HACER HOVER AL INPUT
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      // COLOR DEL BORDE AL HACER CLICK EN EL INPUT
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      // COLOR DEL TEXTO DENTRO DEL INPUT
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        color:''
      }
    },
  });

  // RECIBE COMO PARAMETROS EL TIPO, NAME, ....
export const InputMui = ({inputLabel='Sin label', inputType='text', inputWidth=false}) => {
  return (
    <CssTextField 
    label ={inputLabel}
    type = {inputType}
    fullWidth = {inputWidth}
    id="custom-css-outlined-input"
    InputLabelProps={{
        style:{
            color:'orange'
        }
    }}
    autoComplete='new password'
    />
  )
}
