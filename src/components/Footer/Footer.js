import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { LanguageContext } from '../../contexts/LanguageContext';

function Footer() {
  const { language } = useContext(LanguageContext);

  const { name } = headerData[language];

  const shortname = (longName) => {
    if (longName.length > 10) {
      return longName.split(' ')[0];
    }
    return longName;
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made with
        <span style={{ color: theme.primary, margin: '0 0.5rem -1rem 0.5rem' }}>
          ❤
        </span>
        by
        {' '}
        {shortname(name)}
      </p>
    </div>
  );
}

export default Footer;
