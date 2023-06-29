import { BsEye, BsEyeSlash } from 'react-icons/bs'
import Logo from '../img/codelab-removebg-preview.png'
import {
  Button,
  Card,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { icons } from 'react-icons'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        padding: 5,
        background: 'rgb(9,13,12)',
        background:
          'linear-gradient(120deg, rgba(9,13,12,1) 0%, rgba(38,172,146,0.9920343137254902) 100%)',
        minHeight: '100vh'
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '50%'
        }}
      >
        <img id="imgAuthLogo" src={Logo} alt="logo"></img>
      </Stack>
      <Card
        sx={{
          height: '85vh',
          width: '45%'
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            width: '100%'
          }}
        >
          <Stack
            alignItems="center"
            gap={10}
            sx={{
              marginY: 4,
              width: '100%',
              maxWidth: 500
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: 70
              }}
            >
              Login
            </Typography>
            <form className="w-full">
              <Container>
                <Stack
                  gap={5}
                  sx={{
                    width: '100%'
                  }}
                >
                  <TextField
                    required
                    label="E-mail ou nome de usuário"
                    variant="standard"
                    sx={{
                      width: '100%'
                    }}
                  />
                  <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
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
                  <Stack alignItems="flex-end">
                    <Button variant="contained">Entrar</Button>
                  </Stack>
                </Stack>
              </Container>
            </form>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}
