import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Stack
} from '@mui/material'
import React from 'react'

import InputPassword from './InputPassword'

export default function PasswordResetModal({ open = false, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Alterar Senha</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite a nova senha</DialogContentText>
        <Stack gap={1} direction="column" width="100%">
          <InputPassword label="Nova Senha" />
          <InputPassword label="Confirmar Senha" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Alterar</Button>
      </DialogActions>
    </Dialog>
  )
}
