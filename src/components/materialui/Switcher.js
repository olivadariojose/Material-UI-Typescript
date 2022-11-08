import React from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Switcher = () => {
  return (
    <Switch {...label} />
  )
}
