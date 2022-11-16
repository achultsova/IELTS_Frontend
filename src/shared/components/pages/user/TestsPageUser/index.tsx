import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../../theme'

const TestsPageUser: FC = () => {
    return (
        <Box sx={{
            minHeight: '100vh',
            width: 'auto',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12)
            },
        }}>
            <Typography variant='h1' color='black' sx={{ py: 5 }}>
                Tests Page User
            </Typography>
        </Box>
    )
}

export default TestsPageUser