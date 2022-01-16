import styled from "styled-components";

interface PriceOptionsProps {
  active: boolean;
}

export const PriceOptions = styled.li<PriceOptionsProps> `
  ${({theme}) => theme.variables.inputRadio}
  ${(props) => props.active ? 'border-color: #B6116E;' : ''}
`


export const FilterSidebarTag = styled.div`
  position: fixed;
  top: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.5s ease 0s;
  z-index: 3;
  ${({theme}) => theme.breakpoints.desktopOnly} {
    display: none;
  }

  ${({theme}) => theme.variables.texts.default
    + theme.colors.background.white
    + theme.colors.text.support
    + theme.variables.layout.flexCol
    + theme.variables.shadow.small
    + theme.variables.layout.w100
    + theme.variables.layout.h100
  }
  .close {
    ${({theme}) => theme.variables.layout.w100}
    svg {
      position: relative;
      top: 20px;
      left: 20px;
      height: 20px;
      width: 25px;
      display: flex;
    }
  }
  .title, h4 {
    ${({theme}) => theme.colors.text.main}
    padding-top: 50px;
    text-align: center;
    font-weight: 600;
  }
  h4 {
    text-align: left;
    position: relative;
    left: 20px;
    font-weight: 400;
    font-size: 18px;
    padding-top: 30px;
  }

  form {
    .price-options {
      padding: 1em;
      ${({theme}) => theme.variables.layout.flexCol}
    }
  }
`
