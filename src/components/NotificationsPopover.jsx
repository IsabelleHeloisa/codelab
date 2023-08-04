import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Typography
} from '@mui/material'
import React from 'react'

export default function NotificationsPopover({ open, anchorEl, setAnchorEl }) {
  return (
    <Popover
      id={open ? 'NotificationPopover' : undefined}
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
              <Typography variant="body2" color="text.secondary">
                Texto de exemplo
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </>
    </Popover>
  )
}
