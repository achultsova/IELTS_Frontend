import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import theme from '../../theme'
import TestCard from './TestCard'
import { CardType } from './TestCard'

const data = [
  {
    id: 33480,
    typeReading: 'Academic',
    testType: 'READING',
    number: 'Test №3',
    isCompleted: false,
    isFavorite: false
  },
  {
    id: 33453,
    typeReading: 'General',
    testType: 'READING',
    number: 'Test №4',
    isCompleted: true,
    isFavorite: false
  },
  {
    id: 35640,
    typeReading: null,
    testType: 'LISTENING',
    number: 'Test №6',
    isCompleted: false,
    isFavorite: true
  }
]

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
        {data.map((item) => (
          <TestCard
            key={item.id}
            id={item.id}
            typeReading={item.typeReading}
            testType={item.testType}
            number={item.number}
            isCompleted={item.isCompleted}
            isFavorite={item.isFavorite}
          />
        ))}
      </Box>
    </Box>

  )
}

export default TestsBlock