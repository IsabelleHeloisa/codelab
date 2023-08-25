import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl
} from '@mui/material'
import React from 'react'

import InputPassword from './InputPassword'

export default function PasswordResetModal({ open = false, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Alterar Senha</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite a nova senha</DialogContentText>

        <FormControl variant="standard">
          <InputPassword label="Nova Senha" />
          <InputPassword label="Confirmar Senha" />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Alterar</Button>
      </DialogActions>
    </Dialog>
  )
}
