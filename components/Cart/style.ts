import styled from "styled-components";

export const ShadowMenuMobile = styled.section`
  z-index: 3;
  background-color: rgba(100, 100, 100, 0.7);
  height: 100%;
  min-height: 500px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  `
  
  export const CartTag = styled.div`
  height: 100%;
  width: 350px;
  position: fixed;
  top: 0;
  right:0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.5s ease 0s;
  z-index: 10;


  ${({theme}) => theme.variables.texts.default
    + theme.colors.background.default
    + theme.colors.text.support
    + theme.variables.layout.flexCol
    + theme.variables.shadow.small
  }

  .header {
    ${({theme}) => theme.colors.background.white 
      + theme.variables.layout.flexRow
      + theme.variables.layout.itemsCenter
      
    }
    padding: 20px;
    height: 60px;
    font-size: 20px;
    color: ${({theme}) => theme.colors.onlyColors.black}
    .close {
      padding-right: 1em;
      svg {
        position: relative;
        top: 0;
      }
    }
  }
  .cart-container {
    ${({theme}) => theme.variables.texts.default
      + theme.variables.layout.flexCol
      + theme.variables.layout.itemsCenter
    }
    padding: 40px 30px;
    text-align: center;
  }
`

export const EmptyCart = styled.div`

  .sad-face {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    color: ${({theme}) => theme.colors.onlyColors.medLightGray}
  }
  strong {
    text-transform: none;
    font-size: 20px;
    ${({theme}) => theme.colors.text.main}
  }
`
export const FullCart = styled.div`
  
`