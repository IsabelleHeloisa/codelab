import React from 'react'
import Menu from '../components/Menu'
import PublicationBox from '../components/PublicationBox'
import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import PostModalButton from '../components/PostModalButton'

export default function Feed() {
  return (
    <Stack direction="row">
      <Stack height="100vh" width="100vw">
        <Stack padding={5} gap={5}>
          <Typography fontSize={40} variant="h1">
            Página Inicial
          </Typography>
          <Stack
            // bgcolor="green"
            direction="row"
            width="100%"
          >
            <ButtonGroup
              fullWidth
              variant="text"
              aria-label="text button group"
              color="inherit"
            >
              <Button sx={{ flexGrow: 1 }} width="50%">
                <Typography color="black" fontSize={15} variant="h1">
                  Para você
                </Typography>
              </Button>
              <Button sx={{ flexGrow: 1 }} width="50%">
                <Typography color="black" fontSize={15} variant="h1">
                  Seguindo
                </Typography>
              </Button>
            </ButtonGroup>
          </Stack>
          <Stack justifyContent="center" alignItems="center" gap={5}>
            <PublicationBox />
            <PublicationBox />
          </Stack>
          <PostModalButton />
        </Stack>
      </Stack>
      <Menu />
    </Stack>
  )
}
