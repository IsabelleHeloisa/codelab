import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import React from 'react'
import LogoBoxSmall from './LogoBoxSmall'
import { BiBell, BiMessageRounded, BiSearchAlt } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { VscSettingsGear } from 'react-icons/vsc'

export default function Menu() {
  return (
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
      <LogoBoxSmall />
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
          },
          {
            label: 'Configurações',
            icon: <VscSettingsGear />
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
  )
}
