import React, { FC } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { DialogTitle, Link, Typography } from '@mui/material'

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
})

const Form: FC<Props> = ({handleClose }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div>
      <DialogTitle> Sign In</DialogTitle>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: '32px',
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
        <Typography sx={{paddingBottom: '16px'}}>
        Don&lsquo;t have an account yet?{' '}
          <Link>
								Sign Up
          </Link>
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit" variant="contained">
          Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form