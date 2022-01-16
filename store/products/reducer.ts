import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index';
import { ActionTypes } from './types';

interface Actions {
  payload: any;
  type: ActionTypes | unknown; // hydrate == ?
}
export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
      
    case ActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      }

    case ActionTypes.DESELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: null
      }

    case ActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload
      }

    case ActionTypes.SET_PRICE_FILTER:
      return {
        ...state,
        priceFilters: action.payload
      }
    
    default:
      return state
  }
}
