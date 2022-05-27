import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html, body{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    overflow-x: hidden;
    user-select: none;
  }

  #root {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }

  #root > div {
    min-width: 920px;
  }

  #root > div.mobile {
    min-width: 0;
  }

  p {
    padding-top: 48px;
    
    .mobile & {
      padding: 0;
    }
  }
`