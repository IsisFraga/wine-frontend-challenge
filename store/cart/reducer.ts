import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index';
export function reducer(state = initialState, action: unknown) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case 'cart/ADD':
      return {
        ...state,
      }
    default:
      return state
  }
}
