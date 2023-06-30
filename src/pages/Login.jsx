import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import AuthCard from '../components/AuthCard'
import InputPassword from '../components/InputPassword'
import GradientBox from '../components/GradientBox'
import LogoBox from '../components/LogoBox'

export default function Login() {
  return (
    <GradientBox>
      <LogoBox />
      <AuthCard titlePage="Login">
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
              <InputPassword />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <a href="#">Não tenho conta</a>
                <Button variant="contained">Entrar</Button>
              </Stack>
            </Stack>
          </Container>
        </form>
      </AuthCard>
    </GradientBox>
  )
}
