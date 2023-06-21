import { Button, Stack, StackProps } from '@mui/material'
import React from 'react'

const Nav = ({navProps}:{navProps:StackProps}) => {
  return (
    <Stack {...navProps}>
    <Button
      size="large"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
    >
      Home
    </Button>
    <Button
      size="large"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
    >
      About Us
    </Button>
    <Button
      size="large"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
    >
      Services
    </Button>
    <Button
      size="large"
      sx={{ color: "white", fontWeight: 600 }}
      variant="text"
    >
      Blog
    </Button>
    <Button
      color="warning"
      sx={{ color: "white", fontWeight: 600 }}
      variant="contained"
    >
      Contact us
    </Button>
  </Stack>
  )
}

export default Nav