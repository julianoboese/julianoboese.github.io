import one from '../assets/png/projects/recipes-app.png';
import two from '../assets/png/projects/trivia.png';
import three from '../assets/png/projects/blogs-api.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'Recipes App',
    projectDesc: 'App for mobile devices where you can search for meals and drinks recipes, save your favorites and several functionalities.',
    tags: ['React', 'Context API', 'Styled Components'],
    code: 'https://github.com/julianoboese/recipes-app',
    demo: 'https://recipes-app-julianoboese.vercel.app/',
    image: one,
  },
  {
    id: 2,
    projectName: 'Trivia',
    projectDesc: 'Trivia game where you can customize several settings and choose from a range of topics to play with.',
    tags: ['React', 'Redux', 'Material UI'],
    code: 'https://github.com/julianoboese/trivia-react-redux',
    demo: 'https://trivia-react-redux-julianoboese.vercel.app/',
    image: two,
  },
  {
    id: 3,
      projectName: 'BlogsAPI',
      projectDesc: 'RESTful API for an app that creates content for a Blog.',
      tags: ['Node.js', 'Sequelize', 'PostgreSQL'],
      code: 'https://github.com/julianoboese/blogs-api',
      demo: 'https://blogs-api-julianoboese.herokuapp.com/',
    image: three,
  },
];

export default projectsData;

// Do not remove any fields.
// Leave it blank instead as shown below

/*
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
},
*/
