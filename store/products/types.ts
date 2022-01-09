import { Wine, ProductsList, FiltersTypes } from 'types';

export interface InitialState {
  selectedProduct: Wine | null;
  quantity: number;
  productsList: ProductsList | [];
  filter: Filters | null
}


export interface Filters {
  type: FiltersTypes;
  string?: string;
  page: number;
  limit: number;
  minPrice: number;
  maxPrice: number;
}

export enum ActionTypes {
  LOAD_PRODUCTS = "products/LOAD_PRODUCTS",
  SELECT_PRODUCT = "products/SELECT_PRODUCT",
  DESELECT_PRODUCT = "products/DESELECT_PRODUCT",
  SET_FILTER = "products/SET_FILTER",
  SET_PRODUCTS = "products/SET_PRODUCTS",
}