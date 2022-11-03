import React, { FC, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { instance } from '../../api/instance'
import TextField from '@mui/material/TextField'
import theme from '../../theme'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { useParams } from 'react-router-dom'

type LoginFormDataType = {
    id?: string;
    password: string;
    confirmPassword?: string;
}

const validationSchema = yup.object({
    password: yup
        .string()
        .max(64, 'Password lenght must be from 8 to 64 symbols')
        .min(8, 'Password lenght must be from 8 to 64 symbols')
        .required('Please enter your password'),
    confirmPassword: yup
        .string()
        .test('passwords-match', 'Passwords don\'t match', function (value) {
            return this.parent.password === value
        })
        .required('Please confirm your password')
})

const SetNewPassword: FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { id } = useParams<{ id?: string }>()
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (data: LoginFormDataType) => {
            try {
                const user = {
                    password: data.password,
                    id: id
                }
                const res = await instance.post(`/setNewPassword/${id}`, user)
            } catch (error) {
                let message: string
                if (error instanceof Error) message = error.message
                else {
                    message = String(error)
                }
            }
        }
    })


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
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
            <Typography variant='h2' sx={{ pb: theme.spacing(8) }}>
                Set New Password
            </Typography>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{ paddingBottom: '16px' }}
                    InputProps={{
                        endAdornment:
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                    }}
                />
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm password"
                    type={showPassword ? 'text' : 'password'}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    InputProps={{
                        endAdornment:
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                    }}
                />
                <Button sx={{ mt: theme.spacing(6) }} color="primary" type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default SetNewPassword