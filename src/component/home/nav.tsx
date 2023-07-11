import { Button, Stack, StackProps } from '@mui/material'
import React from 'react'

const Nav = ({navProps}:{navProps:StackProps}) => {
  return (
    <Stack {...navProps}>
    <Button
      size="small"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
      href='/'
    >
      Home
    </Button>
    <Button
      size="small"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
      href='/about'
    >
      About Us
    </Button>
    <Button
      size="small"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
      href='/services'
    >
      Services
    </Button>
    <Button
      size="small"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
      href='/services'
    >
      Blog
    </Button>
    <Button
      color="warning"
      sx={{ color: "white", fontWeight: 600 }}
      variant="contained"
      href='/contact'
    >
      Contact us
    </Button>
  </Stack>
  )
}

export default Nav