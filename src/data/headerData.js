import resume from '../assets/pdf/resume.pdf';
import profileImage from '../assets/png/profile-image.png';

export const headerData = {
  pt: {
    name: 'Juliano Boese',
    title: 'Desenvolvedor Web',
    description: 'Sou um desenvolvedor Full-Stack que adora criar aplicações web acessíveis, escrever testes e ajudar pessoas a aprenderem a programar. Recentemente, tenho construído aplicações web com React, Node.js e provedores serverless, como Vercel e Heroku.',
    image: profileImage,
    resumePdf: resume,
  },
  en: {
    name: 'Juliano Boese',
    title: 'Web Developer',
    description: "I'm a Full-Stack developer who loves building user-friendly web apps, enjoys writing tests and loves helping people learn how to code. Most recently, I've been building web apps with React and Node.js and serverless providers like Vercel and Heroku.",
    image: profileImage,
    resumePdf: resume,
  },
};

export default headerData;
