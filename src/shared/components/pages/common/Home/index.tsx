import React, { FC } from 'react'
import { Box } from '@mui/material'
import BannerMainPage from '../../../common/BannerMainPage/BannerMainPage'
import TestsBlock from '../../../common/TestsBlock'
import VocabularyBlock from '../../../common/VocabularyBlock'
import TopicsBlock from '../../../common/TopicsBlock'

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