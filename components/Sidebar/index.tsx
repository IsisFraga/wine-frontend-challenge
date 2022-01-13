import React, {useState} from 'react'
import Image from 'next/image'
import loja from 'assets/loja.png'
import vinhos from 'assets/vinhos.png'
import ofertas from 'assets/ofertas.png'
import bar from 'assets/bar.png'
import produtores from 'assets/produtores.png'
import eventos from 'assets/eventos.png'
import conheca from 'assets/conheca.png'
import essenciais from 'assets/essenciais.png'
import surpreendentes from 'assets/surpreendentes.png'
import notaveis from 'assets/notaveis.png'
import singulares from 'assets/singulares.png'
import refrescantes from 'assets/refrescantes.png'
import espumantes from 'assets/espumantes.png'
import winePass from 'assets/wine_pass.png'
import { ShadowMenuMobile, SidebarTag, Accordeon, InfoTypes } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'


export const clubesWine = [
  {
    name: 'essenciais',
    image: essenciais,
    altText: 'imagem do clube essenciais'
  },
  {
    name: 'surpreendentes',
    image: surpreendentes,
    altText: 'imagem do clube surpreendentes'
  },
  {
    name: 'notáveis',
    image: notaveis,
    altText: 'imagem do clube notáveis'
  },
  {
    name: 'singulares',
    image: singulares,
    altText: 'imagem do clube singulares'
  },
  {
    name: 'refrescantes',
    image: refrescantes,
    altText: 'imagem do clube refrescantes'
  },
  {
    name: 'espumantes',
    image: espumantes,
    altText: 'imagem do clube espumantes'
  },
  {
    name: 'Conheça o Clube Wine',
    image: conheca,
    altText: 'imagem em desenho de uma caixa com duas garrafas'
  },
  {
    name: 'WinePass',
    image: winePass,
    altText: 'imagem de fundo azul escrito winepass'
  },
]

export const storesWine = [
  {
    name: 'loja',
    image: loja,
    altText: 'imagem que representa a loja da Wine'
  },
  {
    name: 'vinhos',
    image: vinhos,
    altText: 'imagem do desenho de três garrafas de vinho'
  },
  {
    name: 'ofertas',
    image: ofertas,
    altText: 'imagem de uma medalha que representa as ofertas'
  },
  {
    name: 'bar & gourmet',
    image: bar,
    altText: 'imagem do desenho de um copo de dry martini'
  },
  {
    name: 'produtores',
    image: produtores,
    altText: 'imagem do desenho de um barril que representa os produtores'
  },
  {
    name: 'eventos',
    image: eventos,
    altText: 'imagem do desenho de duas taças de espumante brindando'
  },
]

