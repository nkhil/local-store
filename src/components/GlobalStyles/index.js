import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  /* @import url('https://rsms.me/inter/inter.css'); */
  /* @import url('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css?family=Port+Lligat+Slab&display=swap'); */
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
  /* html {
    font-family: 'Poppins', sans-serif;
  } */

  html, body {
    height: 100%;
    font-size: 1em;
    margin: auto;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
  }

`;

export default GlobalStyle;
