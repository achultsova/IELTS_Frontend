import React, { FC, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { instance } from '../../api/instance'
import TextField from '@mui/material/TextField'
import theme from '../../theme'
import { useNavigate } from 'react-router-dom'

type LoginFormDataType = {
    email: string;
}

const validationSchema = yup.object({
    email: yup
        .string()
        .max(256, 'Email length must be no more than 256 symbols')
        .email('Please provide valid email address ')
        .required('Please enter your email'),
})

const ForgotPassword: FC = () => {
    const [completed, setCompleted] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (data: LoginFormDataType) => {
            try {
                const user = {
                    email: data.email,
                }
                const res = await instance.post('/forgotPassword', user)
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

    const goSignin = () => {
        navigate('/signin')
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
            {completed === true ? (
                <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                    An email has been sent to your email address!
                </Typography>
            ) : (
                <Box>
                    <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                        Trouble logging in?
                    </Typography>
                    <Typography variant='body2' sx={{ pb: theme.spacing(8) }}>
                        Enter your email and we will send you a link to get back into your account.
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
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ paddingBottom: theme.spacing(7), width: theme.spacing(20) }}
                        />
                        <Box>
                            <Button onClick={goSignin} variant='outlined' sx={{ mr: theme.spacing(5) }}>
                                Cansel
                            </Button>
                            <Button color="primary" type="submit" variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box >
            )}

        </Box >
    )
}

export default ForgotPassword