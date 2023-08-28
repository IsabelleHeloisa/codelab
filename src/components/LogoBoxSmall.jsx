import React from 'react'
import LogoLight from '../img/codelabBlack-removebg-preview.png'
import LogoDark from '../img/codelab-removebg-preview.png'
import { Stack } from '@mui/material'
import { usePreference } from '../hooks/usePreference'

export default function LogoBoxSmall() {
  const { mode } = usePreference()
  return (
    <Stack
      sx={{
        padding: 2,
        overflow: 'hidden',
        justifyContent: 'center'
      }}
    >
      <img
        width="200px"
        // height="250px"
        src={mode === 'dark' ? LogoDark : LogoLight}
        alt="logo"
      />
    </Stack>
  )
}
