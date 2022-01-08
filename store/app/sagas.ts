import { watchActions } from 'redux-saga/'
import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess, tickClock } from './actions'

import {
  add,
} from './actions'

function* addSaga() {
  yield console.log('be happy')
}

const rootSaga = watchActions({
  ['app/ADD']: addSaga,
})


export default rootSaga