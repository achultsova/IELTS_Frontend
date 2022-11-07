import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'

const PageNotFound: FC = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
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
                404: Page not found
            </Typography>
            <Link to={'/'}>
                <Button onClick={goHome} sx={{ color: 'black', borderColor: 'black' }} variant='outlined' size='large'>Home page</Button>
            </Link>
        </Box>
    )
}

export default PageNotFound