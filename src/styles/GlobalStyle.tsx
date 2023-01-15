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
    height: 100%;
    margin: 0;
    background-color:#b791c8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 { 
  overflow-wrap: break-word;
  margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
  }

`;

export default GlobalStyle;
