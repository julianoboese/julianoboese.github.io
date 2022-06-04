import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import {
  Navbar, Footer, Landing, About, Skills, Education,
  Experience, Contacts, Projects,
} from '../../components';
import { LanguageContext } from '../../contexts/LanguageContext';
import { headerData } from '../../data/headerData';

function Main() {
  const { language } = useContext(LanguageContext);
  const { name } = headerData[language];

  return (
    <div>
      <Helmet>
        <title>
          {name}
          {' '}
          - Portfolio
        </title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
