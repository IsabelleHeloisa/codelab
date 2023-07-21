import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function TextEditor({ onChange, value, required, placeholder }) {
  return (
    <ReactQuill
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
