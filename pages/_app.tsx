import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as theme from 'theme';
import { wrapper } from 'store';
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import FilterSidebar from 'components/FilterSidebar'
import ProductList from 'components/ProductList'
import Footer from 'components/Footer'
const GlobalStyle = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
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
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>  
    )
}

export default wrapper.withRedux(MyApp)
