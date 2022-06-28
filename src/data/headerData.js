import resume from '../assets/pdf/resume.pdf';
import profileImage from '../assets/png/profile-image.png';

export const headerData = {
  pt: {
    name: 'Juliano Boese',
    title: 'Desenvolvedor Web',
    description: 'Sou um desenvolvedor front-end que adora criar sites e aplicações web acessíveis, escrever testes e ajudar pessoas a aprenderem a programar. Recentemente, tenho construído aplicações web com React e provedores serverless, como Vercel e Netlify.',
    image: profileImage,
    resumePdf: resume,
  },
  en: {
    name: 'Juliano Boese',
    title: 'Web Developer',
    description: 'I’m a front-end developer who loves building user-friendly websites and web apps, enjoys writing tests and loves helping people learn how to code. Most recently, I’ve been building web apps with React and serverless providers like Vercel and Netlify.',
    image: profileImage,
    resumePdf: resume,
  },
};

export default headerData;
