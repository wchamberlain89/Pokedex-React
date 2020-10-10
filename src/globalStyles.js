import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,100;1,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    line-height: 100%;
    box-sizing: border-box;
  }

  button {
    font-size: 100%;
    font-family: inherit;
    border: 0;
    padding: 0;
  }

  html {
    font-family: "Poppins";
  }

  body {
    background-color: '#DEDEDE';
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #333; 
    }
  }

  tr {
    margin-top: 1em;
  }

  th, td {
    padding-top: 10px;
  }

  th {
    text-align: right;
  }

  td {
    padding-left: 2em;

  }

  li {
    list-style-type: none;
  }
` 

export default GlobalStyles