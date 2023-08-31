import { IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { LiaHomeSolid } from 'react-icons/lia'
import { usePreference } from '../hooks/usePreference'
import { MdAdd } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { VscSettingsGear } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import PostModal from './PostModal'

export default function MenuMobile() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { mode } = usePreference()
  return (
    <>
      <Stack
        overflow="hidden"
        direction="row"
        justifyContent="space-between"
        position="fixed"
        bottom={0}
        width="100%"
        bgcolor={mode === 'dark' ? 'black' : 'white'}
        borderTop="1px solid #ccc"
        sx={{
          display: {
            xs: 'flex',
            md: 'none'
          }
        }}
      >
        <IconButton onClick={() => navigate('/feed')}>
          <LiaHomeSolid />
        </IconButton>
        <IconButton>
          <BiSearchAlt />
        </IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <MdAdd />
        </IconButton>
        <IconButton onClick={() => navigate('/profile')}>
          <CgProfile />
        </IconButton>
        <IconButton onClick={() => navigate('/profilemanagement')}>
          <VscSettingsGear />
        </IconButton>
      </Stack>
      <PostModal open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
