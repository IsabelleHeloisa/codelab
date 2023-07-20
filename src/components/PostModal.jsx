import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack
} from '@mui/material'
import { Editor, EditorState } from 'draft-js'
import { useState } from 'react'
import 'draft-js/dist/Draft.css'

export default function PostModal({ open = false, handleClose }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent>
        <Stack minWidth="md" width="100%" minHeight={200}>
          <Editor
            placeholder="O que você está pensando?"
            editorState={editorState}
            onChange={setEditorState}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Postar</Button>
      </DialogActions>
    </Dialog>
  )
}
