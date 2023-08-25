import {
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Card,
  ListItemIcon,
  Button,
  IconButton
} from '@mui/material'
import React, { useState } from 'react'
import GradientBox from '../components/GradientBox'
import {
  BsArrowLeftCircle,
  BsBell,
  BsEnvelopeAt,
  BsKey,
  BsSun
} from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import ToggleTheme from '../components/ToggleTheme'
import EmailResetModal from '../components/EmailResetModal'
import PasswordResetModal from '../components/PassowordResetModal'

export default function ProfileManagement() {
  const [open, setOpen] = useState(false)
  const [openPassword, setOpenPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <GradientBox>
      <Stack alignItems="center" width="100vw">
        <Card
          sx={{
            height: {
              xs: '100%',
              lg: '85vh'
            },
            width: {
              xs: '100%',
              lg: '30%'
            }
          }}
        >
          <Stack padding={2} width="100%" maxWidth={400}>
            <Stack width={50}>
              <IconButton onClick={() => navigate('/feed')}>
                <BsArrowLeftCircle />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                marginBottom: 4
              }}
              gap={2}
            >
              <Typography fontSize={30} variant="h1">
                Configurações
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Stack>
                <Typography fontSize={15} variant="h4">
                  Segurança
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ gap: 1 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0
                        }}
                      >
                        <BsEnvelopeAt />
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => setOpen(true)}
                        primary="Alterar Email"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ gap: 1 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0
                        }}
                      >
                        <BsKey />
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => setOpenPassword(true)}
                        primary="Alterar Senha"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
              <Stack>
                <Typography fontSize={15} variant="h4">
                  Configurações
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ToggleTheme />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ gap: 1 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0
                        }}
                      >
                        <BsBell />
                      </ListItemIcon>
                      <ListItemText primary="Notificações" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
              <Stack>
                <Typography fontSize={15} variant="h4">
                  Sessão
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ gap: 1 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0
                        }}
                      >
                        <BiLogOut />
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => navigate('/login')}
                        primary="Logout"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
      <EmailResetModal open={open} handleClose={() => setOpen(false)} />
      <PasswordResetModal
        open={openPassword}
        handleClose={() => setOpenPassword(false)}
      />
    </GradientBox>
  )
}
