import React, { FC, useEffect, useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import theme from '../../../../theme'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import notifyError from '../../../../../utils/notifyError'
import { instance } from '../../../../api/instance'

const CreateTest: FC = () => {
    const { id } = useParams<{ id?: string }>()
    const [testNumber, setTestNumber] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const getNumber = async () => {
            try {
                const res = await instance.get(`/getTestNumber/${id}`)
                setTestNumber(res.data.count)
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
        getNumber()
    }, [])

    const handleFirstSection = () => {
        navigate(`/createTest/${id}/firstSection`)
    }
    const handleSecondSection = () => {
        navigate(`/createTest/${id}/secondSection`)
    }
    const handleThirdSection = () => {
        navigate(`/createTest/${id}/thirdSection`)
    }
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12)
            },
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                    Create reading test
                </Typography>
                <Typography variant='body2' sx={{ alignSelf: 'start', pb: theme.spacing(5) }}>Reading test №</Typography>
                <TextField
                    fullWidth
                    id="number"
                    name="number"
                    value={testNumber}
                    disabled
                    sx={{ paddingBottom: theme.spacing(7), width: '100%' }}
                />
                <Button onClick={handleFirstSection} size='large' sx={{ width: '100%', color: 'black', border: '1px solid black', mb: theme.spacing(8) }}>
                    Section 1 (questions 1-14)
                </Button>
                <Button onClick={handleSecondSection} size='large' sx={{ width: '100%', color: 'black', border: '1px solid black', mb: theme.spacing(8) }}>
                    Section 2 (questions 15-27)
                </Button>
                <Button onClick={handleThirdSection} size='large' sx={{ width: '100%', color: 'black', border: '1px solid black', mb: theme.spacing(8) }}>
                    Section 3 (questions 28-40)
                </Button>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button variant="contained" sx={{ color: 'white', borderColor: 'black', backgroundColor: theme.palette.primary.main }}>
                        Publish Test
                    </Button>
                    <Button sx={{ backgroundColor: theme.palette.primary.light, color: 'black' }} variant="contained">
                        Cancel
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default CreateTest