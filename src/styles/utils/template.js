import { createGlobalStyle } from 'styled-components';

import { responsive } from '@/styles/utils/constants';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

  body {
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
      max-width: ${responsive.mobile.max};
      width: 90%;
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
