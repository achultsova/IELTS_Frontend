import React from 'react'
import { Box, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Dashboard from '../Dashboard'
import ChangeInfo from '../ChangeInfo'
import ChangePassword from '../ChangePassword'

const Profile = () => {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Dashboard" value="1" />
                        <Tab label="Personal Information" value="2" />
                        <Tab label="Change Password" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Dashboard />
                </TabPanel>
                <TabPanel value="2">
                    <ChangeInfo />
                </TabPanel>
                <TabPanel value="3">
                    <ChangePassword />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default Profile