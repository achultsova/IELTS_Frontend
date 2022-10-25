import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Home from '../Home'
import PageNotFound from '../PageNotFound'
import InternalServer from '../InternalServer'
import { UserProvider, User } from '../../context/userContext'

const App = () => {
    const [user, setUser] = useState<User>(null)
    return (
        <div className="App">
            <UserProvider user={user}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path='/500' element={<InternalServer />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}



export default App

