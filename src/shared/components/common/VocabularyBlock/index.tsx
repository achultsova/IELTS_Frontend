import React, { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import theme from '../../../theme'
import VocabularyCard from './VocabularyCard'

const data = [
    {
        id: 35680480,
        vocName: 'MEDICINE',
        isLearned: true,
        isFavorite: true,
        level: 'pre-intermediate'
    },
    {
        id: 3564680,
        vocName: 'PETS',
        isLearned: false,
        isFavorite: true,
        level: 'intermediate'
    }
]

const VocabularyBlock: FC = () => {
    return (
        <Box sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Marquee speed={80} gradient={null}>
                <Typography variant='h1' color='black'>
                    Vocabulary.Vocabulary.Vocabulary.Vocabulary.
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
                    <VocabularyCard
                        key={item.id}
                        id={item.id}
                        vocName={item.vocName}
                        isLearned={item.isLearned}
                        isFavorite={item.isFavorite}
                        level={item.level}
                    />
                ))}
                <Button sx={{ border: '1px solid black', mb: theme.spacing(10) }}>
                    <Typography sx={{ color: 'black' }} variant='h5'>
                        View all
                    </Typography>
                </Button>
            </Box>
        </Box>

    )
}

export default VocabularyBlock