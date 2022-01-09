import rootSaga from './sagas'

export * from './reducer';
export * from './types';

export { rootSaga };
export const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  completed: true,
}
