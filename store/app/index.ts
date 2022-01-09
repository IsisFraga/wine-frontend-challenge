export * from './reducer';
export * from './types';
import { InitialState } from './types';

export const initialState: InitialState = {
  loading: false,
  modalCart: false,
  sidebar: false,
  error: false,
}
