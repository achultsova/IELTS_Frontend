import React, { FC, useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import theme from '../../../../theme'
import { useNavigate } from 'react-router-dom'
import notifyError from '../../../../../utils/notifyError'
import { instance } from '../../../../api/instance'


const TestsPageAdmin: FC = () => {
    const navigate = useNavigate()
    const [id, setId] = useState()
    const [count, setCount] = useState()
    useEffect(() => {
        const getTests = async () => {
            try {
                const res = await instance.get('/getAllTests')
                const length = res.data.length
                console.log(length)
                setCount(length)
                console.log(res.data)
            } catch (error) {
                let message: string
                if (error instanceof Error) {
                    message = error.message
                    navigate('/500')
                    notifyError(message)
                }
                else {
                    message = String(error)
                    notifyError(message)
                }
            }
        }
        getTests()
    }, [])
    const handleNewTest = async () => {
        try {
            console.log(count)
            const data = {
                count: count
            }
            const res = await instance.post('/createTest', data)
            await navigate(`/createTest/${res.data.test.id}`)
        } catch (error) {
            let message: string
            if (error instanceof Error) {
                message = error.message
                navigate('/500')
                notifyError(message)
            }
            else {
                message = String(error)
                notifyError(message)
            }
        }
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
            <Button onClick={handleNewTest}>
                Add new test
            </Button>
            <Typography variant='h1' color='black' sx={{ py: 5 }}>
                Tests Page Admin
            </Typography>
        </Box>
    )
}

export default TestsPageAdmin