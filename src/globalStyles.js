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

  html {
    font-family: "Roboto Slab"
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #333; 
    }
  }

  li {
    list-style-type: none;
  }
` 

export default GlobalStyles