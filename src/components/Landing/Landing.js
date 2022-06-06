import React, { useContext } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from '@mui/material';

import './Landing.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { LanguageContext } from '../../contexts/LanguageContext';

function Landing() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { name, title, description, image, resumePdf } = headerData[language];

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
            <a
              href={socialsData.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                className="landing--social"
                sx={{ color: theme.secondary, fontSize: '35px' }}
                aria-label="LinkedIn"
              />
            </a>
            )}
            {socialsData.github && (
            <a
              href={socialsData.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                className="landing--social"
                sx={{ color: theme.secondary, fontSize: '35px' }}
                aria-label="GitHub"
              />
            </a>
            )}
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="landing--img"
          style={{
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div
            className="lcr--content"
            style={{ color: theme.tertiary }}
          >
            <h6>{title}</h6>
            <h1>{name}</h1>
            <p>{description}</p>

            <div className="lcr-buttonContainer">
              {resumePdf && (
                <a
                  href={resumePdf}
                  download="Resume - Juliano Boese"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    sx={{ color: theme.primary,
                      borderRadius: '30px',
                      textTransform: 'inherit',
                      textDecoration: 'none',
                      width: {
                        sm: '180px',
                        md: '150px',
                      },
                      fontSize: '1rem',
                      fontWeight: '500',
                      height: '50px',
                      fontFamily: 'var(--primary-font)',
                      border: `3px solid ${theme.primary}`,
                      transition: '100ms ease-out',
                      '&:hover': {
                        backgroundColor: theme.tertiary,
                        color: theme.secondary,
                        border: `3px solid ${theme.tertiary}`,
                      } }}
                  >
                    Download CV
                  </Button>
                </a>
              )}
              <NavLink
                to="/#contacts"
                smooth
                spy="true"
                duration={2000}
              >
                <Button
                  sx={{ backgroundColor: theme.primary,
                    color: theme.secondary,
                    borderRadius: '30px',
                    textTransform: 'inherit',
                    textDecoration: 'none',
                    width: {
                      sm: '180px',
                      md: '150px',
                    },
                    height: '50px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    fontFamily: 'var(--primary-font)',
                    border: `3px solid ${theme.primary}`,
                    transition: '100ms ease-out',
                    '&:hover': {
                      backgroundColor: theme.secondary,
                      color: theme.tertiary,
                      border: `3px solid ${theme.tertiary}`,
                    } }}
                >
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
