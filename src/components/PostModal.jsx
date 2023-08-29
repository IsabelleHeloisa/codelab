import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack
} from '@mui/material'
import TextEditor from './TextEditor'
import { usePreference } from '../hooks/usePreference'

export default function PostModal({ open = false, handleClose }) {
  const { mode } = usePreference()
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent>
        <Stack minWidth="md" width="100%" minHeight={200}>
          <TextEditor placeholder="O que você está pensando?" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Postar</Button>
      </DialogActions>
    </Dialog>
  )
}
