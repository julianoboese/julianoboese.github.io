import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LanguageContextProvider from './contexts/LanguageContext';

ReactDOM.render(
  <LanguageContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LanguageContextProvider>,
  document.getElementById('root'),
);

reportWebVitals();
