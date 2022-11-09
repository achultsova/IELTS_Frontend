import React, { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import theme from '../../../theme'
import { ReactComponent as Arrow } from '../../assets/icons/arrow11.svg'
import { ReactComponent as Done } from '../../assets/icons/group.svg'
import { adaptive } from '../../../../utils/adaptive'

export type CardType = {
    id: number;
    typeReading: string | null;
    testType: string;
    number: string;
    isCompleted: boolean;
    isFavorite: boolean
}

const TestCard: FC<CardType> = ({ id, typeReading, testType, number, isCompleted, isFavorite }) => {
    return (
        <Box sx={{
            display: 'flex',
            border: '2px solid',
            borderColor: theme.palette.primary.light,
            [theme.breakpoints.up('xs')]: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                px: theme.spacing(8),
            },
            [theme.breakpoints.down('xs')]: {
                width: '190px',
                flexDirection: 'column'
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
                <Typography variant='body2' color={'white'} sx={{ mb: theme.spacing(8), height: theme.spacing(1) }}>
                    {typeReading}
                </Typography>
                <Typography variant='h5' color={'white'} sx={{ pb: theme.spacing(8), display: { xs: 'flex', sm: 'none' } }}>
                    {testType}
                </Typography>
                <Typography variant='h3' color={'white'} sx={{ fontSize: adaptive(30, 54, 577, 1921), display: { xs: 'none', sm: 'flex' } }}>
                    {testType}
                </Typography>
                <Typography color={'white'} sx={{ pb: theme.spacing(12) }}>
                    {number}
                </Typography>
            </Box>
            <Button sx={{
                color: 'white',
                display: 'flex',
                border: '1px solid white',
                [theme.breakpoints.up('xs')]: {
                    borderRadius: '50%',
                    minWidth: theme.spacing(18),
                    height: theme.spacing(18)
                },
                [theme.breakpoints.down('xs')]: {
                    mx: theme.spacing(10)
                },
                alignItems: 'center',
                px: theme.spacing(4)
            }}>
                <Typography variant='body2'>
                    {isCompleted ? 'Results' : 'Go to test'}
                </Typography>
            </Button>
            {/* <Box sx={{ width: theme.spacing(8), pt: theme.spacing(8), }}>
                {isCompleted === true ? (
                    <Done />
                ) : (
                    null
                )}
            </Box> */}
        </Box>
    )
}

export default TestCard