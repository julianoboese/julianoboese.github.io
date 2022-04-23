import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { Switch } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { themeData } from '../../data/themeData';

const MaterialUISwitch = styled(Switch)(({ checked }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: checked ? '#8796A5' : '#aab4be',
      },
    },
    '&:hover .MuiSwitch-thumb': {
      backgroundColor: checked && window.screen.width > 600
        ? themeData.lightTheme.primary400 : '#636363',
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: checked && window.screen.width > 600
      ? themeData.lightTheme.primary : themeData.darkTheme.secondary,
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: -0.2,
      top: 0.2,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: checked ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function Navbar() {
  const { theme, toggleTheme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: '2.5rem',
      color: theme.tertiary,
      cursor: 'pointer',
      transform: 'translateY(-10px)',
      transition: 'color 0.3s',
      '&:hover': {
        color: theme.primary,
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
      [t.breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
    MuiDrawer: {
      padding: '0em 1.8em',
      width: '14em',
      fontFamily: ' var(--primary-font)',
      fontStyle: ' normal',
      fontWeight: ' normal',
      fontSize: ' 24px',
      background: theme.secondary,
      overflow: 'hidden',
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      [t.breakpoints.down('sm')]: {
        width: '12em',
      },
    },
    closebtnIcon: {
      fontSize: '2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: theme.primary,
      position: 'absolute',
      right: 40,
      top: 40,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.tertiary,
      },
      [t.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: '2rem auto',
      borderRadius: '78.8418px',
      background: theme.secondary,
      color: theme.primary,
      width: '85%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '0 30px',
      boxSizing: 'border-box',
      border: '2px solid',
      borderColor: theme.primary,
      transition: 'background-color 0.2s, color 0.2s',
      '&:hover': {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0 25px',
        height: '55px',
      },
    },
    drawerLinks: {
      fontFamily: 'var(--primary-font)',
      width: '50%',
      fontSize: '1.3rem',
      fontWeight: 600,
      [t.breakpoints.down('sm')]: {
        fontSize: '1.125rem',
      },
    },
    drawerIcon: {
      fontSize: '1.6rem',
      [t.breakpoints.down('sm')]: {
        fontSize: '1.385rem',
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ').reduce((acc, curr) => acc + curr.slice(0, 1), '');
    }
    return name;
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>
          {shortname(headerData.name)}
        </h1>
        <div className="switch-container">
          <MaterialUISwitch
            sx={{ mx: 4, my: 1 }}
            checked={theme.type === 'dark'}
            onChange={toggleTheme}
          />
        </div>
        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleDrawerClose();
          } else if (reason !== 'escapeKeyDown') {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose} role="presentation">
          <div className="navLink--container">
            <Fade left>
              <NavLink
                to="/"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <IoHomeSharp
                    className={classes.drawerIcon}
                  />
                  <span className={classes.drawerLinks}>
                    Home
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#about"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>
                    About
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#resume"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <HiDocumentText
                    className={classes.drawerIcon}
                  />
                  <span className={classes.drawerLinks}>
                    Resume
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#skills"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <BsFillGearFill
                    className={classes.drawerIcon}
                  />
                  <span className={classes.drawerLinks}>
                    Skills
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#projects"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <FaFolderOpen
                    className={classes.drawerIcon}
                  />
                  <span className={classes.drawerLinks}>
                    Projects
                  </span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink
                to="/#contacts"
                smooth
                spy="true"
                duration={2000}
              >
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>
                    Contact
                  </span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
