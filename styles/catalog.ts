import styled from "styled-components";

export const Container = styled.div`
${({theme}) => theme.breakpoints.desktopOnly} {
  ${({theme}) => theme.variables.layout.flexRow
    + theme.colors.background.default
    + theme.variables.layout.justifyCenter
    + theme.variables.layout.w100
  }
  max-width: 1290px;
  padding: 0 4em;
`