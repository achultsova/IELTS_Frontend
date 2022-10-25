import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import theme from '../../theme'
import TopicCard from './TopicCard'


const data = [
    {
        id: 35680480,
        topicName: 'General tips',
        isRead: true,
        isFavorite: true,
        category: 'READING'
    },
    {
        id: 3564680,
        topicName: 'SUCCESS STORY',
        isRead: false,
        isFavorite: true,
        category: 'STORIES'
    }
]

const TopicsBlock: FC = () => {
    return (
        <Box sx={{
            backgroundColor: '#393E59',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Marquee speed={80} gradient={null}>
                <Typography variant='h1' color='white'>
                    Topics.Topics.Topics.Topics.Topics.
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
                    <TopicCard
                        key={item.id}
                        id={item.id}
                        topicName={item.topicName}
                        isRead={item.isRead}
                        isFavorite={item.isFavorite}
                        category={item.category}
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

export default TopicsBlock