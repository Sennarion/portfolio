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
    abilities: ['tags and attributes', 'semantic structure', 'validation']
  },
  {
    title: 'CSS3',
    icon: DiCss3,
    abilities: [
      'box model',
      'layout techniques',
      'preprocessors',
      'cross-browser compatibility',
      'responsive/adaptive layout',
      'transitions/animations',
      'positioning',
      'BEM'
    ]
  },
  {
    title: 'JavaScript',
    icon: SiJavascript,
    abilities: [
      'variables and types',
      'operators',
      'branches and cycles',
      'data structures',
      'functions',
      'prototypes and classes',
      'DOM, events',
      'web storage',
      'asynchronous JS'
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
      'collections',
      'stylization',
      'events and state',
      'forms',
      'lifecycle',
      'hooks',
      'routing',
      'HTTP requests'
    ]
  },
  {
    title: 'Redux',
    icon: SiRedux,
    abilities: [
      'Redux DevTools',
      'Redux Toolkit',
      'Redux Thunk',
      'actions',
      'reducers',
      'selectors'
    ]
  },
  {
    title: 'Styled Components',
    icon: SiStyledcomponents,
    abilities: ['global styles', 'theming', 'props drilling', 'reusable components']
  },
  {
    title: 'Material UI',
    icon: SiMui,
    abilities: ['components', 'theming', 'icons']
  },
  {
    title: 'GIT',
    icon: BsGit,
    abilities: ['terminal skills', 'repositories', 'branches', 'pull requests']
  },
  {
    title: 'Figma',
    icon: SiFigma,
    abilities: ['components and styles', 'layout', 'typography']
  }
];
