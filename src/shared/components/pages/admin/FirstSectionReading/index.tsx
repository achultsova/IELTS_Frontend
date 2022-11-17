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

const FirstSectionReading: FC = () => {
    const [value, setValue] = React.useState('1')
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
                Section 1
            </Typography>
            <Box>
                <TabContext value={value} >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Text 1" value="1" />
                            <Tab label="Text 2" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <FirstText />
                    </TabPanel>
                    <TabPanel value="2">
                        <SecondText />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default FirstSectionReading