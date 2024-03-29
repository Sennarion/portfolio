import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';

export const projects = [
  {
    name: 'FlexyPlanner (commercial project)',
    stack: ['HTML', 'CSS', 'SASS', 'Vanilla JS', 'Axios', 'Parcel'],
    pageLink: 'https://flexyplanner.com/',
    codeLink: 'https://github.com/iargina/FlexyPlanner',
    img: project4,
    isPersonal: false,
    description:
      'A website for presenting and selling personal diaries. As a developer, I worked on several aspects, including integrating the Nova Poshta API for delivery, showcasing diary features, and adding animations and accordions.'
  },
  {
    name: 'PizzaTime',
    stack: ['React', 'React Router', 'Redux Toolkit', 'Firebase', 'Emotion', 'Material UI'],
    pageLink: 'https://sennarion.github.io/pizzatime/',
    codeLink: 'https://github.com/Sennarion/pizzatime',
    img: project1,
    isPersonal: true,
    description:
      'A pizza ordering app with multiple pages, including a home page, a products page, a page with a detailed pizza description, an authentication and registration page, a user profile, and a shopping cart. You can sort pizzas by price and rating, add them to the cart, and modify your order in the shopping cart page.'
  },
  {
    name: 'MyMoney',
    stack: [
      'React',
      'React Router',
      'Redux Toolkit',
      'Redux Thunk',
      'REST API',
      'Styled Components'
    ],
    pageLink: 'https://sennarion.github.io/MyMoney/',
    codeLink: 'https://github.com/Sennarion/MyMoney',
    img: project2,
    isPersonal: false,
    description:
      "It's a finance app that tracks income and expenses, making money management simple and fast. As a team lead and developer, I created a Redux store and developed async operations for transactions. I worked on modals, input validation, navigation, routes and redirects."
  },
  {
    name: 'ContactsHub',
    stack: [
      'React',
      'TypeScript',
      'React Router',
      'Redux Toolkit',
      'Redux Thunk',
      'REST API',
      'Material UI'
    ],
    pageLink: 'https://sennarion.github.io/contacthub/',
    codeLink: 'https://github.com/Sennarion/contacthub',
    img: project3,
    isPersonal: true,
    description:
      'It’s an app that helps users manage contacts more efficiently with a simple interface to create, edit, and delete contacts, and search by name. It includes user authentication and registration, and all contacts are stored in a backend database for easy access.'
  },

  {
    name: 'Filmoteka',
    stack: ['HTML', 'CSS', 'SASS', 'Vanilla JS', 'Axios', 'Parcel'],
    pageLink: 'https://alexarmor.github.io/filmoteka/index.html',
    codeLink: 'https://github.com/Sennarion/filmoteka',
    img: project5,
    isPersonal: false,
    description:
      'A website that makes it easy to find movies to watch. The website includes recommendations for trending movies, the ability to search for movies by keyword, and detailed information about each movie. Users can also add movies to their personal library. As a developer, I worked on requests to the server and rendering the content on the site.'
  },
  {
    name: 'Rick and Morty API',
    stack: ['HTML', 'CSS', 'Vanilla JS', 'Axios', 'Handlebars'],
    pageLink: 'https://sennarion.github.io/The-Rick-and-Morty-API/',
    codeLink: 'https://github.com/Sennarion/The-Rick-and-Morty-API',
    img: project7,
    isPersonal: true,
    description:
      'This web application enables users to search for characters from "Rick and Morty" through The Rick and Morty API. It displays character information such as their name, species, gender, status, and image, and offers options to filter characters by gender or status. Additionally, pagination is available to make browsing easier.'
  },
  {
    name: 'WebStudio',
    stack: ['HTML', 'CSS', 'SASS', 'Vanilla JS'],
    pageLink: 'https://sennarion.github.io/hw-markup-adaptive-layout/index.html',
    codeLink: 'https://github.com/Sennarion/hw-markup-adaptive-layout',
    img: project6,
    isPersonal: true,
    description:
      'This is a simple website that I created to learn HTML and CSS. The site is adaptive for three types of devices: phone, tablet, and desktop. All images are responsive. The crop technique is used for downloading various images for every screen. All icons are collected in an SVG sprite.'
  }
];
