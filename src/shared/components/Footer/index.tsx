import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import theme from '../../theme'

const Copyright = () => {
  return (
    <Typography variant="body2" sx={{color: theme.palette.primary.light}}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.ielts.org/">
        IELTS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 'auto',
          backgroundColor: theme.palette.primary.dark
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body1" sx={{color: theme.palette.primary.light}}>
            IELTS preparing app
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer