import React, { useState } from "react";
import Image from "next/image";
import { formatMoney } from "../../utils/money"

import {
  ShadowMenuMobile,
  CartTag,
  EmptyCart,
  FullCart,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "store";




const Cart: React.FC = () => {
  const [openCart, setCart] = useState(true);
  const dispatch = useDispatch();
  const { app } = useSelector((state) => state);

  const isCartEmpty = false;

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
          <p>WineBox (0)</p>
        </div>
        <div className={"cart-container"}>
          {isCartEmpty ? (
            <EmptyCart>
              <div className="sad-face">&#61;&#40;</div>
              <strong>Você ainda não escolheu seus produtos</strong>
            </EmptyCart>
          ) : (
            <FullCart>
              <div className={"added-product"}>
                <img src="" alt="foto da garrafa do vinho" />
              </div>
            </FullCart>
          )}
        </div>
      </CartTag>
    </>
  );
};
export default Cart;
