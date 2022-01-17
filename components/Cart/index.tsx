import React, { useState } from "react";
import { formatMoney } from "../../utils/money"

import {
  ShadowMenuMobile,
  CartTag,
  EmptyCart,
  FullCart,
  FinishOrder,
  WineboxFooter
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "store";
import Product from "components/Product";




const Cart: React.FC = () => {
  const [openCart, setCart] = useState(true);
  const dispatch = useDispatch();
  const { app, product, cart } = useSelector((state) => state);

  return (
    <>
      <ShadowMenuMobile
        onClick={() => dispatch({ type: Actions.TOGGLE_MODALCART })}
        style={{ display: app.modalCart ? " " : "none" }}
      />
      <CartTag
        style={{
          transform: app.modalCart ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className={"header"}>
          <button
            className={"close"}
            onClick={() => dispatch({ type: Actions.TOGGLE_MODALCART })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 7.5H.576M7.945 1L.575 7.5l7.37 6.5" />
              </g>
            </svg>
          </button>
          <p>WineBox ({cart.productsList.length})</p>
        </div>
        <div className={"cart-container"}>
          {cart.productsList.length == 0 ? (
            <EmptyCart>
              <div className="sad-face">&#61;&#40;</div>
              <strong>Você ainda não escolheu seus produtos</strong>
            </EmptyCart>
          ) : (
            <FullCart>
              {cart.productsList.map(product => {
                return (
                  <div key={product.id} className={"added-product"}>
                    <img src={product.image} alt={"foto da garrafa do vinho " + `${product.name}`} />
                    <div className={"product-infos"}>
                      <div className={"product-header"}>
                        <div className={"product-text"}>
                          <h4>{product.name}</h4>
                          <p>{product.country}</p>
                        </div>
                        <button className={"remove-item"} onClick={() => dispatch({
                          type: Actions.REMOVE_PRODUCT, payload: product.id
                        })}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><path d="M0 0h40v40H0z"></path><path fill="#888" d="M21.414 20l7.293-7.293a.999.999 0 1 0-1.414-1.414L20 18.586l-7.293-7.293a.999.999 0 1 0-1.414 1.414L18.586 20l-7.293 7.293a.999.999 0 1 0 1.414 1.414L20 21.414l7.293 7.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21.414 20z"></path></g></svg>
                        </button>
                      </div>
                      <div className={"product-footer"}>
                        <div className="input-quantity">
                          <button title="Diminuir quantidade de itens" onClick={() => dispatch({
                            type: Actions.DECREASE_COUNT, payload: product.id
                          })}>-</button>
                          <p className={"result"}>{product.count}</p>
                          <button title="Aumentar quantidade de itens" onClick={() => dispatch({
                            type: Actions.INCREASE_COUNT, payload: product.id
                          })}>+</button>
                        </div>
                        <div className="price">
                          <p className={"currency"}>R$</p>
                          <p className={"value"}>{formatMoney(product.priceNonMember * product.count).split("R$")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <WineboxFooter>
                <div className={"subtotal"}>
                  <p>Total</p>
                  <div className="total">
                    <p className={"currency"}>R$</p>
                    <p className="total-value">
                      {cart.check}
                    </p>
                  </div>
                </div>
                <div className={"cashback"}>
                  <p className={"value"}>Ganhe até <span>R$ {formatMoney(0.036* cart.check)}</span> de cashback nesta compra</p>
                  <p>Uso do cashback exclusivo no app Wine</p>
                </div>
                <FinishOrder>Finalizar pedido</FinishOrder>
              </WineboxFooter>
            </FullCart>
          )}
        </div>
      </CartTag>
    </>
  );
};
export default Cart;
