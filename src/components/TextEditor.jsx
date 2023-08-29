import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { usePreference } from '../hooks/usePreference'

export default function TextEditor({ onChange, value, required, placeholder }) {
  const { mode } = usePreference()
  return (
    <ReactQuill
      className={mode === 'dark' ? 'textEditorDark' : 'textEditorLight'}
      onChange={onChange}
      value={value}
      required={required}
      placeholder={placeholder}
      theme="snow"
      modules={{
        toolbar: [['bold', 'italic', 'underline', 'code-block']]
      }}
    />
  )
}
