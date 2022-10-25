import React, { FC } from 'react'
import { Box } from '@mui/material'
import BannerMainPage from '../BannerMainPage/BannerMainPage'
import TestsBlock from '../TestsBlock'
import VocabularyBlock from '../VocabularyBlock'
import TopicsBlock from '../TopicsBlock'

const Home: FC = () => {
    return (
        <Box>
            <BannerMainPage />
            <TestsBlock />
            <VocabularyBlock />
            <TopicsBlock />
        </Box>
    )
}

export default Home