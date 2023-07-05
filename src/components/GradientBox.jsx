import { Stack } from '@mui/material'
import React from 'react'

export default function GradientBox({ children }) {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      alignItems={{ xs: 'center', lg: 'flex-start' }}
      justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
      sx={{
        padding: 5,
        background: 'rgb(9,13,12)',
        background:
          'linear-gradient(120deg, rgba(9,13,12,1) 0%, rgba(38,172,146,0.9920343137254902) 100%)',
        minHeight: '100vh'
      }}
      gap={{ xs: 10, lg: 0 }}
    >
      {children}
    </Stack>
  )
}
