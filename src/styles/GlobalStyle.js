import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* cursor: none; */
  }

  :root{
    --dark-bg: #262626;
    --deep-dark: #111111;
    --gray-1: #BCB4B4;
    --gray-2: #363636;
    --white : #ffffff;
    --black: #111;
    --solid-orange: #ffb400;
  }
  html{
    font-size: 10px;
    /* height: 100vh; */
    font-family: 'Roboto Mono';
    background-color: #111;
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button, a{
    outline: none
  }
  .logo {
    position: absolute;
    top: 25px;
    left: 20px;
    width: 45px;
    height: auto;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;


export default GlobalStyles;
