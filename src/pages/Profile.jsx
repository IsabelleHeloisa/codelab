import { BiBell, BiMessageRounded, BiSearchAlt } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar
} from '@mui/material'
import React from 'react'

export default function Profile() {
  return (
    <Stack direction="row">
      <Stack bgcolor="green" height="100vh" width="100vw"></Stack>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />

        <List>
          {[
            {
              label: 'Pesquisar',
              icon: <BiSearchAlt />
            },
            {
              label: 'Página inicial',
              icon: <LiaHomeSolid />
            },
            {
              label: 'Notificações',
              icon: <BiBell />
            },
            {
              label: 'Mensagens',
              icon: <BiMessageRounded />
            },
            {
              label: 'Postar',
              icon: <MdAdd />
            },
            {
              label: 'Perfil',
              icon: <CgProfile />
            }
          ].map(item => (
            <ListItem
              key={item.label}
              disablePadding
              sx={{
                marginY: 2
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Stack>
  )
}
