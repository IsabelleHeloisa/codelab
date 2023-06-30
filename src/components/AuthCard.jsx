import {
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React from 'react'
import InputPassword from './InputPassword'

export default function ({ titlePage, children }) {
  return (
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
          gap={5}
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
            {titlePage}
          </Typography>
          {children}
        </Stack>
      </Stack>
    </Card>
  )
}
