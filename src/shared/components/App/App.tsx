import React from 'react'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Home from '../Home'
import PageNotFound from '../PageNotFound'
import InternalServer from '../InternalServer'
import { UserProvider } from '../../context/userContext'


const App = () => {
  return (
    <div className="App">
      <UserProvider user={}>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path='/500' element={<InternalServer/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserProvider>
    </div>
  )
}



export default App

