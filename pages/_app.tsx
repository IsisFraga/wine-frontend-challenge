import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import * as theme from 'theme'
import { wrapper } from 'store'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import FilterSidebar from 'components/FilterSidebar'
import Cart from 'components/Cart'
const GlobalStyle = createGlobalStyle`
* {
  @import url('http://fonts.cdnfonts.com/css/neo-sans-std?styles=93835,93832,93834,93829,93827,93837');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

html{
  box-sizing: border-box;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  min-height:100vh;
  margin-top:0;
  background: #f5f5f5;
}

button {
  background: none;
  border: none;

`;



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Sidebar />
        <FilterSidebar />
        <Cart />
        <Component {...pageProps} />
      </ThemeProvider>
    </>  
    )
}

export default wrapper.withRedux(MyApp)
