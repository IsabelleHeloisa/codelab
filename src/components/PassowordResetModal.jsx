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

export default function PasswordResetModal({ open = false, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Alterar Senha</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite a nova senha</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nova Senha"
          type="password"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Confirmar nova Senha"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Alterar</Button>
      </DialogActions>
    </Dialog>
  )
}
