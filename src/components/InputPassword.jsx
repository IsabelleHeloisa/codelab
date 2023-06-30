import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from '@mui/material'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export default function InputPassword({ label = 'Senha' }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
        id="standard-adornment-password"
        required
        label="Senha"
        type={showPassword ? 'text' : 'password'}
        sx={{
          width: '100%'
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
