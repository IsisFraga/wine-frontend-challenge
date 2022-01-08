export * from './reducer';
export * from './sagas';
export * from './types';

export const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
}
