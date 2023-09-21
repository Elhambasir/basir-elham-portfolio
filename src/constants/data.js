import { images } from "./images";
import { icons } from "./icons";
// Path: src\constants\data.js

const services = [
  {
    icon: icons.frontend,
    title: 'Frontend Developer',
    description: 'I build beautiful and interactive user interfaces using HTML, CSS, and JavaScript. I also have experience with React, Angular, and Vue.js.',
  },
  {
    icon: icons.backend,
    title: 'Backend Developer',
    description: 'I build scalable and reliable backend systems using Java, Python, and Node.js. I also have experience with MySQL, PostgreSQL, and MongoDB.',
  },
  {
    icon: icons.fullstack,
    title: 'Fullstack Developer',
    description: 'I can build end-to-end solutions, from the frontend to the backend. I have experience with a variety of technologies, including React, Angular, Vue.js, Java, Python, Node.js, MySQL, PostgreSQL, and MongoDB.',
  },
  {
    icon: icons.rspec,
    title: 'Rspec Developer',
    description: 'I use Rspec to write automated tests for my code. I have experience with a variety of testing frameworks, including Rspec, Jest, and Mocha.',
  },
  {
    icon: icons.capybara,
    title: 'Capybara Developer',
    description: 'I use Capybara to automate user interactions with my web applications. I have experience with a variety of automation frameworks, including Capybara, Selenium, and Puppeteer.',
  },
  {
    icon: icons.database,
    title: 'Database Developer',
    description: 'I design, develop, and maintain databases. I have experience with a variety of databases, including MySQL, PostgreSQL, and MongoDB.',
  },
];

// works

const works = [
  {
    id: 1,
    image: images.mathMagecian,
    title: 'MATH MAGICIAN',
    description: 'Math magician is a simple app that allows users to culculate simple math problems. It is build with HTML, CSS, JavaScript, bootstrap and react.',
    liveLink: 'https://elhambasir-math-magician.onrender.com/',
    sourceLink: 'https://github.com/Elhambasir/math-magician',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 2,
    image: images.conferance,
    title: 'conferance',
    description: 'Star\'s Website is a website which allow users to showcase all information about their courses. It is created according to javascript capston project but the contents are from Star Education Society. For now just about and home page are completed but the complete version will be pushed next time.',
    liveLink: 'https://elhambasir.github.io/capstone-project1--conference-page/',
    sourceLink: 'https://github.com/Elhambasir/capstone-project1--conference-page',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    image: images.recipe,
    title: 'Recipe',
    description: 'Recipes App keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    liveLink: '#',
    sourceLink: 'https://github.com/Elhambasir/recepies-app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'Rspec', 'Capybara']
  },
  {
    id: 3,
    image: images.portfolio,
    title: 'Portfolio',
    description: 'Portfolio website is one of the most powerful tools in software developer toolbox; it’s the easiest way of showing what you’re truly capable of as a developer, and is a quick and simple way for recruiters and hiring managers to get an idea of what you can bring to their teams.',
    liveLink: 'https://elhambasir.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/Elhambasir/MyPortfolio',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];

const worksProcess = [
  {
    title: 'Research',
    description: 'The research process involves gathering information about the problem. This includes identifying the problem, understanding the problem, and defining the problem.'
  },
  {
    title: 'Design',
    description: 'The design process involves creating a solution to the problem. This includes brainstorming ideas, sketching out solutions, and creating prototypes etc...'
  },
  {
    title: 'Development',
    description: 'The development process involves implementing the solution. This includes coding the solution, testing the solution, and debugging the solution etc ...'
  },
  {
    title: 'Launch',
    description: 'The launch process involves making the solution available to users. This includes deploying the solution, marketing the solution, and supporting the solution.'
  },
  {
    title: 'Support',
    description: 'The support process involves providing help to users who are using the solution. This includes answering questions, fixing bugs, and providing training.'
  },
  {
    title: 'Maintenance',
    description: 'The maintenance process involves fixing bugs and improving the solution. This includes updating the solution, adding new features, and improving performance.'
  }
];

const aboutStats = [
  {
    title: 'Clients',
    number: '100',
    images: 'no images'

  },
  {
    title: 'Projects',
    number: '101',
    images: 'no images'
  },
  {
    title: 'Awards',
    number: '102',
    images: 'no images'
  },
  {
    title: 'Years Experience',
    number: '103',
    images: 'no images'
  }
];

const testimonials = [
  {
    name: 'John Doe',
    post: 'CEO',
    description: 'I am a Frontend Developer with 3 years of experience. I have a passion for web design and love to create for web and mobile devices.'
  },
  {
    name: 'John Ahmad',
    post: 'Graphic Designer',
    description: 'I am a Frontend Developer with 3 years of experience. I have a passion for web design and love to create for web and mobile devices.'
  },
  {
    name: 'John Smith',
    post: 'Web Developer',
    description: 'I am a Backend Developer with 3 years of experience. I have a passion for web design and love to create for web and mobile devices.'
  },
  {
    name: 'Jonatha Doe',
    post: 'Marketing Manager',
    description: 'I am a Fullstack Developer with 3 years of experience. I have a passion for web design and love to create for web and mobile devices.'
  },
];

const logos = [
  {
    image: images.elhamLogoBlue,
  }
];

export { services, works, worksProcess, aboutStats, testimonials, logos };