import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  TextField
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ConfigurationPopover({ open, anchorEl, setAnchorEl }) {
  const navigate = useNavigate()

  return (
    <Popover
      id={open ? 'ConfigurationPopover' : undefined}
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <>
        <List>
          <ListItem
            disablePadding
            sx={{
              marginY: 2
            }}
          >
            <ListItemButton>
              <ListItemText primary="Gerenciar Perfil" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              marginY: 2
            }}
          >
            <ListItemButton onClick={() => navigate('/login')}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </>
    </Popover>
  )
}
