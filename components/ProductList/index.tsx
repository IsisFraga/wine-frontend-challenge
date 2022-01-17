import React, {useState, useCallback} from 'react'
import Image from 'next/image'
import { ContainerLayout, ProductListTag, WineCard, AddToCart } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import {Wine, WineList} from 'types';
import blackf from 'assets/blackf.png'
import { formatMoney } from "../../utils/money"
import Footer from 'components/Footer'
import Product from 'components/Product'
import Pagination from 'components/Pagination'
interface IProductList {
  list?: WineList
}



function ProductList ({list}:IProductList) {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state)
  return (
    <>
      <ContainerLayout>
        <ProductListTag>
          <div className={"products-found-info"}>
            <span>{list?.length}</span><p>produtos encontrados</p>
          </div>
          <div className={"cards-list"}>
            {list?.map((wine: Wine) => (
              <div className={"card"} key={wine.id}>
                <WineCard >
                  <img
                    src={wine.image} 
                    alt="foto da garrafa do vinho" 
                    placeholder="blur"
                  />
                  <div className={'black-friday'}>
                    <Image
                      className={'bf-logo'}
                      src= {blackf}
                      alt="logo da campanha de black friday"
                    />
                  </div> 
                  <h5>{wine.name}</h5>
                  <div className={'discount'}>
                    <p className={"original-price"}>{formatMoney(wine.price)}</p>
                    <p className={"discount-value"}>{wine.discount}% off</p>
                  </div>
                  <div className={'partner'}>
                    <p className={"yes-partner"}>sócio wine</p>
                    <div className={'main-value'}>
                      <span className={"currency"}>R$</span>
                      <span className={"price"}>{(wine.priceMember).toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>
                  <p className={"no-partner"}>não sócio {formatMoney(wine.priceNonMember)}</p>
                </WineCard>
                <AddToCart onClick={() => dispatch({ type: Actions.CLICK_PRODUCT, payload: wine })}>Adicionar</AddToCart>
              </div>
              )
            )}
          </div>
          
        </ProductListTag>
        <Pagination />
        <Footer />
      </ContainerLayout>
    </>
  )
}

export default ProductList