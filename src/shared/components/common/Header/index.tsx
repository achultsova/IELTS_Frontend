import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useUserContext } from '../../../context/userContext'
import MenuList from '@mui/material/MenuList'
import { instance } from '../../../api/instance'
import { authStorage } from '../../../../utils/authStorage'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const pages = ['Tests', 'Vocabulary', 'Topics']


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
    const [userData, setUserData] = useUserContext()
    const [openDropdown, setOpenDropdown] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)
    const navigate = useNavigate()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const goLogin = () => {
        navigate('/signin')
    }

    const handleLogout = async () => {
        try {
            await instance.post('/logout',)
            authStorage.removeAccess()
            setUserData(null)
            localStorage.clear()
            navigate('/')
        } catch (error) {
            let message: string
            if (error instanceof Error) message = error.message
            else {
                message = String(error)
            }
        }
    }

    const handleToggle = () => {
        setOpenDropdown((prevOpen) => !prevOpen)
    }

    const handleCloseDropdown = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }
        setOpenDropdown(false)
    }


    return (
        <AppBar position="static" style={{ background: '#393E59' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IELTS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AutoStoriesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IELTS
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {localStorage.getItem('isAuth') ? (
                        <Box>
                            <Button
                                ref={anchorRef}
                                aria-controls={openDropdown ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                sx={{ color: 'inherit' }}
                            >
                                {JSON.parse(localStorage.getItem('username'))}
                            </Button>
                            <Popper
                                open={openDropdown}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom' ? 'center top' : 'center bottom'
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleCloseDropdown}>
                                                <MenuList autoFocusItem={openDropdown} id="menu-list-grow">
                                                    {localStorage.getItem('isAdmin') ? (
                                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                                    ) : (
                                                        <Box>
                                                            <MenuItem>
                                                                <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>Profile</Link>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleLogout}>
                                                                Logout
                                                            </MenuItem>
                                                        </Box>
                                                    )}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Box>
                    ) : (
                        <Button color="inherit" onClick={goLogin}>Sign in</Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
