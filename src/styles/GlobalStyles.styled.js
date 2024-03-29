import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
html {
  box-sizing: border-box;
}

body {
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textColor};
  line-height: ${({ theme }) => theme.lineHeight.regular};
  background: ${({ theme }) => theme.colors.bgGradient};
  background-attachment: fixed;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
button {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

.ReactCollapse--collapse {
  transition: height 500ms;
}
`;
