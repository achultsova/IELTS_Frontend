import React, { FC, useState } from 'react'
import { Box, Typography, TextField, Button, Tab } from '@mui/material'
import theme from '../../../../theme'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import notifyError from '../../../../../utils/notifyError'
import { instance } from '../../../../api/instance'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import FirstText from '../FirstText'
import SecondText from '../SecondText'
import ThirdText from '../ThirdText'
import FourthText from '../ForthText'

const SecondSectionReading: FC = () => {
    const [value, setValue] = React.useState('3')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                px: theme.spacing(14),
                pt: theme.spacing(8)
            },
            [theme.breakpoints.down('md')]: {
                px: theme.spacing(12),
                pt: theme.spacing(6)
            },
            flexDirection: 'column'
        }}>
            <Typography variant='h3' sx={{ pb: theme.spacing(8) }}>
                Section 2
            </Typography>
            <Box>
                <TabContext value={value} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Text 3" value="3" />
                            <Tab label="Text 4" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="3">
                        <ThirdText />
                    </TabPanel>
                    <TabPanel value="4">
                        <FourthText />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default SecondSectionReading