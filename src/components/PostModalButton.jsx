import { Fab, Stack } from '@mui/material'
import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import PostModal from './PostModal'

export default function PostModalButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Fab
        sx={{ position: 'fixed', bottom: 30 }}
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <MdAdd />
      </Fab>
      <PostModal open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
