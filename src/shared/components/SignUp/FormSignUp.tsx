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
// import { useNavigate } from 'react-router-dom'
import { authStorage } from '../../../utils/authStorage'

type Props = {
  handleClose: () => void;
  loginSignup: string;
  setLoginSignup: (loginSignup: string) => void
}

type RegistrationFormDataType = {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    confirmPassword?: string;
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
    .test('surname-not-name', 'Surname can\'t be the same as name', function(value){
      return this.parent.name !== value
    })
    .required('Please enter your surname'),
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
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Passwords don\'t match', function(value){
      return this.parent.password === value
    })
    .required('Please confirm your password')
})

const FormSignUp: FC<Props> = ({ handleClose, loginSignup, setLoginSignup }) => {
  const [authError, setAuthError] = useState(null)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  // const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit:  async (data: RegistrationFormDataType) => {
      try {
        const user = {
          name: data.name,
          surname: data.surname,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          isAdmin: false
        }
        await instance.post('/registration', user)
        setShowConfirm(true)
      } catch (error) {
        let message: string
        if (error instanceof Error) message = error.message
        else message = String(error)
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
    setLoginSignup('login')
  }
  return (
    <Box px={3} sx={{width: '300px'}}>
      {showConfirm ? (
        <DialogTitle>
            A confirmation email has been sent to your email address!
        </DialogTitle>
      ) : (
        <Box>
          <DialogTitle>
              SIGN UP
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
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{paddingBottom: '16px'}}
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
                sx={{paddingBottom: '16px'}}
              />
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
                sx={{paddingBottom: '16px'}}
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
            </Box>
            <Box py={3}>
              <Typography>
                <>
							Already have an account?{' '}
                  <Link onClick={onChange} sx={{cursor: 'pointer'}}>
							Sign In
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
      )}
    </Box>
  )
}

export default FormSignUp