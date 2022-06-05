import React from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import Fade from 'react-reveal/Fade';
import { Link } from '@mui/material';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2
            id={name.replace(' ', '-').toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <img src={image || placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <Link
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${name
                .replace(' ', '-')
                .toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-demo`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 50,
                border: `2px solid ${theme.tertiary}`,
                color: theme.tertiary,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: theme.secondary,
                  color: theme.primary,
                  transform: 'scale(1.1)',
                  border: `2px solid ${theme.secondary}`,
                },
              }}
            >
              <PlayArrowRoundedIcon
                id={`${name
                  .replace(' ', '-')
                  .toLowerCase()}-demo`}
                aria-label="Demo"
                sx={{ fontSize: '2rem',
                  transition: 'all 0.2s',
                  '&:hover': {} }}
              />
            </Link>
            <Link
              href={code}
              target="_blank"
              rel="noreferrer"
              aria-labelledby={`${name
                .replace(' ', '-')
                .toLowerCase()} ${name
                .replace(' ', '-')
                .toLowerCase()}-code`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: 50,
                border: `2px solid ${theme.tertiary}`,
                color: theme.tertiary,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: theme.secondary,
                  color: theme.primary,
                  transform: 'scale(1.1)',
                  border: `2px solid ${theme.secondary}`,
                },
              }}
            >
              <CodeRoundedIcon
                id={`${name
                  .replace(' ', '-')
                  .toLowerCase()}-code`}
                aria-label="Code"
                sx={{ fontSize: '1.5rem',
                  transition: 'all 0.2s',
                  '&:hover': {} }}
              />
            </Link>
          </div>
        </div>
        <p
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Fade>
  );
}

export default SingleProject;
