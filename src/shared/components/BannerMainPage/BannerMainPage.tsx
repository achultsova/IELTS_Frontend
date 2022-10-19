import { Box, Grid, Typography, Paper, Container, Button } from '@mui/material'
import { minHeight } from '@mui/system'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme'

const BannerMainPage: FC = () => {
  return (
    <Box sx={{
      width: 'auto',
      ml: 3,
      mr: 3,
      mb: 3,
      [theme.breakpoints.up(1100 + 4 * 3 * 2)]: {
        maxWidth: 'xl',
      },
      color: '#393E59',
      backgroundColor: theme.palette.common.white,
      display: 'flex',
    }}>
      <Grid container sx={{mt: 'auto'}}>
        <Grid item md={6}>
          <Box sx={{
            [theme.breakpoints.up('md')]: {
              paddingRight: 0
            }}}>
            <Typography variant='h1' color='black' sx={{py: 5}}>
                IELTS
            </Typography>
            <Typography variant='h4' color='inherit' paragraph sx={{pb: 5,}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
            </Typography>
            <Link to={'/about'}>
              <Button variant='outlined' size='large' sx={{color: '#393E59', borderColor: '#393E59'}}>
                About us
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BannerMainPage