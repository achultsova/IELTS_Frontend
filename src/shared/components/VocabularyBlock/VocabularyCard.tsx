import React, { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import theme from '../../theme'
import { ReactComponent as Arrow } from '../../assets/icons/arrow11.svg'
import { ReactComponent as Done } from '../../assets/icons/group.svg'
import { adaptive } from '../../../utils/adaptive'

export type CardType = {
    id: number;
    vocName: string;
    isLearned: boolean;
    isFavorite: boolean;
    level: string
}

const VocabularyCard: FC<CardType> = ({ id, vocName, isLearned, level, isFavorite }) => {
    return (
        <Box sx={{
            display: 'flex',
            border: '2px solid',
            borderColor: theme.palette.primary.dark,
            [theme.breakpoints.up('xs')]: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                px: theme.spacing(8),
            },
            [theme.breakpoints.down('xs')]: {
                width: '190px',
                flexDirection: 'column',
                justifyContent: 'space-between'
            },
            height: '250px',
            [theme.breakpoints.up('md')]: {
                mb: theme.spacing(10)
            },
            [theme.breakpoints.down('md')]: {
                mb: theme.spacing(8)
            },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                pt: theme.spacing(8),
                width: '100%',
                [theme.breakpoints.down('xs')]: {
                    alignItems: 'center',
                },
            }}>
                <Typography variant='h5' color={theme.palette.primary.dark} sx={{ pb: theme.spacing(8), display: { xs: 'flex', sm: 'none' } }}>
                    {vocName}
                </Typography>
                <Typography variant='h3' color={theme.palette.primary.dark} sx={{ fontSize: adaptive(30, 54, 577, 1921), display: { xs: 'none', sm: 'flex' } }}>
                    {vocName}
                </Typography>
                <Typography color={theme.palette.primary.dark} sx={{ pb: theme.spacing(12) }}>
                    {level}
                </Typography>
            </Box>
            <Button sx={{
                color: theme.palette.primary.dark,
                display: 'flex',
                border: '1px solid',
                borderColor: theme.palette.primary.dark,
                [theme.breakpoints.up('xs')]: {
                    borderRadius: '50%',
                    minWidth: theme.spacing(18),
                    height: theme.spacing(18)
                },
                [theme.breakpoints.down('xs')]: {
                    mx: theme.spacing(10),
                    mb: theme.spacing(8)
                },
                alignItems: 'center',
                px: theme.spacing(4)
            }}>
                <Typography variant='body2'>
                    {isLearned ? 'REPEAT' : 'LEARN'}
                </Typography>
            </Button>
        </Box>
    )
}

export default VocabularyCard