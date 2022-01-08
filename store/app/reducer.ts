import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

export function reducer(state: unknown, action: unknown) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case 'test':
      return {
        ...state,
      }
    default:
      return state
  }
}
