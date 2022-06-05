import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';

import './Navbar.css';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel,
  MenuItem, OutlinedInput, Select, ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import { headerData } from '../../data/headerData';
import { themeData } from '../../data/themeData';
import { ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggler from './ThemeToggler';
import { LanguageContext } from '../../contexts/LanguageContext';

function Navbar() {
  const {
    themeColor, selectThemeColor, theme, selectThemeType,
    setHandleDrawer,
  } = useContext(ThemeContext);

  const { language, toggleLanguage } = useContext(LanguageContext);

  const { name } = headerData[language];

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleClickOpen = () => {
    setOptionsOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOptionsOpen(false);
    }
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
      borderTopLeftRadius: '40px',
      borderBottomLeftRadius: '40px',
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

  const shortname = (longName) => {
    if (longName.length > 12) {
      return longName.split(' ').reduce((acc, curr) => acc + curr.slice(0, 1), '');
    }
    return longName;
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>
          {shortname(name)}
        </h1>
        <div style={{ alignSelf: 'flex-start' }}>
          <Button
            size="small"
            variant="contained"
            startIcon={<SettingsIcon />}
            onClick={handleClickOpen}
            sx={{ backgroundColor: theme.primary400, '&:hover': { backgroundColor: theme.primary80 } }}
          >
            Options
          </Button>
          <Dialog disableEscapeKeyDown open={optionsOpen} onClose={handleClose}>
            <DialogTitle>Options</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <ThemeToggler
                  sx={{ mx: 4, my: 1 }}
                  checked={theme.type === 'dark'}
                  onChange={selectThemeType}
                />
                <ToggleButtonGroup
                  value={language}
                  exclusive
                  onChange={toggleLanguage}
                >
                  <ToggleButton value="en" sx={{ padding: '3px', height: '100%' }}>
                    <img src="https://img.icons8.com/color/48/undefined/usa.png" alt="usa-flag" />
                  </ToggleButton>
                  <ToggleButton value="pt" sx={{ padding: '3px', height: '100%' }}>
                    <img src="https://img.icons8.com/color/48/undefined/brazil.png" alt="brazil-flag" />
                  </ToggleButton>
                </ToggleButtonGroup>
                <FormControl sx={{ m: 3, minWidth: 120 }}>
                  <InputLabel id="theme-color-select">Theme Color</InputLabel>
                  <Select
                    labelId="theme-color-select"
                    value={themeColor}
                    onChange={selectThemeColor}
                    input={<OutlinedInput label="Theme Color" />}
                    sx={{ height: '40px', m: 1, minWidth: 150 }}
                  >
                    {Object.keys(themeData).map((color) => (
                      <MenuItem value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
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
        anchor="right"
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
            <Fade right>
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

            <Fade right>
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

            <Fade right>
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

            <Fade right>
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

            <Fade right>
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

            <Fade right>
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
