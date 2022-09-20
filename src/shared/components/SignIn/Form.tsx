import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { DialogTitle, Link, Typography, Box } from '@mui/material'

type Props = {
    handleClose: () => void
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .label('confirm password')
    .test('passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
    })
    .required()
})

const Form: FC<Props> = ({handleClose }) => {
  const [loginSignup, setLoginSignup] = useState('login')
  const [authError, setAuthError] = useState(null)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const onChange = () => {
    setAuthError(null)
    loginSignup === 'signup'
      ? setLoginSignup('login')
      : setLoginSignup('signup')
  }
  return (
    <Box px={3} sx={{width: '300px'}}>
      <DialogTitle>
        {loginSignup === 'signup' ? (
          'SIGN UP') : ('SIGN IN')}
      </DialogTitle>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
      }} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{paddingBottom: '16px'}}
        />
        {loginSignup === 'signup'
          ? (
            <Box>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                sx={{paddingBottom: '16px'}}
              />
              <TextField
                fullWidth
                id="repeatPassword"
                name="repeatPassword"
                label="Repeat password"
                type="repeatPassword"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
              />
            </Box>
          )
          : (
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          )}
        <Box py={3}>
          <Typography>
            {loginSignup === 'signup' ? (
              <>
							Already have an account?{' '}
                <Link onClick={onChange} sx={{cursor: 'pointer'}}>
								Sign In
                </Link>
              </>
            ) : (
              <>
							Don&lsquo;t have an account yet?{' '}
                <Link onClick={onChange} sx={{cursor: 'pointer'}}>
								Sign up
                </Link>
              </>
            )}
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
  )
}

export default Form