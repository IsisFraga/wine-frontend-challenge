import styled from "styled-components";

export const ProductListTag = styled.div`
  ${({theme}) => theme.breakpoints.desktopOnly} {
    z-index: 1;
  }

  ${({theme}) => theme.colors.background.default
    + theme.colors.text.support
    + theme.variables.layout.flexCol
    + theme.variables.texts.default
    + theme.variables.layout.w100
    + theme.variables.layout.h100
    + theme.variables.spacings.smallHorizPadding
  }
  font-size: 18px;
  text-transform: lowercase;
  position: relative;
  top: -65px;
  z-index: -1;
  .products-found-info{
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyStart
    }
    padding: 1em 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.onlyColors.lightGray};
    margin-bottom: 2em;
    margin-top: 0.5em;
    span {
    ${({theme}) => theme.colors.text.main}
      padding-right: 0.5em;
      font-weight: 700;
    }
  }
  .cards-list {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.texts.default
      + theme.variables.layout.w100
      + theme.variables.layout.justifyBetween
    }
    flex-wrap: wrap;
  }
  
`

export const WineCard = styled.div`
  ${({theme}) => theme.colors.background.white
    + theme.variables.shadow.small
    + theme.variables.layout.flexCol
    + theme.variables.texts.default
  }
  width: 156px;
  height: 348px;
  ${({theme}) => theme.breakpoints.desktopOnly} {
    width: 256px;
    height: 333px;
  }
  border-radius: 4px;
  margin-bottom: 0.5em;
  padding: 10px 12px;
  text-align: center;
  color: ${({theme}) => theme.colors.onlyColors.medGray}

  .card {
    ${({theme}) => theme.variables.layout.w100
    + theme.variables.layout.justifyCenter
    }
   
  }
  img {
    width: 120px;
    margin: auto auto 10px auto;
  }
  
  .black-friday{
    position: relative;
    bottom: 3.5em;
    right: 3.7em;
    height: 0;
    ${({theme}) => theme.breakpoints.desktopOnly} {
      bottom: 3em;
      left: 6em;
    }
  }

  h5 {
    ${({theme}) => theme.colors.text.distakBlack}
    font-weight: 700;
    font-size: 14px;
  }
  .discount {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyBetween
      + theme.variables.layout.itemsCenter
    }
    padding: 0.8em 0.1em;
    font-size: 12px;

    .original-price {
      text-decoration: line-through;
      font-weight: 600;
    }
    .discount-value {
      ${({theme}) => theme.colors.background.branding
      + theme.colors.text.white
    }
    border-radius: 4px;
    text-transform: uppercase;
    padding: 2px 5px;
    }
    ${({theme}) => theme.breakpoints.desktopOnly} {
      padding: 0.8em 4.5em;
    }
  }

  .partner {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyBetween
      + theme.variables.layout.itemsEnd
    }
    padding: 0 0.5em 0.8em; 
    .yes-partner {
      text-transform: uppercase;
      font-size: 12px;
      flex-wrap: wrap;
      width: 55px;
    }
    .currency, .price {
      ${({theme}) => theme.variables.texts.default
        + theme.colors.text.distakColored
      }
      font-weight: 700;
    }
    .price {
      font-size: 16px;
      padding-left: 2px;
      line-height: 28px;
    }

    ${({theme}) => theme.breakpoints.desktopOnly} {
      ${({theme}) => theme.variables.layout.justifyCenter
        + theme.colors.text.main
      }
      padding: 0 0.5em; 
      font-weight: 700;

      .yes-partner {
        flex-wrap: no-wrap;
        width: 80px;
        padding-right: 5px;
      }
      .price {
        font-size: 23px;
        line-height: 23px;
      }
      .currency{
        padding-left: 5px;
      }
    }
  }
  
  .no-partner {
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.justifyCenter
    }
    text-transform: uppercase;
    font-size: 10px;
    line-height: 16px;
    ${({theme}) => theme.breakpoints.desktopOnly} {
      font-size: 12px;
    }
  }
`

export const AddToCart = styled.button`
  ${({theme}) => theme.colors.background.green
    + theme.colors.text.white
    + theme.variables.layout.w100
    + theme.variables.shadow.small
  }
  height: 40px;
  border-radius: 4px;
  font-weight: 700;
  margin-bottom: 2em;
`