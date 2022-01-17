import { HYDRATE } from 'next-redux-wrapper'
import { initialState } from './index'
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
      
    case ActionTypes.START_LOADING:
      return {
        ...state,
        loading: true
      }
      
    case ActionTypes.FINISH_LOADING:
      return {
        ...state,
        loading: false
      }
      
    case ActionTypes.APPLICATION_STATUS:
      return {
        ...state,
        error: action.payload
      }
    
    case ActionTypes.TOGGLE_MODALCART:
      return {
        ...state,
        modalCart: !state.modalCart
      }
    
    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar
      }

    case ActionTypes.TOGGLE_FILTER_SIDEBAR:
      return {
        ...state,
        filterSidebar: !state.filterSidebar
      }
    
    default:
      return state
  }
}
