import {
  BiBell,
  BiHeart,
  BiMessageRounded,
  BiSearchAlt,
  BiShareAlt
} from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { VscSettingsGear } from 'react-icons/vsc'
import { FiMoreVertical } from 'react-icons/fi'

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
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
      <Stack height="100vh" width="100vw">
        <Stack alignItems="center" width="100%" paddingY={5}>
          <Stack gap={10} direction="row" alignItems="center">
            <Stack alignItems="center">
              <Avatar sx={{ width: 150, height: 150 }} />
            </Stack>
            <Stack>
              <Typography fontSize={50} variant="h1">
                Isabelle Heloisa
              </Typography>
              <Stack gap={2} direction="row">
                <Stack>
                  <Typography fontSize={20}>10 seguidores</Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={20}>30 seguindo</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" gap={5}>
                <Stack>
                  <Typography fontSize={15}>Isabelle Heloisa</Typography>
                  <Typography fontSize={15}>20 anos</Typography>
                  <Typography fontSize={15}>noiva</Typography>
                  <Typography fontSize={15}>SP-São Paulo</Typography>
                </Stack>
                <Stack>
                  <Button variant="contained">Editar Perfil</Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: '70%' }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding={1}
            >
              <Stack direction="row" gap={1} alignItems="center">
                <Stack>
                  <Avatar sx={{ width: 50, height: 50 }} />
                </Stack>
                <Stack direction="row" gap={1} alignItems="center">
                  <Typography fontSize={15} variant="h1">
                    Isabelle Heloisa
                  </Typography>
                  <Typography color="gray" fontSize={12}>
                    Há 2 dias
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <IconButton aria-label="settings">
                  <FiMoreVertical />
                </IconButton>
              </Stack>
            </Stack>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <BiHeart />
              </IconButton>
              <IconButton aria-label="share">
                <BiShareAlt />
              </IconButton>
            </CardActions>
          </Card>
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
    </Stack>
  )
}
