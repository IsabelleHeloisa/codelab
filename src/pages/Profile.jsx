import { Avatar, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Menu from '../components/Menu'
import PublicationBox from '../components/PublicationBox'
import PostModalButton from '../components/PostModalButton'
import EditProfile from '../components/EditProfile'
import MenuMobile from '../components/MenuMobile'

export default function Profile() {
  const [open, setOpen] = useState(false)

  return (
    <Stack direction="row">
      <Stack height="100vh" width="100vw">
        <Stack alignItems="center" width="100%" paddingY={2}>
          <Stack
            gap={{ xs: 2, md: 10 }}
            direction="row"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Stack margin={1} alignItems="center">
              <Avatar
                sx={{ width: { xs: 90, md: 150 }, height: { xs: 90, md: 150 } }}
              />
            </Stack>
            <Stack>
              <Typography fontSize={{ xs: 35, md: 50 }} variant="h1">
                Isabelle Heloisa
              </Typography>
              <Stack gap={2} direction="row">
                <Stack>
                  <Typography fontSize={{ xs: 18, md: 20 }}>
                    10 seguidores
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={{ xs: 18, md: 20 }}>
                    30 seguindo
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                gap={{ xs: 2, md: 5 }}
              >
                <Stack>
                  <Typography fontSize={15}>Isabelle Heloisa</Typography>
                  <Typography fontSize={15}>20 anos</Typography>
                  <Typography fontSize={15}>noiva</Typography>
                  <Typography fontSize={15}>SP-São Paulo</Typography>
                </Stack>
                <Stack>
                  <Button
                    size="small"
                    onClick={() => setOpen(true)}
                    variant="contained"
                  >
                    Editar Perfil
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          padding={5}
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 2, md: 5 }}
        >
          <PublicationBox />
          <PublicationBox />
        </Stack>
        <EditProfile open={open} handleClose={() => setOpen(false)} />
        <Stack padding={5} gap={5}>
          <PostModalButton />
        </Stack>
      </Stack>
      <Menu />
      <MenuMobile />
    </Stack>
  )
}
