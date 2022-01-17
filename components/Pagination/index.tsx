import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import Image from 'next/image'
import carrinho from 'assets/Carrinho.png'
import { PaginationTagDesktop, PaginationTagMobile } from './style'

const Pagination: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { products } = useSelector((state) => state);
  const [limit] = useState(10)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [buttonPages, setButtonPages] = useState(<a className={"pages active"} href={"piroca"}>1</a>)

  useEffect(() => {
    if (products.totalPages) {
      setNumberOfPages(products.totalPages)
    }
  }, [products.totalPages])

  const redirect = (index) => {
    var reExp = /page=\\d+/;
    var url = window.location.toString();
    var newUrl = url.replace(reExp, "page=" + index);
    const page = updateQueryStringParameter(url, 'page', index)

    window.location.href = page
  }

  function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

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
        {Array.from(Array(numberOfPages)).map((item, index) => <button key={index} className={`pages ${products.currentPage === index + 1? `active` : ''}`} onClick={() => redirect(index + 1)} >{index + 1}</button>)}
        {numberOfPages > 1 && (
          <>
            <p className={"etc"}>...</p>
            <div className={"next"}>
              Próximo
              <div style={{ display: 'inline-block' }}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000290394 9.65581C0.000290394 9.56083 0.0398746 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.026793 0.474959 -0.0399876 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287633 9.81824 0.000290394 9.73703 0.000290394 9.65581Z" fill="#B6116E" />
                </svg>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.000290394 9.65581C0.000290394 9.56083 0.0398746 9.46654 0.117653 9.3984L5.13437 4.99966L0.117653 0.601601C-0.026793 0.474959 -0.0399876 0.256777 0.0877914 0.11637C0.214876 -0.0261023 0.433628 -0.0398678 0.577379 0.0867742L5.88854 4.74224C6.03715 4.87301 6.03715 5.12699 5.88854 5.25707L0.577379 9.91323C0.433628 10.0399 0.214876 10.0261 0.0877914 9.88363C0.0287633 9.81824 0.000290394 9.73703 0.000290394 9.65581Z" fill="#B6116E" />
                </svg>
              </div>
            </div>
          </>
        )}
      </PaginationTagDesktop>
    </>
  )
}
export default Pagination