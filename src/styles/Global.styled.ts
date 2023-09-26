import {createGlobalStyle} from "styled-components";

import VezitsaCyrillicEot from '../assets/fonts/VezitsaCyrillic.eot'
import VezitsaCyrillicWoff from '../assets/fonts/VezitsaCyrillic.woff2'
import VezitsaCyrillicTtf from '../assets/fonts/vezitsacyrillic.ttf'

import MagnoliaScriptEot from '../assets/fonts/Magnolia-Script.eot'
import MagnoliaScriptWoff from '../assets/fonts/Magnolia-Script.ttf'
import MagnoliaScriptTtf from '../assets/fonts/Magnolia-Script.woff2'

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: Vazitsa;
    src: url(${VezitsaCyrillicEot}) format('eot'),
    url(${VezitsaCyrillicWoff}) format('woff2'),
    url(${VezitsaCyrillicTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Magnolia;
    src: url(${MagnoliaScriptEot}) format('eot'),
    url(${MagnoliaScriptWoff}) format('ttf'),
    url(${MagnoliaScriptTtf}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    margin: 0;
    font-family: Magnolia, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  
  section{
    background-color: #1f1f1f;
    
  }
  button{
    background-color: unset;
    border: none;
    cursor: pointer;
  }
  
`