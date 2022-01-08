import { Wine, ProductsList, FiltersTypes } from 'types';

export interface InitialState {
  selectedProduct: Wine | null;
  quantity: number;
  productsList: ProductsList | [];
  filter: Filters
}


export interface Filters {
  type: FiltersTypes;
  string?: string;
  page: number;
  limit: number;
  minPrice: number;
  maxPrice: number;
}