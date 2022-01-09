import rootSaga from './sagas'
import { InitialState } from './types'
export * from './reducer';
export * from './types';

export { rootSaga };
  
export const initialState: InitialState = {
  selectedProduct: null,
  quantity: 0,
  productsList: [],
  filter: null,
}