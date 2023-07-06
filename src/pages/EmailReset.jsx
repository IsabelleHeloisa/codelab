import React from 'react'
import GradientBox from '../components/GradientBox'
import LogoBox from '../components/LogoBox'
import AuthCard from '../components/AuthCard'
import { Button, Container, Stack, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export default function EmailReset() {
  return (
    <GradientBox>
      <LogoBox />
      <AuthCard
        titlePage="Redefinir Senha"
        subTitle="Informe o e-mail ou nome de usuário para o qual deseja redefinir a sua senha"
      >
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

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Link to="/login">Voltar ao Login</Link>
                <Button variant="contained">Redefinir Senha</Button>
              </Stack>
            </Stack>
          </Container>
        </form>
      </AuthCard>
    </GradientBox>
  )
}
