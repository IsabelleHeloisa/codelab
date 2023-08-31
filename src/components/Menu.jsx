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
import { useNavigate } from 'react-router-dom'
import ConfigurationPopover from './ConfigurationPopover'
import NotificationsPopover from './NotificationsPopover'

export default function Menu() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const openSearch = Boolean(anchorEl)
  const [anchorElConfiguration, setAnchorElConfiguration] = useState(null)
  const openConfiguration = Boolean(anchorElConfiguration)
  const [anchorElNotification, setAnchorElNotification] = useState(null)
  const openNotification = Boolean(anchorElNotification)

  return (
    <>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          overflow: 'hidden',
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            xs: {
              display: 'none'
            },
            md: {
              display: 'flex'
            }
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
              icon: <LiaHomeSolid />,
              onClick: () => navigate('/feed')
            },
            {
              label: 'Notificações',
              icon: <BiBell />,
              onClick: e => setAnchorElNotification(e.currentTarget),
              component: (
                <NotificationsPopover
                  anchorEl={anchorElNotification}
                  setAnchorEl={setAnchorElNotification}
                  open={openNotification}
                />
              )
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
              icon: <CgProfile />,
              onClick: () => navigate('/profile')
            },
            {
              label: 'Configurações',
              icon: <VscSettingsGear />,
              onClick: e => setAnchorElConfiguration(e.currentTarget),
              component: (
                <ConfigurationPopover
                  anchorEl={anchorElConfiguration}
                  setAnchorEl={setAnchorElConfiguration}
                  open={openConfiguration}
                />
              )
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
