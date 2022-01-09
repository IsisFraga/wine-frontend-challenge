import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'

import {
  add,
} from './actions'

function* addSaga() {
  yield console.log('be happy')
}

export default function* rootSaga() {
  return all([
    takeEvery('cart/ADD', addSaga),
  ]);
}