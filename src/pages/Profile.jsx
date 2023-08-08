import { Avatar, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Menu from '../components/Menu'
import PublicationBox from '../components/PublicationBox'
import PostModalButton from '../components/PostModalButton'
import EditProfile from '../components/EditProfile'

export default function Profile() {
  const [open, setOpen] = useState(false)

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
                  <Button onClick={() => setOpen(true)} variant="contained">
                    Editar Perfil
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center" gap={5}>
          <PublicationBox />
          <PublicationBox />
        </Stack>
        <EditProfile open={open} handleClose={() => setOpen(false)} />
        <Stack padding={5} gap={5}>
          <PostModalButton />
        </Stack>
      </Stack>
      <Menu />
    </Stack>
  )
}
