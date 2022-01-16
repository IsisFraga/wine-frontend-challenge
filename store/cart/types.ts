import { ProductsList } from 'types';

export interface InitialState {
  productsList: Product[];
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  priceNonMember: number;
  country: string;
  region: string;
  count: number;
}

export enum ActionTypes {
  INCREASE_COUNT = "cart/INCREASE_COUNT",
  DECREASE_COUNT = "cart/DECREASE_COUNT",
  REMOVE_PRODUCT = "cart/REMOVE_PRODUCT",
  SET_PRODUCT_LIST = "cart/SET_PRODUCT_LIST",
  CLICK_PRODUCT = "cart/CLICK_PRODUCT",
  LOAD_CART = 'cart/LOAD_CART'
}