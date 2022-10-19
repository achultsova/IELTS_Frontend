import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PageNotFound: FC = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: 'auto',
      ml: 3,
      mr: 3,
    }}>
      <Typography variant='h1' color='black' sx={{py: 5}}>
        404: Page not found
      </Typography>
      <Link to={'/'}>
        <Button sx={{color: 'black', borderColor: 'black'}} variant='outlined' size='large'>Home page</Button>
      </Link>
    </Box>
  )
}

export default PageNotFound