import { Fab, Stack } from '@mui/material'
import React from 'react'
import { MdAdd } from 'react-icons/md'

export default function ButtonModalNewPubli() {
  return (
    <Stack justifyContent="center" alignItems="flex-start">
      <Fab
        sx={{ position: 'fixed', bottom: 30 }}
        color="primary"
        aria-label="add"
      >
        <MdAdd />
      </Fab>
    </Stack>
  )
}
