import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index';
import { ActionTypes } from './types'

interface Actions {
  payload: any;
  type: ActionTypes | unknown; // hydrate == ?
}


export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case 'cart/ADD':
      return {
        ...state,
      }
      
    case ActionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        productsList: action.payload
      }

    case ActionTypes.SET_CHECK:
      return {
        ...state,
        check: action.payload
      }

    default:
      return state
  }
}
