import { action } from 'typesafe-actions';
import { ActionTypes } from './types';

export const loadProducts = () => action(ActionTypes.LOAD_PRODUCTS);
export const setPriceFilter = (id) => action(ActionTypes.SET_PRICE_FILTER, {payload: id});