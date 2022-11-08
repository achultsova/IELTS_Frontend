import React, { FC, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { instance } from '../../api/instance'
import TextField from '@mui/material/TextField'
import theme from '../../theme'
import notifyError from '../../../utils/notifyError'
import notify from '../../../utils/notify'
import { useNavigate } from 'react-router-dom'

type DataType = {
    name?: string;
    surname?: string;
    email?: string;
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

const ChangeInfo: FC = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = React.useState<DataType>({
        email: '',
        name: '',
        surname: ''
    })

    useEffect(() => {
        const email = JSON.parse(localStorage.getItem('email') || '[]')
        const name = JSON.parse(localStorage.getItem('username') || '[]')
        const surname = JSON.parse(localStorage.getItem('surname') || '[]')
        setUserData({
            email: email,
            name: name,
            surname: surname
        })
    }, [userData])

    const formik = useFormik({
        initialValues: {
            email: userData.email,
            name: userData.name,
            surname: userData.surname,
        },
        validationSchema: validationSchema,
        onSubmit: async (data: DataType) => {
            try {
                const user = {
                    email: userData.email,
                    name: data.name,
                    surname: data.surname,
                }
                const res = await instance.post('/changeInfo', user)
                notify('Your personal data have been successfully changed')
                localStorage.setItem('username', JSON.stringify(res.data.user.name))
                localStorage.setItem('surname', JSON.stringify(res.data.user.surname))
            } catch (error) {
                let message: string
                if (error instanceof Error) {
                    message = error.message
                    navigate('/500')
                    notifyError(message)
                }
                else {
                    message = String(error)
                    console.log(message)
                }
            }
        }
    })

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12)
            },
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
                    label={userData.email}
                    placeholder={userData.email}
                    value={userData.email}
                    disabled
                    sx={{ paddingBottom: theme.spacing(7), width: theme.spacing(20) }}
                />
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="name"
                    placeholder={userData.name}
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
                    placeholder={userData.surname}
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