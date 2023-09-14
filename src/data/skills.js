import { SiRedux, SiTypescript, SiJavascript } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoReact } from 'react-icons/io5';
import { GoTools } from 'react-icons/go';

export const skills = [
  {
    title: 'HTML5',
    icon: AiFillHtml5,
    abilities: [
      'tags and attributes',
      'semantic structure',
      'validation and accessibility',
      'text and images',
      'forms and tables',
      'links and buttons'
    ]
  },
  {
    title: 'CSS3',
    icon: DiCss3,
    abilities: [
      'cross-browser compatibility',
      'responsive/adaptive layout',
      'box model and positioning',
      'layout techniques (flexbox, grid)',
      'pseudo-elements and pseudo-classes',
      'preprocessors (SASS, SCSS)',
      'transitions and animations',
      'BEM methodology'
    ]
  },
  {
    title: 'JavaScript',
    icon: SiJavascript,
    abilities: [
      'variables and types',
      'data structures',
      'operators and functions',
      'branches and loops',
      'DOM, events and web storage',
      'prototypes and classes',
      'event loop and asynchronous JS'
    ]
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    abilities: [
      'basic types',
      'unions and intersections',
      'types and interfaces',
      'tuples and enums',
      'narrowing and type guards',
      'literal types',
      'generics'
    ]
  },
  {
    title: 'React',
    icon: IoLogoReact,
    abilities: [
      'class/function components',
      'state and events',
      'lifecycle and hooks',
      'routing and code splitting',
      'authorization and HTTP requests',
      'hocs and custom hooks'
    ]
  },
  {
    title: 'Redux',
    icon: SiRedux,
    abilities: [
      'store and slices',
      'actions, reducers, selectors',
      'asynchronous operations',
      'devtools and debugging'
    ]
  },
  {
    title: 'GIT',
    icon: BsGit,
    abilities: [
      'terminal skills',
      'manage repositories',
      'branching and merging',
      'committing and pushing',
      'pull requests and conflicts resolving'
    ]
  },
  {
    title: 'Other Tools',
    icon: GoTools,
    abilities: [
      'next.js, vite',
      'emotion, styled components',
      'material ui',
      'axios, formik, react hook form, yup',
      'gsap',
      'firebase, swagger, postman',
      'prettier, eslint'
    ]
  }
];
