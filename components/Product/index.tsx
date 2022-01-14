import React, {useState, useCallback} from 'react'
import Image from 'next/image'
import { ProductTag, WineCard, AddToCart } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import {Wine, WineList} from 'types';
import blackf from 'assets/blackf.png'
import { formatMoney } from "../../utils/money"

interface IWine {
  wine?: Wine
}


function Product ({wine}:IWine) {

  return (
    <ProductTag>
      <div className={"breadcrumbs"}>
        <p>Vinhos</p>
        <span>&gt;</span>
        <p>{wine?.country}</p>
        <span>&gt;</span>
        <p className={"current"}>{wine?.region}</p>
      </div>
      <h3 className={"title"}>{wine?.name}</h3>
      <div className={"main-infos"}>
        <img src={wine?.flag} alt={"bandeira de " + `${wine.country}`}></img>
        <p className={"country"}>{wine?.country}</p>
        <p className={"main"}>{wine?.type}</p>
        <p className={"main"}>{wine?.classification}</p>
        <p>{wine?.volume}</p>
      </div>
      <img className={"picture"} src={wine?.image} alt={"foto da garrafa do vinho " + `${wine.name}`}></img>
      <h3 className={"title description"}>descrição</h3>
      <h3 className={"title sommelier"}>Comentário do sommelier</h3>
      <p className={"wine-description"}>{wine?.sommelierComment}</p>
      {/* <div className={"cards-list"}>
        {list?.map((wine: Wine) => (
          <div className={"card"} key={wine.id}>
            <WineCard >
              <img
                src={wine.image} 
                alt="foto da garrafa do vinho" 
                placeholder="blur"
              />
              <div className="black-friday">
                <Image
                  className="bf-logo"
                  src= {blackf}
                  alt="logo da campanha de black friday"
                />
              </div> 
              <h5>{wine.name}</h5>
              <div className="discount">
                <p className={"original-price"}>{formatMoney(wine.price)}</p>
                <p className={"discount-value"}>{wine.discount}% off</p>
              </div>
              <div className="partner">
                <p className={"yes-partner"}>sócio wine</p>
                <div className="main-value">
                  <span className={"currency"}>R$</span>
                  <span className={"price"}>{(wine.priceMember).toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
              <p className={"no-partner"}>não sócio {formatMoney(wine.priceNonMember)}</p>
            </WineCard>
            <AddToCart>Adicionar</AddToCart>
          </div>
          )
        )}
      </div> */}
      
    </ProductTag>
  )
}

export default Product