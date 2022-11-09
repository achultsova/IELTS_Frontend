import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import theme from '../../../theme'
import TestCard from './TestCard'

const data = [
    {
        id: 33451113,
        typeReading: 'General',
        testType: 'READING',
        number: 'Test №4',
        isCompleted: false,
        isFavorite: false
    },
    {
        id: 336463363,
        typeReading: 'General',
        testType: 'READING',
        number: 'Test №4',
        isCompleted: false,
        isFavorite: false
    },
    {
        id: 3344253,
        typeReading: 'General',
        testType: 'READING',
        number: 'Test №4',
        isCompleted: false,
        isFavorite: false
    },
    {
        id: 3653453,
        typeReading: 'General',
        testType: 'READING',
        number: 'Test №4',
        isCompleted: false,
        isFavorite: false
    },
    {
        id: 33653573,
        typeReading: 'General',
        testType: 'READING',
        number: 'Test №4',
        isCompleted: true,
        isFavorite: false
    },
    {
        id: 35640,
        typeReading: null,
        testType: 'LISTENING',
        number: 'Test №6',
        isCompleted: false,
        isFavorite: true
    }
]

const TestsBlock: FC = () => {
    return (
        <Box sx={{
            backgroundColor: '#393E59',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Marquee speed={80} gradient={null}>
                <Typography variant='h1' color='white'>
                    Tests.Tests.Tests.Tests.Tests.Tests.Tests.
                </Typography>
            </Marquee>
            <Box sx={{
                mt: theme.spacing(12),
                minHeight: '100vh',
                width: 'auto',
                [theme.breakpoints.up('md')]: {
                    px: theme.spacing(14)
                },
                [theme.breakpoints.down('md')]: {
                    px: theme.spacing(12)
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {data.map((item) => (
                    <TestCard
                        key={item.id}
                        id={item.id}
                        typeReading={item.typeReading}
                        testType={item.testType}
                        number={item.number}
                        isCompleted={item.isCompleted}
                        isFavorite={item.isFavorite}
                    />
                ))}
                <Button sx={{ border: '1px solid white', mb: theme.spacing(10) }}>
                    <Typography sx={{ color: 'white' }} variant='h5'>
                        View all
                    </Typography>
                </Button>
            </Box>
        </Box>

    )
}

export default TestsBlock