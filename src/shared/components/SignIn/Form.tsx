import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { DialogTitle, Link, Typography, Box } from '@mui/material'
import { instance } from '../../api/instance'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { authStorage } from '../../../utils/authStorage'
import { useUserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'

type Props = {
    handleClose: () => void;
    loginSignup: string;
    setLoginSignup: (loginSignup: string) => void
}

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

const Form: FC<Props> = ({ handleClose, loginSignup, setLoginSignup }) => {
  const [authError, setAuthError] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useUserContext()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:  async (data: LoginFormDataType) => {
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
        if(res.data.user.isAdmin === true) {
          localStorage.setItem('isAdmin', JSON.stringify(true))
        }
        handleClose()
        setAuthError(null)
      } catch (error) {
        navigate('/500')
        let message: string
        if (error instanceof Error) message = error.message
        else {
          message = String(error)
          setAuthError(message)
        }
      }
    }
  })

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword )
  }

  const onChange = () => {
    setLoginSignup('signup')
  }
  return (
    <Box px={3} sx={{width: '300px'}}>
      <Box>
        <DialogTitle>
          SIGN IN
        </DialogTitle>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        }} onSubmit={formik.handleSubmit}>
          <Box>
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
              sx={{paddingBottom: '16px'}}
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
          <Box py={3}>
            <Typography>
              <>
							Don&lsquo;t have an account yet?{' '}
                <Link onClick={onChange} sx={{cursor: 'pointer'}}>
                  Sign up
                </Link>
              </>
            </Typography>
          </Box>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Button variant="outlined" onClick={handleClose}>
            Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
          Submit
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  )
}

export default Form