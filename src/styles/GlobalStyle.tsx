import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

html {
  font-family: "Poppins", sans-serif;
}

html,
body {
 
    margin: 0 auto;
    background-color:#b791c8;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 { 
  overflow-wrap: break-word;

  }

ul, li {
    list-style: none;
    padding: 0;
  }

`;

export default GlobalStyle;
