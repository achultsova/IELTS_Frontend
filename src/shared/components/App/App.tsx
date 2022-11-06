import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Home from '../Home'
import PageNotFound from '../PageNotFound'
import InternalServer from '../InternalServer'
import { UserProvider, User } from '../../context/userContext'
import ForgotPassword from '../ForgotPassword'
import SetNewPassword from '../SetNewPassword'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Profile from '../Profile'

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
                        <Route path='forgotPassword' element={<ForgotPassword />} />
                        <Route path='setNewPassword/:id' element={<SetNewPassword />} />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path={'/profile'} element={<Profile />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}



export default App

