import React, { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'

const InternalServer: FC = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12)
            },
        }}>
            <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                Ooops, something went wrong. Please try again
            </Typography>
            <Button onClick={goHome} size='large' sx={{ color: 'black', borderColor: 'black' }} variant='outlined'>
                Home page
            </Button>
        </Box>
    )
}

export default InternalServer