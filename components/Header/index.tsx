import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import Image from 'next/image'
import carrinho from 'assets/Carrinho.png'
import { Container, HeaderTag, NavTag, UserArea, SearchBar } from './style'
import Cart from 'components/Cart'

const Header: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('')
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <HeaderTag>
        <Container>
          <div className={'left'}>
            <div className={'hamburguer'} onClick={() => dispatch({type: Actions.TOGGLE_SIDEBAR})}>
              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.4725 17.4705H1.90016C1.26464 17.4705 0.75 17.025 0.75 16.4749V15.4774C0.75 14.9263 1.26464 14.4809 1.90016 14.4809H21.4725C22.1081 14.4809 22.625 14.9263 22.625 15.4774V16.4749C22.625 17.025 22.1081 17.4705 21.4725 17.4705ZM21.4725 10.4947H1.90016C1.26464 10.4947 0.75 10.0482 0.75 9.49716V8.50161C0.75 7.95152 1.26464 7.50507 1.90016 7.50507H21.4725C22.1081 7.50507 22.625 7.95152 22.625 8.50161V9.49716C22.625 10.0482 22.1081 10.4947 21.4725 10.4947ZM21.4725 3.51892H1.90016C1.26464 3.51892 0.75 3.07162 0.75 2.52171V1.5255C0.75 0.975598 1.26464 0.529297 1.90016 0.529297H21.4725C22.1081 0.529297 22.625 0.975598 22.625 1.5255V2.52171C22.625 3.07162 22.1081 3.51892 21.4725 3.51892Z" fill="#1D1D1B"/>
              </svg>
            </div>
            <h1>
              <svg width="104" height="32" viewBox="0 0 104 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M102.104 28.3738C100.671 28.5951 98.9387 28.9974 93.6231 28.9974C87.8098 28.9974 83.3105 27.4083 83.3105 19.7445V10.2502C83.3105 2.58646 87.8298 0.997375 93.6231 0.997375C98.9387 0.997375 100.671 1.39967 102.104 1.62093C102.781 1.70139 103 1.94278 103 2.56634V5.48301C103 5.98588 102.602 6.38818 102.104 6.38818H92.986C90.3979 6.38818 89.4622 7.29335 89.4622 10.2704V12.0807H101.567C102.064 12.0807 102.462 12.483 102.462 12.9859V16.2445C102.462 16.7474 102.064 17.1497 101.567 17.1497H89.4622V19.7847C89.4622 22.7617 90.3979 23.6669 92.986 23.6669H102.104C102.602 23.6669 103 24.0692 103 24.5721V27.4686C103 28.052 102.781 28.2934 102.104 28.3738Z" fill="#111111"/>
              <path d="M49.6058 2.54621L45.1862 27.5692C45.0866 28.0319 44.7283 28.4342 44.2903 28.4342H43.8324C43.4342 28.4342 43.1953 28.1123 43.1953 27.7502C43.1953 27.6497 43.1953 27.6094 43.1953 27.5692L47.615 2.54621C47.7145 2.08357 48.0729 1.68127 48.5109 1.68127H48.9688C49.3669 1.68127 49.6058 2.00311 49.6058 2.36518C49.6058 2.46576 49.6058 2.50598 49.6058 2.54621Z" fill="#111111"/>
              <path d="M38.3175 2.44564L34.6743 24.7732C34.2761 27.6094 32.9821 28.4342 30.6528 28.4342H28.2439C26.2331 28.4342 25.1581 27.4485 24.5409 24.8336L21.0171 13.6094C20.9375 13.2071 20.9375 13.1066 20.7583 13.1066C20.5791 13.1066 20.5393 13.187 20.4398 13.6094L16.8961 24.8336C16.2789 27.4485 15.2039 28.4342 13.1931 28.4342H10.7643C8.435 28.4342 7.14095 27.6296 6.74278 24.7732L3 2.44564C3 2.40541 3 2.36518 3 2.30484C3 1.90254 3.35835 1.68127 3.75652 1.68127H8.49473C8.85308 1.68127 9.21143 2.00311 9.25124 2.48587L12.0185 22.279C12.0583 22.6813 12.0583 22.9629 12.2375 22.9629C12.4167 22.9629 12.4167 22.7014 12.4963 22.279L16.3386 10.1094C16.5975 9.02323 17.2345 8.07783 19.1457 8.07783H22.2315C24.1427 8.07783 24.7798 9.02323 25.0386 10.1094L28.8809 22.279C28.9606 22.6813 28.9606 22.9629 29.1398 22.9629C29.3189 22.9629 29.3189 22.7014 29.3588 22.279L32.0265 2.48587C32.0663 1.983 32.4247 1.68127 32.783 1.68127H37.5212C37.9194 1.68127 38.2777 1.90254 38.2777 2.30484C38.3175 2.36518 38.3175 2.40541 38.3175 2.44564Z" fill="#111111"/>
              <path d="M76.5219 1.68127H75.9844C75.5265 1.68127 75.208 2.08357 75.1283 2.54621L71.0272 26.1411C70.9874 26.3221 70.7485 26.5031 70.7087 26.5031H70.6888C70.6689 26.5031 70.6689 26.5031 70.649 26.5031C70.5096 26.483 70.4698 26.3623 70.43 26.2014L63.0439 3.10944C62.7652 2.32495 62.1879 1.70139 61.0133 1.70139C60.9536 1.70139 60.8938 1.70139 60.8341 1.70139C60.8142 1.70139 60.7744 1.70139 60.7545 1.70139C59.8586 1.80197 58.8234 2.3853 58.5446 3.91403L54.3838 27.5692C54.3838 27.6094 54.3838 27.6698 54.3838 27.7502C54.3838 28.1123 54.6028 28.4342 55.0209 28.4342H55.4788C55.9366 28.4342 56.295 28.0319 56.3746 27.5692L60.5355 3.91403C60.5753 3.71289 60.6748 3.63243 60.7545 3.61231C60.7744 3.61231 60.7744 3.59219 60.7943 3.59219C60.8142 3.59219 60.8142 3.59219 60.8341 3.59219C60.9934 3.61231 61.1526 3.733 61.1925 3.91403L68.5785 26.9658C68.9368 28.1123 69.5341 28.4342 70.649 28.4342H70.6689C71.7837 28.414 72.7792 27.6094 73.038 26.1612L77.1391 2.56633C77.1391 2.5261 77.1391 2.42553 77.1391 2.3853C77.159 2.00311 76.9798 1.68127 76.5219 1.68127Z" fill="#111111"/>
              </svg>
            </h1>
            <NavTag>
              <ul>
                <li>
                  <a href="#/clube">clube</a>
                </li>
                <li>
                  <a href="#/loja">loja</a>
                </li>
                <li>
                  <a href="#/produtores">produtores</a>
                </li>
                <li>
                  <a href="#/ofertas">ofertas</a>
                </li>
                <li>
                  <a href="#/eventos">eventos</a>
                </li>
              </ul>
            </NavTag>
          </div>
          <UserArea>
            <nav>
              <ul>
                <li onClick={() => setOpenSearchBar(!openSearchBar)}>
                  <svg className={"hide-desktop"} width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.807 17.8169C5.05285 17.8169 1.18367 14.0966 1.18367 9.52526C1.18367 4.95304 5.05285 1.23452 9.807 1.23452C14.5611 1.23452 18.4294 4.95304 18.4294 9.52526C18.4294 14.0966 14.5611 17.8169 9.807 17.8169ZM25.4937 23.9549L16.957 15.7456C16.9387 15.728 16.9166 15.7206 16.8963 15.7067C18.4419 14.0697 19.3923 11.9049 19.3923 9.52526C19.3923 4.44378 15.0917 0.308594 9.807 0.308594C4.5213 0.308594 0.220703 4.44378 0.220703 9.52526C0.220703 14.6077 4.5213 18.7429 9.807 18.7429C12.2818 18.7429 14.5332 17.829 16.2367 16.3419C16.2502 16.3614 16.2579 16.3827 16.2762 16.4003L24.8129 24.6095C24.9072 24.7003 25.0305 24.7447 25.1537 24.7447C25.276 24.7447 25.3993 24.7003 25.4937 24.6095C25.6814 24.429 25.6814 24.1354 25.4937 23.9549Z" fill="black"/>
                  </svg>
                  <svg className={"hide-mobile"} width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.042 14.7474C18.3581 14.7474 13.7503 19.3551 13.7503 25.0391C13.7503 30.723 18.3581 35.3307 24.042 35.3307C29.7259 35.3307 34.3337 30.723 34.3337 25.0391C34.3337 19.3551 29.7259 14.7474 24.042 14.7474ZM12.167 25.0391C12.167 18.4807 17.4836 13.1641 24.042 13.1641C30.6004 13.1641 35.917 18.4807 35.917 25.0391C35.917 28.034 34.8083 30.77 32.9789 32.8589L43.5991 43.4791C43.9082 43.7882 43.9082 44.2895 43.5991 44.5987C43.2899 44.9078 42.7887 44.9078 42.4795 44.5987L31.8592 33.9784C29.7705 35.8063 27.0356 36.9141 24.042 36.9141C17.4836 36.9141 12.167 31.5974 12.167 25.0391Z" fill="#555555"/>
                  <circle cx="28" cy="28.9974" r="27" stroke="#555555" strokeWidth="2"/>
                  </svg>

                </li>
                <li>
                  <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.4163 46.9077C35.6468 57.6773 20.3526 57.6773 9.58301 46.9077C12.09 44.4007 16.8475 41.6216 23.2152 39.0746V33.9804C23.2152 33.9804 20.6681 33.0864 20.6681 27.6128C18.1211 27.6128 18.1211 22.5187 20.6681 22.5187C20.6681 21.7851 16.4018 15.0532 21.7659 16.151C23.0394 11.0569 35.5939 11.0569 36.8674 16.151C37.6264 19.1846 35.7263 21.9812 35.7263 22.5187C38.1944 22.5187 37.5194 27.6128 35.7467 27.6128C35.7467 33.0864 33.4034 33.9804 33.4034 33.9804V39.0746C39.771 41.6216 43.1669 43.7471 46.4163 46.9077Z" stroke="#555555" strokeWidth="2.20833" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M55 28.1137C55 43.0688 42.9092 55.1878 28 55.1878C13.0908 55.1878 1 43.0688 1 28.1137C1 13.1587 13.0908 1.03967 28 1.03967C42.9092 1.03967 55 13.1587 55 28.1137Z" stroke="#555555" strokeWidth="2"/>
                  </svg>
                </li>
                <li onClick={() => dispatch({type: Actions.TOGGLE_MODALCART})}>
                  <Image
                    src= {carrinho}
                    alt="imagem do carrinho de compras"
                    width="56px"
                    height="56px"
                  />
                  <div className={"no-width"}>
                    <div className={"cart-value"}>
                      <p>{cart.productsList.length}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </UserArea>
        </Container>
      </HeaderTag>
      <SearchBar style={{ top: openSearchBar ? "0" : "-200px" }}>
        <div className={"search-bar"}>
          <svg className={"mic"}viewBox="225.92 197.331 12.87 22.174" width="12.87" height="22.174">
            <g transform="matrix(0.495189, 0, 0, 0.495189, 219.482895, 190.78389)">
              <path d="M 38.178 28 C 37.73 28 37.366 28.447 37.366 29 L 37.366 35 C 37.366 42.72 32.265 49 25.995 49 C 19.725 49 14.625 42.72 14.625 35 L 14.625 29 C 14.625 28.447 14.26 28 13.812 28 C 13.364 28 13 28.447 13 29 L 13 35 C 13 43.485 18.396 50.429 25.183 50.949 L 25.183 56 L 21.122 56 C 20.673 56 20.31 56.447 20.31 57 C 20.31 57.553 20.673 58 21.122 58 L 30.868 58 C 31.317 58 31.68 57.553 31.68 57 C 31.68 56.447 31.317 56 30.868 56 L 26.807 56 L 26.807 50.949 C 33.594 50.429 38.99 43.484 38.99 35 L 38.99 29 C 38.99 28.447 38.627 28 38.178 28 Z" fill="#b6116e"></path>
              <path d="M 25.995 46 C 30.921 46 34.93 42.484 34.93 38.161 L 34.93 21.059 C 34.93 16.738 30.921 13.221 25.995 13.221 C 21.069 13.221 17.061 16.738 17.061 21.059 L 17.061 38.161 C 17.061 42.484 21.069 46 25.995 46 Z" fill="#b6116e"></path>
            </g>
          </svg>
          <input type="search" placeholder="Pesquisar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
          <div className={"no-width"}>
            <span className={"informative-txt"}>
              <p>aperte enter para buscar</p>
            </span>
          </div>
          <div className={"no-width"}>
            <button className={"magnifier"} onClick={() => window.location.search = `?search=${searchValue}`}>
              <svg fill="#B6116E" width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" fill="#B6116E" clipRule="evenodd" d="M9.807 17.8169C5.05285 17.8169 1.18367 14.0966 1.18367 9.52526C1.18367 4.95304 5.05285 1.23452 9.807 1.23452C14.5611 1.23452 18.4294 4.95304 18.4294 9.52526C18.4294 14.0966 14.5611 17.8169 9.807 17.8169ZM25.4937 23.9549L16.957 15.7456C16.9387 15.728 16.9166 15.7206 16.8963 15.7067C18.4419 14.0697 19.3923 11.9049 19.3923 9.52526C19.3923 4.44378 15.0917 0.308594 9.807 0.308594C4.5213 0.308594 0.220703 4.44378 0.220703 9.52526C0.220703 14.6077 4.5213 18.7429 9.807 18.7429C12.2818 18.7429 14.5332 17.829 16.2367 16.3419C16.2502 16.3614 16.2579 16.3827 16.2762 16.4003L24.8129 24.6095C24.9072 24.7003 25.0305 24.7447 25.1537 24.7447C25.276 24.7447 25.3993 24.7003 25.4937 24.6095C25.6814 24.429 25.6814 24.1354 25.4937 23.9549Z"/>
              </svg>
            </button>
          </div>
        </div>
      </SearchBar>
    </>
  )
}

export default Header