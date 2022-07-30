import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import noteContext from "../context/notes/NoteContext"
import { useContext } from 'react';
const Nav = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const context = useContext(noteContext);
  const { getUser, user } = context;
  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, [])
  const handleClick = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
  }, [location])
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('auth-token');
    Navigate('/login');
  }
  const moveToProfile = (e) => {
    e.preventDefault();
    if (localStorage.getItem('auth-token')) {
      Navigate('/profile');
    }
    else {
      Navigate('/login');
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '65px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'><h2 style={{ fontWeight: "normal" }} >Cloud Notes</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${`location.pathname` === '/' ? 'active' : ""} mx-4`} aria-current="page" to="/"><h5 style={{ fontWeight: "normal" }} >Home</h5></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${`location.pathname` === '/about' ? 'active' : ""} mx-4`} to="/about"><h5 style={{ fontWeight: "normal" }} >About</h5></Link>
              </li>

              {localStorage.getItem('auth-token') && <li style={{ float: 'right' }} className="nav-item">
                <Link style={{ paddingLeft: '750px' }} className={`nav-link ${`location.pathname` === '/profile' ? 'active' : ""} mx-4`} to="">

                  <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                      {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>{user.firstName}</Avatar>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      <MenuItem onClick={moveToProfile}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <ListItemIcon >
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;