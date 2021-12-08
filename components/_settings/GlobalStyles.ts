import { createGlobalStyle } from 'styled-components'

import theme from '@/components/_settings/theme'

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Nunito';
    src: url('fonts/Nunito-Medium.eot');
    src: url('fonts/Nunito-Medium.eot?#iefix') format('embedded-opentype'),
        url('fonts/Nunito-Medium.woff2') format('woff2'),
        url('fonts/Nunito-Medium.woff') format('woff'),
        url('fonts/Nunito-Medium.ttf') format('truetype'),
        url('fonts/Nunito-Medium.svg#Nunito-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito';
    src: url('fonts/Nunito-Regular.eot');
    src: url('fonts/Nunito-Regular.eot?#iefix') format('embedded-opentype'),
        url('fonts/Nunito-Regular.woff2') format('woff2'),
        url('fonts/Nunito-Regular.woff') format('woff'),
        url('fonts/Nunito-Regular.ttf') format('truetype'),
        url('fonts/Nunito-Regular.svg#Nunito-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito';
    src: url('fonts/Nunito-Black.eot');
    src: url('fonts/Nunito-Black.eot?#iefix') format('embedded-opentype'),
        url('fonts/Nunito-Black.woff2') format('woff2'),
        url('fonts/Nunito-Black.woff') format('woff'),
        url('fonts/Nunito-Black.ttf') format('truetype'),
        url('fonts/Nunito-Black.svg#Nunito-Black') format('svg');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito';
    src: url('fonts/Nunito-Bold.eot');
    src: url('fonts/Nunito-Bold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Nunito-Bold.woff2') format('woff2'),
        url('fonts/Nunito-Bold.woff') format('woff'),
        url('fonts/Nunito-Bold.ttf') format('truetype'),
        url('fonts/Nunito-Bold.svg#Nunito-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'BoldenVan';
    src: url('fonts/BoldenVan.eot');
    src: url('fonts/BoldenVan.eot?#iefix') format('embedded-opentype'),
        url('fonts/BoldenVan.woff2') format('woff2'),
        url('fonts/BoldenVan.woff') format('woff'),
        url('fonts/BoldenVan.ttf') format('truetype'),
        url('fonts/BoldenVan.svg#BoldenVan') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font: normal normal 400 16px/1.1 ${theme.font.family.secondary}, sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  p {
    line-height: 1.2;
  }

  body {
    color: #fff;
  }

  main {
    display: block;
  }

  a {
    background-color: transparent;
  }

  b,strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
 
  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: orange;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #2F5FDC;
    border-radius: 20px;
    border: 2px solid orange;
  }
`
