import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import React from 'react'
import { BiHeart, BiShareAlt } from 'react-icons/bi'
import { FiMoreVertical } from 'react-icons/fi'

export default function PublicationBox() {
  return (
    <Card sx={{ maxWidth: '70%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={1}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Stack>
            <Avatar sx={{ width: 50, height: 50 }} />
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography fontSize={15} variant="h1">
              Isabelle Heloisa
            </Typography>
            <Typography color="gray" fontSize={12}>
              Há 2 dias
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <IconButton aria-label="settings">
            <FiMoreVertical />
          </IconButton>
        </Stack>
      </Stack>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BiHeart />
        </IconButton>
        <IconButton aria-label="share">
          <BiShareAlt />
        </IconButton>
      </CardActions>
    </Card>
  )
}
