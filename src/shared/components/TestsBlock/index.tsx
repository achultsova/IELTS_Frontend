import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import theme from '../../theme'
import TestCard from './TestCard'

const TestsBlock: FC = () => {
  return (
    <Box sx={{
      backgroundColor: '#393E59',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Marquee speed={80} gradient={null}>
        <Typography variant='h1' color='white'>
          Tests.Tests.Tests.Tests.Tests.Tests.Tests.
        </Typography>
      </Marquee>
      <Box sx={{
        mt: theme.spacing(12),
        minHeight: '100vh',
        width: 'auto',
        pl: 3,
        pr: 3,
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        [theme.breakpoints.up('xs')]: {
          flexDirection: 'row'
        },
      }}>
        <TestCard />
        <TestCard />
      </Box>
    </Box>

  )
}

export default TestsBlock