import styled from "styled-components";

export const SidebarTag = styled.div`
  width: 320px;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow-y: auto;
  transition: all 0.5s ease 0s;
  z-index: 3;
  ${({theme}) => theme.breakpoints.desktopOnly} {
    display: none;
  }

  ${({theme}) => theme.variables.texts.sideBar
    + theme.colors.background.default
    + theme.colors.text.support
    + theme.variables.layout.flexCol
    + theme.variables.shadow.small
  }
  .account-login {
    padding: 30px 19px;
    height: 131px;
    ${({theme}) => theme.variables.shadow.small
      + theme.colors.background.secondary
      + theme.variables.layout.flexRow
      + theme.variables.layout.justifyBetween 
      + theme.variables.layout.itemsCenter
      + theme.variables.layout.w100
    }
    .user-image {
      svg {
        width: 130%;
        height: 130%;
        position: relative;
        top: 5px;
      }
    }
    .access {
      p {
        padding-bottom: 0.5em;
      }
      a {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        ${({theme}) => theme.colors.text.distakColored}
      }
      a::after {
        content: "→";
        position: relative;
        left: 5px;
      }
    }
    
    .close {
      svg {
        position: relative;
        top: -3em;
      }
    }
  }
`

export const Accordeon = styled.div`
  text-transform: uppercase;
  ${({theme}) => theme.colors.text.distakColored
    + theme.variables.layout.flexRow
    + theme.variables.layout.itemsCenter
    + theme.variables.layout.w100
    + theme.colors.background.default
  } 
  ul {
    ${({theme}) => theme.variables.layout.w100}
    li {
      ${({theme}) => theme.variables.layout.w100}
      font-weight: 700;
      font-size: 13px;
      border-bottom: 1px solid #e4e4e4;
      
      .options, a {
        padding: 20px 19px;
        height: 54px; 
        ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.itemsCenter
        + theme.variables.layout.justifyBetween 
        + theme.variables.layout.w100
      }
      a {
        padding: 0;
      }
    }
  } 
  
  li:nth-child(n+3) {
    a {
      svg {
        transform: rotate(-90deg);
      }
    }
  }
`

export const InfoTypes = styled.div`
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  ${({theme}) => theme.variables.layout.flexRow
    + theme.variables.layout.w100
    + theme.variables.transition
  }
  figure {
    text-align: center;
    padding: 0 5px;
    width: 106px;
      span {
        width: 80px !important;
        height: 80px !important;
        border-radius: 8px;
      }
      figcaption {
        ${({theme}) => theme.variables.texts.navText
        }
      font-size: 11px;
      padding: 9px;
    }
  }
`