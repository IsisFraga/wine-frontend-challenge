import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import Image from 'next/image'
import carrinho from 'assets/Carrinho.png'
import { PaginationTagDesktop, PaginationTagMobile } from './style'

const Pagination: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <PaginationTagMobile>
        <button className={"show-more"}>
          Mostrar mais
        </button>
        <p>Exibindo <strong>8</strong> de <strong>48</strong> produtos no total</p>
      </PaginationTagMobile>
      <PaginationTagDesktop>
        <button className={"pages active"}>1</button>
        <button className={"pages middle"}>2</button>
        <button className={"pages"}>3</button>
        <p className={"etc"}>...</p>
        <p className={"next"}>
          Próximo
          <button>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.000290394 9.65581C0.000290394 9.56083 0.0398746 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.026793 0.474959 -0.0399876 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287633 9.81824 0.000290394 9.73703 0.000290394 9.65581Z" fill="#B6116E"/>
            </svg>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.000290394 9.65581C0.000290394 9.56083 0.0398746 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.026793 0.474959 -0.0399876 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287633 9.81824 0.000290394 9.73703 0.000290394 9.65581Z" fill="#B6116E"/>
            </svg>
          </button>
        </p>
      </PaginationTagDesktop>
    </>
  )
}
export default Pagination