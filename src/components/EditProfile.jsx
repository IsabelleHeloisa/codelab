import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  MenuItem,
  Stack,
  TextField
} from '@mui/material'
import React from 'react'

export default function EditProfile({ open, handleClose }) {
  const gender = [
    {
      value: 1,
      label: 'Feminino'
    },
    {
      value: 2,
      label: 'Masculino'
    }
  ]
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent>
        <Stack gap={5} alignItems="center">
          <IconButton component="label">
            <Avatar sx={{ width: 100, height: 100 }} />
            <input type="file" hidden />
          </IconButton>
          <TextField
            required
            label="Nome"
            variant="standard"
            sx={{
              width: '100%'
            }}
          />
          <TextField
            required
            label="Nome de usuário"
            variant="standard"
            sx={{
              width: '100%'
            }}
          />
          <TextField
            label="Bio"
            multiline
            variant="standard"
            sx={{
              width: '100%'
            }}
          />
          <TextField
            required
            select
            value={0}
            label="Gênero"
            variant="standard"
            sx={{
              width: '100%'
            }}
          >
            {gender.map(option => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Editar</Button>
      </DialogActions>
    </Dialog>
  )
}
