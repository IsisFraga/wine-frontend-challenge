import { combineReducers } from 'redux';
import { combineSagas } from 'redux-saga-watch-actions'
import { reducer as app } from './app'
import { reducer as cart } from './cart'
import { reducer as products } from './products'

export const rootReducer = combineReducers({
  app,
  cart,
  products
})

export const rootSaga = combineSagas(appSaga, cartSaga, productsSaga);
