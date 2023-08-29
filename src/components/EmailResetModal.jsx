import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material'
import React from 'react'

export default function EmailResetModal({ open = false, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Alterar Email</DialogTitle>
      <DialogContent>
        <DialogContentText>Digite o novo Email</DialogContentText>
        <Stack gap={1} direction="column" width="100%">
          <TextField
            margin="dense"
            label="Novo Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Confirmar novo Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Alterar</Button>
      </DialogActions>
    </Dialog>
  )
}
