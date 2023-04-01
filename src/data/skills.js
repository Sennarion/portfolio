import {
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiJavascript,
  SiFigma,
  SiMui
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { DiCss3, DiReact } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';

export const skills = [
  {
    title: 'HTML5',
    icon: AiFillHtml5,
    abilities: [
      'tags and attributes',
      'semantic structure',
      'accessibility and validation',
      'text and images',
      'forms and tables',
      'links and buttons'
    ]
  },
  {
    title: 'CSS3',
    icon: DiCss3,
    abilities: [
      'box model and positioning',
      'layout techniques (flexbox, grid)',
      'pseudo-elements and pseudo-classes',
      'preprocessors (SASS, SCSS)',
      'cross-browser compatibility',
      'responsive/adaptive layout',
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
    abilities: ['basic types', 'advanced types', 'generics']
  },
  {
    title: 'React',
    icon: DiReact,
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
      'toolkit, store and slices',
      'actions, reducers, selectors',
      'asynchronous operations (thunk)',
      'devTools and debugging'
    ]
  },
  {
    title: 'Styled Components',
    icon: SiStyledcomponents,
    abilities: [
      'global styles',
      'props and dynamic styles',
      'theming and keyframes',
      'nested selectors',
      'reusable components'
    ]
  },
  {
    title: 'Material UI',
    icon: SiMui,
    abilities: [
      'layout, data display and surfaces',
      'inputs and feedback',
      'navigation and utils',
      'components API and customization'
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
      'feature branches and pull requests'
    ]
  },
  {
    title: 'Figma',
    icon: SiFigma,
    abilities: [
      'components and graphic elements',
      'layer organization and styles',
      'formats and resolutions'
    ]
  }
];