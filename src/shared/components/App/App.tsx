import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Home from '../pages/common/Home'
import PageNotFound from '../pages/common/PageNotFound'
import InternalServer from '../pages/common/InternalServer'
import { UserProvider, User } from '../../context/userContext'
import ForgotPassword from '../pages/common/ForgotPassword'
import SetNewPassword from '../pages/common/SetNewPassword'
import SignIn from '../pages/common/SignIn'
import SignUp from '../pages/common/SignUp'
import Profile from '../pages/user/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from '../../../utils/privateRoute'
import Denied from '../pages/common/Denied/Denied'

const App = () => {
    const [user, setUser] = useState<User>(null)
    return (
        <div className="App">
            <UserProvider user={user}>
                <ToastContainer />
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
                        <Route path='/denied' element={<Denied />} />
                        <Route path='/' element={<PrivateRoute roleRequired="USER" />}>
                            <Route path={'/profile'} element={<Profile />} />
                        </Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}



export default App

