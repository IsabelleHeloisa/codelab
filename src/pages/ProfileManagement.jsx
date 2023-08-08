import {
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Card
} from '@mui/material'
import React from 'react'
import GradientBox from '../components/GradientBox'

export default function ProfileManagement() {
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
            <Stack
              sx={{
                marginBottom: 4
              }}
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
                    <ListItemButton>
                      <ListItemText primary="Alterar Email" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Alterar Senha" />
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
                    <ListItemButton>
                      <ListItemText primary="Tema" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
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
                    <ListItemButton>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </GradientBox>
  )
}
