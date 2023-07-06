import React from 'react'
import GradientBox from '../components/GradientBox'
import LogoBox from '../components/LogoBox'
import AuthCard from '../components/AuthCard'
import { Button, Container, Stack, TextField } from '@mui/material'
import InputPassword from '../components/InputPassword'
export default function PasswordReset() {
  return (
    <GradientBox>
      <LogoBox />
      <AuthCard titlePage="Cadastre-se" subTitle="Informe a nova senha">
        <form className="w-full">
          <Container>
            <Stack
              gap={5}
              sx={{
                width: '100%'
              }}
            >
              <InputPassword label="Nova Senha" />
              <InputPassword label="Confirmar Senha" />
              <Stack alignItems="flex-end">
                <Button variant="contained">Redefinir Senha</Button>
              </Stack>
            </Stack>
          </Container>
        </form>
      </AuthCard>
    </GradientBox>
  )
}
