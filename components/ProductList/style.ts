import styled from "styled-components";

export const ProductListTag = styled.div`
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
  border-radius: 4px;
  margin-bottom: 0.5em;
  padding: 15px;
  text-align: center;

  img {
    width: 120px;
    margin-bottom: 10px;
  }
`