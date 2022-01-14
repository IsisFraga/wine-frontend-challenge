import styled from "styled-components";

export const ProductTag = styled.div`
  ${({theme}) => theme.variables.layout.flexCol
    + theme.variables.layout.w100
    + theme.variables.layout.justifyCenter
  }
  padding: 0 1em;
  position: relative;
  top: -65px;
  max-width: 1290px;
  padding: 0 5em;

  .picture {
    width: 218px;
    margin: 1em auto;
  }

  .infos-mobile {
    ${({theme}) => theme.variables.layout.flexCol}

    ${({theme}) => theme.breakpoints.desktopOnly} {
      display: none;
    }
  }
  .top-infos {
    .breadcrumbs {
      ${({theme}) => theme.breakpoints.desktopOnly} {
        padding-top: 0;
      }
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.texts.default
        + theme.variables.layout.w100
        + theme.variables.spacings.largePadding
        + theme.variables.layout.justifyCenter
      }
      text-transform: capitalize;
      padding-bottom: 1em;
      color: ${({theme}) =>theme.colors.onlyColors.distakColored};
      
      .current, span {
        color: ${({theme}) => theme.colors.onlyColors.medGray};
      }
      span {
        ${({theme}) => theme.variables.spacings.smallHorizPadding
        }
      }
    }
  
    .title {
      text-align: center;
      margin: auto;
      padding-bottom: 1em;
      font-weight: 700;
      font-size: 20px;
      ${({theme}) => theme.variables.spacings.smallVertPadding}
    }
    
  
    .main-infos {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.texts.default
        + theme.variables.layout.w100
        + theme.variables.layout.justifyBetween
      }
      padding: 0 5em;
      max-width: 380px;
      margin: auto;
      img {
        width: 16px;
        height: 16px;
      }
      p:not(.main):not(.country) {
        text-transform: lowercase;
      }
      .main, p:not(.main):not(.country) {
        color: ${({theme}) => theme.colors.onlyColors.medGray}
      }
    }
  }
  .description {
    .sommelier {
      display: none;
      ${({theme}) => theme.breakpoints.desktopOnly} {
        display: flex;
        text-transform: capitalize;
      }
    }
    .description-title {
      text-transform: capitalize;
      text-align: left;
      margin: 1em 0;
      ${({theme}) => theme.breakpoints.desktopOnly} {
        display: none;
      }
    }
    .wine-description {
      ${({theme}) => theme.variables.texts.default
      }
      text-transform: none;
      line-height: 24px;
      font-size: 16px;
      margin-bottom: 2em;
    }
  }

  .left {
    display: none;
    ${({theme}) => theme.breakpoints.desktopOnly} {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.w100
        + theme.colors.background.default
      }
      margin: 2em auto;
      .infos-desktop{
        ${({theme}) => theme.variables.layout.flexRow
          + theme.variables.layout.w100
        }
        .left-content, .right-content{
          width: 50%;
        }
        .left-content {
          ${({theme}) => theme.variables.layout.flexCol
          }
          .go-back {
            ${({theme}) => theme.variables.layout.flexRow
              + theme.variables.layout.justifyStart
              + theme.variables.layout.itemsCenter
              + theme.variables.layout.w100
              + theme.variables.texts.navText
            }
            svg {
              margin-right: 1em;
            }
            p {
              font-size: 20px;
              font-weight: 400;
            }
          }
        }
        .right-content {
          text-align: left;
          .breadcrumbs, .title, .main-infos {
            ${({theme}) => theme.variables.layout.justifyStart}
            margin: 0;
            padding:0;
          }
          ${({theme}) => theme.breakpoints.desktopOnly} {
            .main-infos {
              ${({theme}) => theme.variables.layout.justifyBetween}
              width: 70%;
            }
          }
          .title {
            padding: 1em 0;
            text-align: left;
          }
        }
      }
    }
  }


`

export const PriceTag = styled.div`
  ${({theme}) => theme.breakpoints.desktopOnly}{
    display: none;
  }
  ${({theme}) =>theme.variables.texts.navText
    + theme.colors.background.white
    + theme.variables.layout.w100
    + theme.variables.layout.flexRow
    + theme.variables.layout.justifyBetween 
    + theme.variables.layout.itemsCenter
    + theme.variables.shadow.smallTop 
  }
  height: 80px;
  position: fixed;
  bottom: 0;
  padding: 0 1em;
  margin: auto;

  .left, .right {
    ${({theme}) => theme.colors.text.default
      + theme.variables.layout.itemsCenter
    }
    position: relative;
    text-transform: uppercase;
    width: 50%;
    z-index: 2;
    font-size: 14px;
  }

  .left {
    .discount {
      font-size: 12px;
      text-align: left;
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
  
      .original-price {
        text-decoration: line-through;
        font-weight: 600;
        padding-top: 0.8em;
      }
      .no-height {
        ${({theme}) =>theme.variables.layout.h0
        }
      }
      .discount-value {
        ${({theme}) => theme.colors.background.branding
          + theme.colors.text.white
        }
        border-radius: 4px;
        text-transform: uppercase;
        padding: 5px 2px;
        width: 52px;
        font-size: 10px;
        text-align: center;
        position: relative;
        bottom: 1.5em;
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
      padding: 2px 0;

      .currency, .price {
        ${({theme}) => theme.variables.texts.default
        + theme.colors.text.distakColored
        }
        font-weight: 700;
      }
      .price {
        font-size: 24px;
        padding-left: 5px;
        line-height: 28px;
      }
    }
    .no-partner {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.justifyStart
      }
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 700;
      line-height: 16px;
      

      ${({theme}) => theme.breakpoints.desktopOnly} {
        font-size: 12px;
      }
  }
  .right {
    ${({theme}) => theme.variables.layout.itemsCenter
      + theme.variables.layout.h100
    }
    margin: auto 0;
  }
`

export const AddToCart = styled.button`
  ${({theme}) => theme.colors.background.green
    + theme.variables.texts.default
    + theme.colors.text.white
    + theme.variables.layout.w100
    + theme.variables.shadow.small
  }
  height: 48px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  margin: auto;
  padding: 5px 0;

  ${({theme}) => theme.breakpoints.desktopOnly}{
    ${({theme}) => theme.variables.layout.flexRow
      + theme.variables.layout.itemsCenter
    }
    max-width: 328px;
    margin: 0;
    justify-content: space-around;
    .counter {
      ${({theme}) => theme.variables.layout.flexRow
        + theme.variables.layout.itemsCenter
      }
      p {
        padding: 0 1em;
      }
    }
    .counter:after {
      content: '';
      height: 30px;
      width: 1px;
      position: relative;
      left: 10px;
      top: 0; 
      background-color: #fff;
      opacity: 0.1;
    }
  }
`