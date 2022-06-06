/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

const Input = styled.input`
  border: 4px solid ${(props) => props.theme.primary80};
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.tertiary};
  font-family: var(--primary-font);
  font-weight: 500;
  transition: border 0.2s ease-in-out;
  
  :focus {
    border: 4px solid ${(props) => props.theme.primary600};
  }
`;

const Social = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  transition: 250ms ease-in-out;
  flex-shrink: 0;

  :hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.tertiary};
  }
`;

function Contacts() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const { theme } = useContext(ThemeContext);

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name,
          email,
          message,
        };

        axios.post(contactsData.sheetAPI, responseData).then(() => {
          setSuccess(true);
          setErrMsg('');

          setName('');
          setEmail('');
          setMessage('');
          setOpen(false);
        });
      } else {
        setErrMsg('Invalid email');
        setOpen(true);
      }
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
    }
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={handleContactForm}>
              <div className="input-container">
                <label
                  htmlFor="form-input-name"
                  style={{
                    backgroundColor: `${theme.secondary}`,
                    color: `${theme.primary}`,
                    fontFamily: 'var(--primary-font)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '0 5px',
                    transform: 'translate(25px,50%)',
                    display: 'inline-flex',
                  }}
                >
                  Name
                </label>
                <Input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  id="form-input-name"
                  theme={theme}
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="form-input-email"
                  style={{
                    backgroundColor: `${theme.secondary}`,
                    color: `${theme.primary}`,
                    fontFamily: 'var(--primary-font)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '0 5px',
                    transform: 'translate(25px,50%)',
                    display: 'inline-flex',
                  }}
                >
                  Email
                </label>
                <Input
                  placeholder="john.doe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  id="form-input-email"
                  theme={theme}
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label
                  htmlFor="form-input-message"
                  style={{
                    backgroundColor: `${theme.secondary}`,
                    color: `${theme.primary}`,
                    fontFamily: 'var(--primary-font)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    padding: '0 5px',
                    transform: 'translate(25px,50%)',
                    display: 'inline-flex',
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  id="form-input-message"
                  className="form-message"
                  css={css`
                    border: 4px solid ${theme.primary80};
                    background-color: ${theme.secondary};
                    color: ${theme.tertiary};
                    font-family: var(--primary-font);
                    font-weight: 500;
                    transition: border 0.2s ease-in-out;
                    
                    :focus {
                      border: 4px solid ${theme.primary600};
                    }
                  `}
                />
              </div>

              <div className="submit-btn">
                <button
                  type="submit"
                  css={css`
                    background-color: ${theme.primary};
                    color: ${theme.secondary};
                    transition: 250ms ease-in-out;
      
                    :hover {
                      transform: scale(1.08);
                      color: ${theme.secondary};
                      background-color: ${theme.tertiary};
                    }
                  `}
                >
                  <p>{!success ? 'Send' : 'Sent'}</p>
                  <div className="submit-icon">
                    <SendOutlinedIcon
                      className="send-icon"
                      sx={{
                        animation: !success ? 'initial' : 'fly 0.8s linear both',
                        position: !success ? 'initial' : 'absolute',
                      }}
                    />
                    <CheckCircleOutlinedIcon
                      className="success-icon"
                      sx={{
                        display: !success
                          ? 'none'
                          : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={(
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                                  )}
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: 'var(--primary-font)',
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <Social theme={theme}>
                <AlternateEmailOutlinedIcon />
              </Social>
              <p style={{ color: theme.tertiary, width: '100%' }}>
                {contactsData.email}
              </p>
            </a>
            <a
              href={`tel:${contactsData.phone}`}
              className="personal-details"
            >
              <Social theme={theme}>
                <PhoneOutlinedIcon />
              </Social>
              <p style={{ color: theme.tertiary, width: '100%' }}>
                {contactsData.phone}
              </p>
            </a>
            <div className="personal-details">
              <Social theme={theme}>
                <LocationOnOutlinedIcon />
              </Social>
              <p style={{ color: theme.tertiary, width: '100%' }}>
                {contactsData.address}
              </p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Social theme={theme}>
                    <GitHubIcon aria-label="GitHub" />
                  </Social>
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Social theme={theme}>
                    <LinkedInIcon aria-label="LinkedIn" />
                  </Social>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        src={theme.contactsimg}
        alt="contacts"
        className="contacts--img"
      />
    </div>
  );
}

export default Contacts;
