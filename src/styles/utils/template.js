import { createGlobalStyle } from 'styled-components';

import { responsive, color } from '@/styles/utils/constants';
import background from '@/assets/img/bg.png';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

  body {
    background-color: ${color.secondary};

    &:after {
      content: '';
      background-image: url(${background});
      filter: blur(1px) grayscale(100%);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: -1;
      opacity: .05;
    }

    * {
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }

    &, p, h1, h2, h3, h4, h5, h6, ul, li, button, input {
      margin: 0;
      padding: 0;
    }

    img {
      display: block;
      border: none;
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      width: 90%;

      @media (max-width: ${responsive.mobile.max}) {
        max-width: ${responsive.mobile.max};
      }

      @media (min-width: ${responsive.desktop.min}) {
        max-width: 900px;
      }

      @media (min-width: ${responsive.tablet.min}) and (max-width: ${responsive.tablet.max}) {
        max-width: 900px;
      }
    }

    .row, ul {
      display: flex;
    }

    ul {
      list-style-type: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      border: none;
      background-color: transparent;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
`;
