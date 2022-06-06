/** @jsxImportSource @emotion/react */
import { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';
import { LanguageContext } from '../../contexts/LanguageContext';

function ProjectPage() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { name } = headerData[language];

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>
          {name}
          {' '}
          | Projects
        </title>
      </Helmet>
      <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <HomeIcon
            sx={{
              color: theme.secondary,
              position: 'absolute',
              top: 25,
              left: 25,
              padding: '7px',
              borderRadius: '50%',
              boxSizing: 'content-box',
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
              },
              cursor: 'pointer',
              boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
              transition: 'all 0.3s ease-in-out',
              '&:hover':
            {
              color: theme.tertiary,
              transform: 'scale(1.1)',
            },
            }}
          />
        </Link>
        <h1 style={{ color: theme.secondary }}>Projects</h1>
      </div>
      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            css={css`
              color: ${theme.tertiary};
              width: 350px;
              @media (min-width: 420px) {
                width: 40%;
              };
              height: 2.75rem;
              outline: none;
              border: none;
              border-radius: 20px;
              padding: 0.95rem 1rem;
              font-family: 'Noto Sans TC', sans-serif;
              font-weight: 500;
              font-size: 0.9rem;
              background-color: ${theme.secondary};
              box-shadow: ${theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030'};
              ::placeholder {
                color: ${theme.tertiary80};
              }
            `}
          />
        </div>
        <div className="project-container">
          <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
            {filteredArticles.map((project) => (
              <SingleProject
                theme={theme}
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
