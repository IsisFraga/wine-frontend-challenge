import styled from "styled-components";

export const HeaderTag = styled.header`
  ${({theme}) =>theme.variables.texts.navText
    + theme.colors.background.white
    + theme.variables.shadow.small
    + theme.variables.layout.w100
  }
  height: 72px; 
  z-index: 3; 
  overflow: hidden; 
  position: relative;
  ${({theme}) => theme.breakpoints.desktopOnly}{
    height: 88px;
  }
  
`
  
export const Container = styled.div`
  ${({theme}) => theme.breakpoints.desktopOnly}{
    padding: 0 5em;
  }
  ${({theme}) => theme.variables.layout.container
  + theme.variables.spacings.smallHorizPadding
    + theme.variables.layout.flexRow
    + theme.variables.layout.justifyBetween 
    + theme.variables.layout.itemsCenter
    + theme.variables.layout.h100
    + theme.variables.layout.w100
  }
  .left {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.itemsCenter
      + theme.variables.layout.grow
      + theme.variables.layout.h100
    }
    ${({theme}) => theme.breakpoints.desktopOnly} {
      .hamburguer {
        display: none;
      }
    }
    h1 {
      padding-left: 0.5em;
      ${({theme}) => theme.variables.layout.flexRow}
      ${({theme}) => theme.breakpoints.desktopOnly}{
        padding-left: 0;
      }
    }
  }
`

export const NavTag = styled.nav`
  ${({theme}) => theme.variables.layout.grow
    + theme.variables.layout.h100
  }
  display: none;
  max-width: 479px;
  margin-right: 1em;
  li {
    a {
      position: relative;
      top: 2px;
    }
    border-bottom: 2px solid #FFF;
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.itemsCenter
      + theme.variables.transition
    }
    &:hover{
      ${({theme}) => theme.colors.text.distakColored
        + theme.variables.transition
      }
      border-bottom: 2px solid #D14B8F;
    }
  }
 
  ${({theme}) => theme.breakpoints.desktopOnly} {
    display: flex;
    padding-left: 3.5em;
    ul {
      width: 100%;
      ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyBetween
    }
  }
  
}
`
export const UserArea = styled.div`
  .hide-desktop {
    display: block;
  }
  .hide-mobile {
    display: none;
    position: relative;
    top: -3px;
  }
  ${({theme}) => theme.breakpoints.desktopOnly} {
    .hide-desktop {
      display: none;
    }
    .hide-mobile {
      display: block;
    }
  }
  nav {
    ${({theme}) => theme.variables.layout.justifyBetween}
    ul {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.w100
      }
      li {
        display: flex;
        cursor: pointer;
        ${({theme}) => theme.variables.layout.itemsCenter
        }
        .no-width{
          ${({theme}) => theme.variables.layout.w0}
        }
        .cart-value {
          ${({theme}) => theme.variables.circle
            + theme.variables.layout.itemsCenter
            + theme.variables.layout.justifyCenter
            + theme.colors.background.white
            + theme.colors.text.green
          }
          position: relative;
          display: flex;
          width: 20px;
          height: 20px;
          font-size: 12px;
          margin: auto;
          left: -1.5em;
          top: 1.5em;
          font-weight: 700;
          p {
            text-align: center;
            margin: auto;
          }
        }
      }
      

      li:nth-child(2){
        display: none;
        ${({theme}) => theme.breakpoints.desktopOnly} {
          display: flex;
        }
      }
      li:not(:first-child) {
        padding-left: 1.5em;
      }
    }
  }
`
export const SearchBar = styled.div`
  position: relative;
  z-index: 2; 
  top: 5px;
  height: 65px;
  transition: bottom 0.5s, top 0.5s;
  padding: 15px 1em 15px 0.5em;
  overflow-x: hidden;
  ${({theme}) => theme.variables.layout.flexRow
    + theme.colors.background.secondary
    + theme.variables.shadow.small
    + theme.variables.layout.itemsCenter
  }
  ${({theme}) => theme.breakpoints.desktopOnly}{
    padding: 15px 5em;
  }
  
  
  .search-bar {
    ${({theme}) => theme.variables.layout.flexRow
    + theme.variables.layout.w100
    + theme.variables.layout.itemsCenter
    }
    height: 35px;
    input {
      ${({theme}) => theme.variables.inputs.string
        + theme.colors.background.default
      }
      padding: 1em 0 1em 30px;
      border: none;
      border-radius: 4px;
      width: 100%;
      ::placeholder {
        ${({theme}) => theme.variables.texts.sideBar}
        font-weight: 600;
        color: #B5B5B5;
      }
    }
    .mic {
      position: relative;
      left: 22px;
    }

    
    .informative-txt {
      ${({theme}) => theme.breakpoints.desktopOnly}{
        ${({theme}) =>theme.variables.layout.flexRow
          + theme.variables.texts.navText
        }
        text-transform: lowercase;
        font-size: 10px;
        width: 150px;
        position: relative;
        right: 180px;
      }
      display: none;
    }

    .no-width{
      ${({theme}) => theme.variables.layout.w0}
    }
  
    .magnifier {
      position: relative;
      right: 50px;
      width: 25px;
    }
  }

`
