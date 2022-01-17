import styled from "styled-components";

export const PaginationTagMobile = styled.div`
  ${({theme}) => theme.variables.texts.default
    + theme.variables.layout.flexCol
  }
  ${({theme}) => theme.breakpoints.desktopOnly}{
    display: none;
  }
  position: relative;
  bottom: 60px;
  text-transform: none;
  padding: 0 1em;
  .show-more {
    ${({theme}) => theme.colors.text.distakColored
    }
      font-weight: 700;
      margin-bottom: 1em;
      height: 40px;
      border: 2px solid ${({theme}) => theme.colors.onlyColors.distakColored};
      border-radius: 4px;
    }
    p {
      ${({theme}) => theme.colors.text.medGrayTitle
      }
      margin-bottom: 1em;
      text-align: center;
      font-size: 18px;
      strong {
        ${({theme}) => theme.colors.text.distakBlack
        }
      }
    }
  }
`

export const PaginationTagDesktop = styled.div`
  display: none;

  ${({theme}) => theme.breakpoints.desktopOnly}{
    ${({theme}) => theme.variables.texts.default
    + theme.variables.layout.flexRow
    + theme.variables.layout.itemsCenter
    + theme.colors.text.distakColored
  }
  text-align: center;
  margin: 1em auto;
  
  .pages {
    ${({theme}) => theme.colors.text.distakColored}
      font-size: 16px;
      width: 38px;
      height: 38px;
      border: 1px solid ${({theme}) => theme.colors.onlyColors.distakColored}
      border-radius: 3px;
      margin: 0 8px;
    }
    .active {
      ${({theme}) => theme.colors.background.distakColored
        + theme.variables.texts.default
        + theme.colors.text.white
      }
    }
    .middle {
      width: 73px;
    }
    .next {
      font-size: 12px;
      font-weight: 700;
      padding: 0 10px;
      cursor: pointer;
      svg:first-child {
        margin-left: 10px;
      }
    }
  }

  .etc {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`
