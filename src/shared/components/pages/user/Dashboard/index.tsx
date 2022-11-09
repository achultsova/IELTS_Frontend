import React from 'react'
import { Box } from '@mui/material'
import theme from '../../../../theme'

const Dashboard = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12)
            },
        }}>
            Dashboard user page
        </Box>
    )
}

export default Dashboard