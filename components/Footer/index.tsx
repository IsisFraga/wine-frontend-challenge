import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from 'store'
import { FooterTag } from './style'

const Footer: React.FC = () => {

  const dispatch = useDispatch();
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const openSidebar = () => {
    dispatch({type: Actions.TOGGLE_FILTER_SIDEBAR})
    scrollTop()
  }
  return (
    <>
      <FooterTag>
        <div className={"left"} onClick={scrollTop}>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32"><path d="M27.41,13.59l-10-10a1.79,1.79,0,0,0-.31-.25A1.29,1.29,0,0,0,17,3.25l-.18-.1-.21-.06-.17,0a2,2,0,0,0-.78,0l-.17,0-.21.06-.18.1a1.29,1.29,0,0,0-.16.09,1.79,1.79,0,0,0-.31.25l-10,10a2,2,0,0,0,2.82,2.82L14,9.83V27a2,2,0,0,0,4,0V9.83l6.59,6.58a2,2,0,0,0,2.82-2.82Z"></path></svg>
          topo
        </div>
        <div className={"right"} onClick={openSidebar} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M4 10h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2H22.91A6 6 0 0 0 11.09 8H4a1 1 0 0 0 0 2zM17 5a4 4 0 1 1-4 4A4 4 0 0 1 17 5zM44 23H36.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2H25.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM31 28a4 4 0 1 1 4-4A4 4 0 0 1 31 28zM44 38H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zM17 43a4 4 0 1 1 4-4A4 4 0 0 1 17 43z" data-name="Layer 15"></path></svg>
          filtrar
        </div>
      </FooterTag>
    </>
  )
}

export default Footer