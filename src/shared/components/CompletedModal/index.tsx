import React, { FC } from 'react'
import { Dialog, DialogTitle } from '@mui/material'

type PropsType = {
    open: boolean
}

const CompletedModal: FC<PropsType> = ({ open }) => {
    
    return (
        <Dialog open={open}>
            <DialogTitle>
                You have registered successfully!
            </DialogTitle>
        </Dialog>
    )
}

export default CompletedModal