import React, { FC, useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { instance } from '../../api/instance'
import TextField from '@mui/material/TextField'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'


type DataType = {
    name: string;
    surname: string;
    email: string;
}

const validationSchema = yup.object({
    name: yup
        .string()
        .max(30, 'Name length must be between 1 and 30 symbols')
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can contain only letters')
        .required('Please enter your name'),
    surname: yup
        .string()
        .max(30, 'Surname length must be between 1 and 30 symbols')
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Surname can contain only letters')
        .test('surname-not-name', 'Surname can\'t be the same as name', function (value) {
            return this.parent.name !== value
        })
        .required('Please enter your surname'),
})

const ChangeInfo = () => {
    const [completed, setCompleted] = useState(false)
    const [profile, setProfile] = useState()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: 'email@gmail.com',
            name: '',
            surname: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (data: DataType) => {
            try {
                const user = {
                    email: 'email@gmail.com',
                    name: data.name,
                    surname: data.surname,
                }
                const res = await instance.post('/changeInfo', user)
                setCompleted(true)
            } catch (error) {
                let message: string
                if (error instanceof Error) message = error.message
                else {
                    message = String(error)
                }
            }
        }
    })

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userId') || '[]')
        if (userId === null) {
            navigate('/500')
        } else {
            const getProfile = async () => {
                const data = {
                    id: userId
                }
                const response = await instance.post('/getProfile', data)
                setProfile(response.data)
            }
            getProfile()
        }
    }, [])

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                Change user info
            </Typography>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder='email@gmail.com'
                    value={'email@gmail.com'}
                    disabled
                    sx={{ paddingBottom: theme.spacing(7), width: theme.spacing(20) }}
                />
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ paddingBottom: theme.spacing(7), width: theme.spacing(20) }}
                />
                <TextField
                    fullWidth
                    id="surname"
                    name="surname"
                    label="Surname"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                    helperText={formik.touched.surname && formik.errors.surname}
                    sx={{ paddingBottom: theme.spacing(7), width: theme.spacing(20) }}
                />
                <Box>
                    <Button color="primary" type="submit" variant="contained">
                        Change
                    </Button>
                </Box>
            </form>

        </Box >
    )
}

export default ChangeInfo