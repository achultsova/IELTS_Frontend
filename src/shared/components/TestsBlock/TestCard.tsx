import React, { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import theme from '../../theme'
import { ReactComponent as Arrow } from '../../assets/icons/arrow11.svg'

const TestCard = () => {
  return (
    <Box sx={{
      display: 'flex',
      border: '2px solid',
      borderColor: theme.palette.primary.light,
      width: '190px',
      height: '250px',
      [theme.breakpoints.up('xs')]: {
        mr: theme.spacing(12)
      },
      mb: theme.spacing(12)
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        pl: theme.spacing(8),
        pt: theme.spacing(8),
        width: '100%',
        alignItems: 'center',
      }}>
        <Typography color={'white'} sx={{ pb: theme.spacing(8) }}>
          Academic
        </Typography>
        <Typography color={'white'} sx={{ pb: theme.spacing(8) }}>
          READING
        </Typography>
        <Typography color={'white'} sx={{ pb: theme.spacing(12) }}>
          Test №12
        </Typography>
        <Button sx={{
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid white',
          alignItems: 'center',
          px: theme.spacing(4)
        }}>
          <Typography variant='body2' sx={{ pr: theme.spacing(8) }}>
            Go to test
          </Typography>
          <Arrow />
        </Button>
      </Box>
      <Box sx={{ width: theme.spacing(8) }}>

      </Box>
    </Box>
  )
}

export default TestCard