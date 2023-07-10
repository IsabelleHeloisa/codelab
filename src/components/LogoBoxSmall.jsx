import React from 'react'
import Logo from '../img/codelabBlack-removebg-preview.png'
import { Stack } from '@mui/material'

export default function LogoBoxSmall() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '13%'
      }}
    >
      <img width="100%" src={Logo} alt="logo" />
    </Stack>
  )
}
