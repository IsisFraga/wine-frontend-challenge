import styled from "styled-components";


export const FilterTag = styled.div`
  display: none;
  ${({theme}) => theme.breakpoints.desktopOnly} {
    ${({theme}) => theme.variables.layout.w100}
    position: relative;
    top: -86px;
  

    ${({theme}) => theme.variables.texts.default
      + theme.colors.text.support
      + theme.variables.layout.flexCol
      + theme.variables.layout.h100
      + theme.colors.background.default
    }

    form {
      width: 100%;
      
      .title, h4 {
        ${({theme}) => theme.colors.text.main}
        padding-top: 50px;
        text-align: left;
        font-weight: 600;
        width: 100%;
      }
      h4 {
        position: relative;
        font-weight: 400;
        font-size: 18px;
        padding-top: 30px;
        margin-bottom: 1em;
      }
    }
  }
`

interface PriceOptionsProps {
  active: boolean;
}

export const PriceOptionsDesk = styled.li<PriceOptionsProps> `
  
  ${({theme}) => theme.variables.inputRadio}
  border: none;
  padding: 0.5em;

  ${(props) => props.active? 'border-color: #B6116E;' : ''}
  
`
