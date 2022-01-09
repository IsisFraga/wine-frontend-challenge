import { action } from 'typesafe-actions';
import { ActionTypes } from './types';

export const loadProducts = () => action(ActionTypes.LOAD_PRODUCTS);