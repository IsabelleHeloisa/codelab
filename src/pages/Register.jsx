import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import AuthCard from '../components/AuthCard'
import InputPassword from '../components/InputPassword'
import GradientBox from '../components/GradientBox'
import LogoBox from '../components/LogoBox'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <GradientBox>
      <LogoBox />
      <AuthCard titlePage="Cadastre-se  ">
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
                label="Nome de usuário"
                variant="standard"
                sx={{
                  width: '100%'
                }}
              />
              <TextField
                required
                type="email"
                label="E-mail"
                variant="standard"
                sx={{
                  width: '100%'
                }}
              />
              <InputPassword label="Nova Senha" />
              <InputPassword label="Confirmar Senha" />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Link to="/login">Já tenho conta</Link>
                <Button variant="contained">Cadastrar-se</Button>
              </Stack>
            </Stack>
          </Container>
        </form>
      </AuthCard>
    </GradientBox>
  )
}
