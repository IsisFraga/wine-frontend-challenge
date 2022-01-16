import rootSaga from './sagas'

export * from './reducer';
export * from './types';

export { rootSaga };
export const initialState = {
  productsList: [],
}
