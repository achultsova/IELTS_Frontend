import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Typography, Box } from '@mui/material'
import { instance } from '../../../../api/instance'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { authStorage } from '../../../../../utils/authStorage'
import { useUserContext } from '../../../../context/userContext'
import { Link as LinkTo, useNavigate } from 'react-router-dom'
import theme from '../../../../theme'
import notifyError from '../../../../../utils/notifyError'


type LoginFormDataType = {
    email: string;
    password: string;
};


const validationSchema = yup.object({
    email: yup
        .string()
        .max(256, 'Email length must be no more than 256 symbols')
        .email('Please provide valid email address ')
        .required('Please enter your email'),
    password: yup
        .string()
        .max(64, 'Password lenght must be from 8 to 64 symbols')
        .min(8, 'Password lenght must be from 8 to 64 symbols')
        .required('Please enter your password'),
})

const SignIn: FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useUserContext()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (data: LoginFormDataType) => {
            try {
                const user = {
                    email: data.email,
                    password: data.password
                }
                const res = await instance.post('/login', user)
                authStorage.setAccess(res.data.accessToken)
                await setUserData(res.data.user)
                localStorage.setItem('isAuth', JSON.stringify(true))
                localStorage.setItem('username', JSON.stringify(res.data.user.name))
                localStorage.setItem('userId', JSON.stringify(res.data.user.id))
                localStorage.setItem('email', JSON.stringify(res.data.user.email))
                localStorage.setItem('surname', JSON.stringify(res.data.user.surname))
                if (res.data.user.isAdmin === true) {
                    localStorage.setItem('isAdmin', JSON.stringify(true))
                }
                navigate('/')
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
    })

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const goHome = () => {
        navigate('/')
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
                SIGN IN
            </Typography>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }} onSubmit={formik.handleSubmit}>
                <Typography sx={{ pb: theme.spacing(7) }}>
                    Don&lsquo;t have an account yet?{' '}
                    <LinkTo to={'/signup'}>
                        Sign up
                    </LinkTo>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
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
                </Box>
                <Box py={3} sx={{ alignSelf: 'end' }}>
                    <LinkTo to={'/forgotPassword'}>
                        Forgot password?
                    </LinkTo>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                    <Button variant="outlined" onClick={goHome} >
                        Cancel
                    </Button>
                    <Button color="primary" type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
            </form>
        </Box >
    )
}

export default SignIn