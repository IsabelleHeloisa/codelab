import React from 'react'
import Logo from '../img/codelab-removebg-preview.png'
import { Stack } from '@mui/material'

export default function LogoBox() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '50%'
      }}
    >
      <img width={500} src={Logo} alt="logo"></img>
    </Stack>
  )
}
