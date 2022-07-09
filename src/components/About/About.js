import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import { LanguageContext } from '../../contexts/LanguageContext';

function About() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { title, description1, description2, image } = aboutData[language];

  return (
    <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
      <div className="line-styling">
        <div className="style-circle" style={{ backgroundColor: theme.primary }} />
        <div className="style-circle" style={{ backgroundColor: theme.primary }} />
        <div className="style-line" style={{ backgroundColor: theme.primary }} />
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {description1}
            <br />
            <br />
            {description2}
          </p>
        </div>
        <div className="about-img">
          <img
            src={image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
    </div>

  );
}

export default About;
