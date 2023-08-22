import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { usePreference } from '../hooks/usePreference'

export default function ToggleTheme() {
  const { mode, setMode } = usePreference()

  return (
    <ListItemButton
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{ gap: 1 }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0
        }}
      >
        {mode === 'dark' ? <BsSun /> : <BsMoon />}
      </ListItemIcon>
      <ListItemText primary="Tema" />
    </ListItemButton>
  )
}
