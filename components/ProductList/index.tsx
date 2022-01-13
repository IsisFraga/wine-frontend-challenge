import React, {useState, useCallback} from 'react'
import Image from 'next/image'
import { ProductListTag, WineCard } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import {Wine, WineList} from 'types';
import blackf from 'assets/blackf.png'
import { formatMoney } from "../../utils/money"

interface IProductList {
  list?: WineList
}



function ProductList ({list}:IProductList) {

  return (
    <ProductListTag>
      <div className={"products-found-info"}>
        <span>{list?.length}</span><p>produtos encontrados</p>
      </div>
      <div className={"cards-list"}>
        {list?.map((wine: Wine) => (
          <WineCard key={wine.id}>
            <img
              src={wine.image} 
              alt="foto da garrafa do vinho" 
              placeholder="blur"
            />
            <h5>{wine.name}</h5>
            <div className="black-friday">
              <Image
                className="bf-logo"
                src= {blackf}
                alt="logo da campanha de black friday"
              />
            </div>
            <p className={"original-price"}>{formatMoney(wine.price)}</p>
            <p className={"discount"}>{wine.discount}% off</p>
            <p>sócio wine</p><span>{formatMoney(wine.priceMember)}</span>
            <p>não sócio {formatMoney(wine.priceNonMember)}</p>
            
          </WineCard>
          )
        )}
      </div>
      
    </ProductListTag>
  )
}

export default ProductList