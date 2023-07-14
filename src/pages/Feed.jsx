import React from 'react'
import Menu from '../components/Menu'
import { Button, ButtonGroup, Stack, Typography } from '@mui/material'

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
        </Stack>
      </Stack>
      <Menu />
    </Stack>
  )
}
