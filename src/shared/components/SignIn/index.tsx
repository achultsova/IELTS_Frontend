import React, {FC, useState} from 'react'
import { Dialog } from '@mui/material'
import Form from './Form'
import FormSignUp from '../SignUp/FormSignUp'

type Props ={
    open: boolean;
    handleClose: () => void;
}

const ModalSignIn: FC<Props> = ({ open, handleClose }) => {
  const [loginSignup, setLoginSignup] = useState('login')
  return (
    <Dialog open={open} onClose= {handleClose}>
      { loginSignup === 'login' ? (
        <Form handleClose={handleClose} loginSignup={loginSignup} setLoginSignup={setLoginSignup}/>
      ) : (
        <FormSignUp handleClose={handleClose} loginSignup={loginSignup} setLoginSignup={setLoginSignup}/>
      )}
      
    </Dialog>
  )
}

export default ModalSignIn