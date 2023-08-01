import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import React, { useState } from 'react'
import LogoBoxSmall from './LogoBoxSmall'
import { BiBell, BiMessageRounded, BiSearchAlt } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { VscSettingsGear } from 'react-icons/vsc'
import PostModal from './PostModal'
import SearchUserPopover from './SearchUserPopover'

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const openSearch = Boolean(anchorEl)

  return (
    <>
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
              icon: <BiSearchAlt />,
              onClick: e => setAnchorEl(e.currentTarget),
              component: (
                <SearchUserPopover
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                  openSearch={openSearch}
                />
              )
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
              icon: <MdAdd />,
              onClick: () => setOpen(true)
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
              <>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
                {item.component}
              </>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <PostModal open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
