import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';
import { LanguageContext } from '../../contexts/LanguageContext';

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const projects = projectsData[language];

  return (
    <>
      {projects.length > 0 && (
        <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projects.slice(0, 3).map((project) => (
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
            </div>

            {projects.length > 3 && (
            <div className="projects--viewAll">
              <Link to="/projects">
                <Button
                  sx={{ color: theme.tertiary,
                    backgroundColor: theme.primary,
                    '&:hover': {
                      color: theme.secondary,
                      backgroundColor: theme.primary,
                    } }}
                >
                  View All
                  <ArrowForwardIcon
                    sx={{ color: theme.tertiary,
                      backgroundColor: theme.secondary70,
                      width: '40px',
                      height: '40px',
                      padding: '0.5rem',
                      fontSize: '1.05rem',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      '&:hover': {
                        color: theme.tertiary,
                        backgroundColor: theme.secondary,
                      } }}
                  />
                </Button>
              </Link>
            </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}

export default Projects;
