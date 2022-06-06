import React, { useState, useContext } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const { theme } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      style={{ display: visible ? 'inline' : 'none' }}
      className="backToTop"
    >
      <button onClick={scrollToTop} aria-label="Back to top" type="button">
        <KeyboardArrowUpRoundedIcon sx={{ fontSize: '3rem', color: theme.secondary, backgroundColor: theme.tertiary, borderRadius: '100%' }} />
      </button>
    </div>
  );
}

export default BackToTop;
