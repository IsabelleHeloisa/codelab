import { Card, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ({ titlePage, children, subTitle }) {
  return (
    <Card
      sx={{
        height: {
          xs: '100%',
          lg: '85vh'
        },
        width: {
          xs: '100%',
          lg: '45%'
        }
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
          <Stack alignItems="center" gap={2}>
            <Typography
              variant="h1"
              sx={{
                fontSize: 70
              }}
            >
              {titlePage}
            </Typography>
            {subTitle && (
              <Typography
                variant="h3"
                sx={{
                  fontSize: 25
                }}
              >
                {subTitle}
              </Typography>
            )}
          </Stack>
          {children}
        </Stack>
      </Stack>
    </Card>
  )
}
