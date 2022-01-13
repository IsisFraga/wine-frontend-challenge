import styled from "styled-components";

export const FooterTag = styled.footer`
  ${({theme}) => theme.breakpoints.desktopOnly}{
    display: none;
  }
  ${({theme}) =>theme.variables.texts.navText
    + theme.colors.background.white
    + theme.variables.layout.w100
    + theme.variables.layout.flexRow
    + theme.variables.layout.justifyBetween 
    + theme.variables.layout.itemsCenter
  }
  height: 60px;
  border: 1px solid #EAEAEA;
  position: fixed;
  bottom: 0;

  .left, .right {
    ${({theme}) => theme.variables.layout.flexRow 
      + theme.colors.text.distakColored
      + theme.variables.layout.justifyCenter
      + theme.variables.layout.itemsCenter
    }
    text-transform: uppercase;
    width: 50%;
    z-index: 2;
    font-size: 14px;
    height: 60%;
    margin: 0;
    
    svg {
      width: 20px;
      fill: #B6116E;
      margin: 0 5px;
    }
  }

  .left {
    border-right: 2px solid #DEDEDE;
  }
`