const Sidebar: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true); 
  const [showClubs, setShowClubs] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(true);
  const dispatch = useDispatch();
  const {app} = useSelector((state) => state);

 

  return (
    <>
      <ShadowMenuMobile onClick={() => dispatch({type: Actions.TOGGLE_SIDEBAR})} style={ {display: app.sidebar ? " " : "none"}}/>
      <SidebarTag style={{ transform: app.sidebar ? "translate3d(0px, 0px, 0px)" : "translate3d(-100%, 0px, 0px)" }}>
        <div className={"account-login"}>
          <div className={"user-image"}>
            <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.4163 46.9077C35.6468 57.6773 20.3526 57.6773 9.58301 46.9077C12.09 44.4007 16.8475 41.6216 23.2152 39.0746V33.9804C23.2152 33.9804 20.6681 33.0864 20.6681 27.6128C18.1211 27.6128 18.1211 22.5187 20.6681 22.5187C20.6681 21.7851 16.4018 15.0532 21.7659 16.151C23.0394 11.0569 35.5939 11.0569 36.8674 16.151C37.6264 19.1846 35.7263 21.9812 35.7263 22.5187C38.1944 22.5187 37.5194 27.6128 35.7467 27.6128C35.7467 33.0864 33.4034 33.9804 33.4034 33.9804V39.0746C39.771 41.6216 43.1669 43.7471 46.4163 46.9077Z" stroke="#555555" strokeWidth="2.20833" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M55 28.1137C55 43.0688 42.9092 55.1878 28 55.1878C13.0908 55.1878 1 43.0688 1 28.1137C1 13.1587 13.0908 1.03967 28 1.03967C42.9092 1.03967 55 13.1587 55 28.1137Z" stroke="#555555" strokeWidth="2"/>
            </svg>
          </div>
          <div className={"access"}>
            <p>
              Acesse sua conta
            </p>
            <a href="https://www.wine.com.br/sign-in.ep#/identificacao" title="acessar minha conta">entrar</a>
          </div>
          <button className={"close"} onClick={() => dispatch({type: Actions.TOGGLE_SIDEBAR})}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <g fill="none" fillRule="evenodd">
              <path d="M0 0h40v40H0z"/>
              <path fill="#1D1D1B" d="M21.414 20l7.293-7.293a.999.999 0 1 0-1.414-1.414L20 18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414L18.586 20l-7.293 7.293a.999.999 0 1 0 1.414 1.414L20 21.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21.414 20z"/>
              </g>
            </svg>
          </button>
        </div>
        <Accordeon>
          <ul>
            <li>
              <div className={"options"} onClick={() => setShowClubs(!showClubs)}>
                <p style={{ color: showClubs ? "" : "#1D1D1B" }}>clube</p>
                <svg style={{ transform: showClubs ? "rotate(0)" : "rotate(180deg)" }} width="24px" height="24px" fill="#B6116E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16a1 1 0 0 1-.707-.293L5.636 10.05A1 1 0 0 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657A1 1 0 0 1 12 16z"/>
                </svg>
              </div>
              <InfoTypes style={{ height: showClubs ? "0" : "350px" }}>
                { clubesWine.map(item => {
                  return (
                    <figure key={item.name}>
                      <Image
                        src={item.image}
                        alt={item.altText}
                        width="56px"
                        height="56px"
                      />
                      <figcaption>
                        {item.name}
                      </figcaption>
                    </figure>
                  )
                })
                }
              </InfoTypes>
            </li>
            <li>
              <div className={"options"} onClick={() => setShowStore(!showStore)}>
                <p style={{ color: showStore ? "#1D1D1B" : "" }}>loja</p>
                <svg style={{ transform: showStore ? "rotate(180deg)" : "rotate(0)" }} width="24px" height="24px" fill="#B6116E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16a1 1 0 0 1-.707-.293L5.636 10.05A1 1 0 0 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657A1 1 0 0 1 12 16z"/>
                </svg>
              </div>
              <InfoTypes style={{ height: showStore ? "250px" : "0" }}>
                { storesWine.map(item => {
                  return (
                    <figure key={item.name}>
                      <Image
                        src={item.image}
                        alt={item.altText}
                        width="56px"
                        height="56px"
                      />
                      <figcaption>
                        {item.name}
                      </figcaption>
                    </figure>
                  )
                })
                }
              </InfoTypes>
            </li>
            
            <li>
              <div className={"options"}>
                <a href="https://www.wine.com.br/institucional/app/" target="_blank" rel="noreferrer">
                  <p>baixe o app</p>
                  <svg width="24px" height="24px" fill="#B6116E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16a1 1 0 0 1-.707-.293L5.636 10.05A1 1 0 0 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657A1 1 0 0 1 12 16z"/>
                  </svg>
                </a>
              </div>
            </li>
            <li>
              <div className={"options"}>
                <a href="https://centraldeajuda.wine.com.br/" target="_blank" rel="noreferrer">
                  <p>central de ajuda</p>
                  <svg width="24px" height="24px" fill="#B6116E" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16a1 1 0 0 1-.707-.293L5.636 10.05A1 1 0 0 1 7.05 8.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414l-5.657 5.657A1 1 0 0 1 12 16z"/>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </Accordeon>
      </SidebarTag>
    </>
  )
}
export default Sidebar