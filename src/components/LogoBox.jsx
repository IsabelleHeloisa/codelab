import React from 'react'
import Logo from '../img/codelab-removebg-preview.png'
import { Stack } from '@mui/material'

export default function LogoBox() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '50%',
        height: {
          xs: '100%',
          lg: '85vh'
        }
      }}
    >
      <Stack
        sx={{
          width: {
            xs: '100%',
            lg: '70%'
          }
        }}
      >
        <img width="100%" src={Logo} alt="logo" />
      </Stack>
    </Stack>
  )
}
