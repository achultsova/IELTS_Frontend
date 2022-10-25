export enum AuthStorageEnum {
    accessToken = 'access_token',
    refreshToken = 'refresh_token',
}

type TokensType = {
    [AuthStorageEnum.accessToken]: string
    [AuthStorageEnum.refreshToken]: string
};


export const authStorage = {
    getAccess() {
        if (typeof window !== 'undefined') {
            return localStorage?.getItem(AuthStorageEnum.accessToken) || ''
        }
        return null
    },
    setAccess(token: string) {
        localStorage.setItem(AuthStorageEnum.accessToken, token)
    },
    removeAccess: () => {
        localStorage.removeItem(AuthStorageEnum.accessToken)
    },
    getRefresh() {
        if (typeof window !== 'undefined') {
            return localStorage?.getItem(AuthStorageEnum.refreshToken) || ''
        }
        return null
    },
    setRefresh(token: string) {
        localStorage.setItem(AuthStorageEnum.refreshToken, token)
    },
    removeRefresh: () => {
        localStorage.removeItem(AuthStorageEnum.refreshToken)
    },
    removeTokens: () => {
        authStorage.removeAccess()
        authStorage.removeRefresh()
    },
    setIsRegistrated: () => sessionStorage.setItem('isRegistrated', 'true'),
    getIsRegistrated: () => sessionStorage.getItem('isRegistrated'),
}