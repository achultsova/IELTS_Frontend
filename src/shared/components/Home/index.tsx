import React, { FC } from 'react'
import { Box } from '@mui/material'
import BannerMainPage from '../BannerMainPage/BannerMainPage'
import TestsBlock from '../TestsBlock'

const Home: FC = () => {
  return (
    <Box>
      <BannerMainPage/>
      <TestsBlock />
    </Box>
  )
}

export default Home