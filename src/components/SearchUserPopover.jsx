import { Popover, TextField } from '@mui/material'
import React from 'react'

export default function SearchUserPopover({
  openSearch,
  anchorEl,
  setAnchorEl
}) {
  return (
    <Popover
      id={openSearch ? 'searchUserPopover' : undefined}
      open={openSearch}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <>
        <TextField id="outlined-basic" placeholder="Pesquisar" />
      </>
    </Popover>
  )
}
