import React, {FC} from 'react'
import { Dialog } from '@mui/material'
import Form from './Form'

type Props ={
    open: boolean;
    handleClose: () => void;
}

const ModalSignIn: FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose= {handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  )
}

export default ModalSignIn