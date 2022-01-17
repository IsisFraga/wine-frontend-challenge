import React, {useState, useCallback} from 'react'
import Image from 'next/image'
import { ProductTag, AddToCart, PriceTag } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import {Wine, WineList} from 'types';
import blackf from 'assets/blackf.png'
import { formatMoney } from "../../utils/money"

interface IWine {
  wine: Wine
}


function Product ({wine}:IWine) {

  var stars = [];
  var starNumber = wine.rating
  for(var _i = 0; _i < starNumber; _i++) {
    if (starNumber == null || starNumber == undefined) {
      return
    } else {
      stars.push(
      <svg key={_i} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.45192 0.659118C6.76953 0.0430373 7.68198 0.0507658 7.9969 0.659118L9.75451 4.07215L13.6869 4.62121C14.3921 4.71917 14.6747 5.55179 14.1633 6.02869L11.3183 8.68383L11.9912 12.4345C12.1123 13.1125 11.3668 13.6178 10.7423 13.3033L7.22441 11.5323L3.70651 13.3033C3.08205 13.6203 2.3365 13.1125 2.45763 12.4345L3.13052 8.68383L0.28551 6.02869C-0.225891 5.55179 0.0567257 4.71917 0.761926 4.62121L4.69432 4.07215L6.45192 0.659118Z" fill="#F9B950"/>
      </svg>
      );
    }
  }


  return (
    <>
      <ProductTag>
        <div className={"right"}>
          <div className="infos-mobile">
            <div className="top-infos">
              <div className={"breadcrumbs"}>
                <p>Vinhos</p>
                <span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.109593 9.3984L4.78088 4.99966L0.109593 0.601601C-0.0249066 0.474959 -0.0371928 0.256777 0.0817881 0.11637C0.200122 -0.0261023 0.403812 -0.0398678 0.537665 0.0867742L5.48313 4.74224C5.62151 4.87301 5.62151 5.12699 5.48313 5.25707L0.537665 9.91323C0.403812 10.0399 0.200122 10.0261 0.0817881 9.88363C0.026824 9.81824 0.000311852 9.73703 0.000311852 9.65581C0.000311852 9.56083 0.0371704 9.46654 0.109593 9.3984Z" fill="#888888"/>
                  </svg>
                </span>
                <p>{wine.country}</p>
                <span>  
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.109593 9.3984L4.78088 4.99966L0.109593 0.601601C-0.0249066 0.474959 -0.0371928 0.256777 0.0817881 0.11637C0.200122 -0.0261023 0.403812 -0.0398678 0.537665 0.0867742L5.48313 4.74224C5.62151 4.87301 5.62151 5.12699 5.48313 5.25707L0.537665 9.91323C0.403812 10.0399 0.200122 10.0261 0.0817881 9.88363C0.026824 9.81824 0.000311852 9.73703 0.000311852 9.65581C0.000311852 9.56083 0.0371704 9.46654 0.109593 9.3984Z" fill="#888888"/>
                  </svg>
                </span>
                <p className={"current"}>{wine.region}</p>
              </div>
              <h3 className={"title"}>{wine.name}</h3>
            <div className={"main-infos"}>
              <img src={wine.flag} alt={"bandeira de " + `${wine.country}`}></img>
              <p className={"country"}>{wine.country}</p>
              <p className={"main"}>{wine.type}</p>
              <p className={"main"}>{wine.classification}</p>
              <p>{wine.volume}</p>
            </div>
            </div>
            <img className={"picture"} src={wine.image} alt={"foto da garrafa do vinho " + `${wine.name}`}></img>
            <div className={"description"}>
              <h3 className={"title description-title"}>descrição</h3>
              <h3 className={"title sommelier"}>Comentário do sommelier</h3>
              <p className={"wine-description"}>{wine.sommelierComment}</p>
            </div>
          </div>
        </div>
        <div className={"left"}>
          <div className="infos-desktop">
            <div className={"left-content"}>
              <button className={"go-back"} onClick={() => window.location.href="/catalog"}>
                <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7739 19.8231C13.1237 19.3957 13.0607 18.7657 12.6332 18.416L2.57915 10.1899L12.6332 1.96387C13.0607 1.61414 13.1237 0.984118 12.7739 0.556673C12.4242 0.129229 11.7942 0.066227 11.3667 0.415953L0.366732 9.41595C0.134596 9.60588 -3.05176e-05 9.88998 -3.05176e-05 10.1899C-3.05176e-05 10.4898 0.134596 10.7739 0.366732 10.9639L11.3667 19.9639C11.7942 20.3136 12.4242 20.2506 12.7739 19.8231Z" fill="black"/>
                </svg>
                <p>voltar</p>
              </button>
              <img className={"picture"} src={wine.image} alt={"foto da garrafa do vinho " + `${wine.name}`}></img>
            </div>
            <div className="right-content">
              <div className="top-infos">
                <div className={"breadcrumbs"}>
                  <p>Vinhos</p>
                  <span>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.109593 9.3984L4.78088 4.99966L0.109593 0.601601C-0.0249066 0.474959 -0.0371928 0.256777 0.0817881 0.11637C0.200122 -0.0261023 0.403812 -0.0398678 0.537665 0.0867742L5.48313 4.74224C5.62151 4.87301 5.62151 5.12699 5.48313 5.25707L0.537665 9.91323C0.403812 10.0399 0.200122 10.0261 0.0817881 9.88363C0.026824 9.81824 0.000311852 9.73703 0.000311852 9.65581C0.000311852 9.56083 0.0371704 9.46654 0.109593 9.3984Z" fill="#888888"/>
                    </svg>
                  </span>
                  <p>{wine.country}</p>
                  <span>  
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.109593 9.3984L4.78088 4.99966L0.109593 0.601601C-0.0249066 0.474959 -0.0371928 0.256777 0.0817881 0.11637C0.200122 -0.0261023 0.403812 -0.0398678 0.537665 0.0867742L5.48313 4.74224C5.62151 4.87301 5.62151 5.12699 5.48313 5.25707L0.537665 9.91323C0.403812 10.0399 0.200122 10.0261 0.0817881 9.88363C0.026824 9.81824 0.000311852 9.73703 0.000311852 9.65581C0.000311852 9.56083 0.0371704 9.46654 0.109593 9.3984Z" fill="#888888"/>
                    </svg>
                  </span>
                  <p className={"current"}>{wine.region}</p>
                </div>
                <h3 className={"title"}>{wine.name}</h3>
              <div className={"main-infos"}>
                <img src={wine.flag} alt={"bandeira de " + `${wine.country}`}></img>
                <p className={"country"}>{wine.country}</p>
                <p className={"main"}>{wine.type}</p>
                <p className={"main"}>{wine.classification}</p>
                <p>{wine.volume}</p>
                <div className="stars">
                  {stars}
                </div>
                <p className={"main"}>({wine.avaliations})</p>
              </div>
              </div>
              <div className={"description"}>
                <h3 className={"title description-title"}>descrição</h3>
                <h3 className={"title sommelier"}>Comentário do sommelier</h3>
                <p className={"wine-description"}>{wine.sommelierComment}</p>
              </div>
              <AddToCart>
                <div className="counter">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="24" height="24" rx="12" stroke="white" strokeOpacity="0.1"/>
                  <path opacity="0.4" d="M21.4805 25.6152V23.6621H26.5V25.6152H21.4805Z" fill="white"/>
                  </svg>
                  <p>1</p>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="12" width="24" height="24" rx="12" stroke="white" strokeOpacity="0.4"/>
                  <path d="M23.1113 24.8184H19.2246V23.0801H23.1113V19.0957H24.8691V23.0801H28.7656V24.8184H24.8691V28.7832H23.1113V24.8184Z" fill="white"/>
                  </svg>
                </div>
                <div className="text">
                  Adicionar
                </div>
              </AddToCart>
            </div>
          </div>
        </div>
        </ProductTag>
        <PriceTag>
          <div className={"left"}>
            <div className="discount">
              <p className={"original-price"}>{formatMoney(wine.price)}</p>
              <div className="no-height">
                <p className={"discount-value"}>{wine.discount}% off</p>
              </div>
            </div>
            <div className="partner">
              <div className="main-value">
                <span className={"currency"}>R$</span>
                <span className={"price"}>{(wine.priceMember).toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
            <p className={"no-partner"}>preço não sócio {formatMoney(wine.priceNonMember)}</p>
          </div>
          <div className={"right"}>
            <AddToCart>Adicionar</AddToCart>
          </div>
        </PriceTag>
      </>
  )
}

export default Product