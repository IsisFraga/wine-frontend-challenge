import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'

import { ActionTypes } from './types';

function* getProducts() {
  yield console.log('be happy')
}

export default function* rootSaga() {
  return all([
    takeEvery(ActionTypes.LOAD_PRODUCTS, getProducts),
  ]);
}

