import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap');
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #0E0B16;
    color: white;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
  }

  a {
    text-decoration: none;
    color: black
  }

  a:visited {
    color: black;
  }

  input, button {
    background: transparent;
    outline: none;
    border: none;
    display: flex;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
  }
`
