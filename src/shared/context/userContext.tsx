import React, { useContext, useState, useEffect, FC, ReactNode, Dispatch } from 'react'

export type User = {
    id: number | null;
    name: string;
    surname: string;
    email: string;
    isAdmin: boolean;
    isActivated: boolean;
    isAuth: boolean;
};


const UserContext = React.createContext<[User, Dispatch<User>]>(null)

type UserProvider = {
    user: User | null;
    children: ReactNode | Array<ReactNode>
}
export const UserProvider: FC<UserProvider> = ({ children, user }) => {
    const [userData, setUserData] = useState<User>(null)
    useEffect(() => {
        if (user) {
            setUserData(user)
        }
    }, [user])
    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}
