import { createGlobalStyle } from 'styled-components';
import BasierCircle from '../Fonts/BasierCircle-Regular.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'BasierCircle';
    src: url(${BasierCircle}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'BasierCircle', sans-serif;
    padding: 24px;
  }
`;

export default GlobalStyles;