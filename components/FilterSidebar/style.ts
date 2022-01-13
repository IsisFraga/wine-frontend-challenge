import styled from "styled-components";

interface PriceOptionsProps {
  active: boolean;
}

export const PriceOptions = styled.li<PriceOptionsProps> `

  border: 1px solid #eee;
  border-radius: 5px;
  padding: 12px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5em;


  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }


  .checkmark {
    position: absolute;
    top: -2px;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: white;
    border: 2px solid #B6116E;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 3px;
    left: 3px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #B6116E;
  }
  ${(props) => props.active? 'border-color: #B6116E' : ''}
  
`


export const FilterSidebarTag = styled.div`
  position: absolute;
  top: 0;
  overflow-y: auto;
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
