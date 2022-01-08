import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as theme from 'theme';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{
  box-sizing: border-box;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  min-height:100vh;
  margin-top:0;
}

`;



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>  
    )
}

export default MyApp
