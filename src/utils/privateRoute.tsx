import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = localStorage.getItem('isAuth')
    if (user) {
        const role = JSON.parse(localStorage.getItem('isAdmin'))
        if (role) {
            return {
                auth: true,
                role: 'ADMIN',
            }
        } else {
            return {
                auth: true,
                role: 'USER',
            }
        }
    } else {
        return {
            auth: false,
            role: null,
        }
    }
}

//protected Route state
type ProtectedRouteType = {
    roleRequired?: 'ADMIN' | 'USER'
}

const PrivateRoute = (props: ProtectedRouteType) => {
    const { auth, role } = useAuth()

    //if the role required is there or not
    if (props.roleRequired) {
        return auth ? (
            props.roleRequired === role ? (
                <Outlet />
            ) : (
                <Navigate to="/denied" />
            )
        ) : (
            <Navigate to="/login" />
        )
    } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
    }
}

export default PrivateRoute