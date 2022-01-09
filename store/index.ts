import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { InitialState as AppState } from './app';
import { ActionTypes as appActionTypes } from './app'
import { InitialState as CartState } from './cart';
import { InitialState as ProductsState } from './products';
import { rootReducer, rootSaga } from './roots'
export interface ApplicationState {
  app: AppState;
  cart: CartState;
  products: ProductsState
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })

export const Actions = {
  ...appActionTypes,
}