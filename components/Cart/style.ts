import styled from "styled-components";

export const ShadowMenuMobile = styled.section`
  z-index: 3;
  background-color: rgba(100, 100, 100, 0.7);
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  `
  
  export const CartTag = styled.div`
  height: 100%;
  min-height: 500px;
  width: 350px;
  position: fixed;
  top: 0;
  right:0;
  overflow-y: scroll;
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
    overflow-y: scroll;
    max-height: calc(100vh - 277px);
  }
  `
  
  export const EmptyCart = styled.div`
  padding: 40px 30px;
  text-align: center;
  
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
  ${({theme}) => theme.variables.texts.default
    + theme.variables.layout.flexCol
  }
  .added-product {
    ${({theme}) => theme.variables.layout.flexRow
    }
    img {
      max-height: 110px;
      max-width: 100%;
    }
    border-bottom: 1px solid #DEDEDE;
    padding: 16px;
    width: 100%;

    .product-infos {
      ${({theme}) => theme.variables.layout.flexCol
      }
      width: 100%;

      .product-header {
        width: 100%;
        ${({theme}) => theme.variables.layout.flexRow
          + theme.variables.layout.justifyBetween
        }

        .product-text{
          h4 {
            ${({theme}) => theme.colors.text.medGrayMain}
          }
          p {
            ${({theme}) => theme.colors.text.medGrayTitle}
            font-size: 12px;
            margin-top: 5px;
          }
        }

        .remove-item {
          min-width: 18px;
          width: 18px;
          height: 18px;
          border: 1px solid ${({theme}) => theme.colors.onlyColors.medGray};
          border-radius: 100%;
        }
      }

      .product-footer {
        width: 100%;
        padding-top: 1.5em;
        ${({theme}) => theme.variables.layout.flexRow
          + theme.variables.layout.justifyBetween
          + theme.variables.layout.itemsEnd
        }
        .input-quantity{
          ${({theme}) => theme.variables.layout.flexRow
            + theme.variables.layout.itemsCenter
          }
          text-align: center;
          border: 1px solid ${({theme}) => theme.colors.onlyColors.medGray};
          border-radius: 4px;
          height: 35px;
          padding: 0 10px;
          width: 60px;
          p {
            width: 2em;
          }
          button {
            ${({theme}) => theme.colors.text.medGrayTitle}
          }
        }
      }
    }
    .price {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.itemsEnd
        + theme.colors.text.distakColored
      }
      font-weight: 700;
      .value {
        font-size: 20px;
      }
    }
  }
`

export const WineboxFooter = styled.div`
  ${({theme}) => theme.variables.layout.flexCol
    + theme.variables.layout.w100
    + theme.colors.background.white
  }
  position: fixed;
  bottom: 0;
  padding: 20px;
  height: 217px;

  .subtotal {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyBetween
    }
    padding-bottom: 16px;
    p {
      font-size: 20px;
      font-weight: 700px;
    }
    .total {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.colors.text.distakColored
      }
      font-size: 28px;
      font-weight: 400px;

      .currency{
        margin-right: 0.25em;
      }
    }
  }
  .cashback {
    text-transform: none;
    .value {
      ${({theme}) => theme.colors.background.lightGreen}
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      text-align: center;
      margin-bottom: 5px;
    }
    p {
      font-size: 11px;
    }
  }
`

export const FinishOrder = styled.button`
  ${({theme}) => theme.colors.background.green
    + theme.colors.text.white
    + theme.variables.layout.w100
    + theme.variables.shadow.small
  }
  height: 48px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  margin-top: 2em;
`