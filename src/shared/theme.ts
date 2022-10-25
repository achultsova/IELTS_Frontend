import { createTheme } from '@mui/material/styles'
import { green, grey, red } from '@mui/material/colors'

const rawTheme = createTheme({
    breakpoints: {
        values: {
            xs: 577,
            sm: 769,
            md: 1025,
            lg: 1367,
            xl: 1921,
        },
    },
    palette: {
        primary: {
            light: '#F0F2F2',
            main: '#393E59',
            dark: '#010326',
        },
        secondary: {
            light: '#82D9D9',
            main: '#6FBFBF',
        },
        warning: {
            main: '#F2B705',
            dark: '#D98E04',
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: '"Work Sans", sans-serif',
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
    },
    spacing: [0, 2, 3, 5, 7, 11, 15, 16, 24, 30, 36, 40, 54, 69, 80, 81, 122, 155, 183, 241,
        275, 296, 335, 412],
})

// 0: 0
// 1: 2
// 2: 3
// 3: 5
// 4: 7
// 5: 11
// 6: 15
// 7: 16
// 8: 24
// 9: 30
// 10: 36
// 11: 40
// 12: 54
// 13: 69
// 14: 80
// 15: 81
// 16: 122
// 17: 155
// 18: 183
// 19: 241
// 20: 275
// 21: 296
// 22: 335
// 23: 412

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: '"Roboto Condensed", sans-serif',
    textTransform: 'uppercase',
}

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 81,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 54,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 46,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36,
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 24,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 14,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 24,
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 12,
        },
    },
}

export default theme