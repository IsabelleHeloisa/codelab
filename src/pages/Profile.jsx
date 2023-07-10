import { BiBell, BiMessageRounded, BiSearchAlt } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import React from 'react'
import LogoBoxSmall from '../components/LogoBoxSmall'

export default function Profile() {
  return (
    <Stack direction="row">
      <Stack bgcolor="green" height="100vh" width="100vw">
        <Stack alignItems="center" bgcolor="red" width="100%" paddingY={5}>
          <Stack gap={5} direction="row" alignItems="center">
            <Stack alignItems="center">
              <Avatar sx={{ width: 150, height: 150 }} />
            </Stack>
            <Stack>
              <Typography fontSize={60} variant="h1">
                Isabelle Heloisa
              </Typography>
              <Stack gap={2} direction="row">
                <Stack>
                  <Typography fontSize={25}>10 seguidores</Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={25}>30 seguindo</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
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
