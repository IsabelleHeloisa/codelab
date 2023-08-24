import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material'
import React from 'react'

export default function EmailResetModal({ open = false, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Alterar Email</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite o novo Email</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Novo Email"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Confirmar novo Email"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Alterar00</Button>
      </DialogActions>
    </Dialog>
  )
}
