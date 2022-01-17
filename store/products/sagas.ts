import { all, select, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'

import { ActionTypes, InitialState } from './types';
import { FilterCodes } from 'types';

function* firstLoadTask(action) {
  const apiCall = yield call(fetch, `https://wine-back-test.herokuapp.com/products?page=${action.payload.page || '1'}&limit=10${action.payload.queryString || ''}`, { method: 'GET' });
  const data = yield apiCall.json()
  yield put({ type: ActionTypes.SET_PRODUCTS, payload: data.items })
  yield put({type: ActionTypes.SET_CURRENT_PAGE, payload: parseInt(action.payload.page)})
  yield put({type: ActionTypes.SET_TOTAL_PAGES, payload: data.totalPages})

}

export const getProductsState = ({products}) => products

export function* priceFilterTasks({payload: {id, page}}) {
  const state = yield select(getProductsState)
  const newArr: { price: string; id: string; selected: boolean; }[] = [...state.priceFilters]
  newArr.map(value => {
    return value.selected = false;
  })
  const newElem = newArr.find((element) => element.id == id)
  const itemToChange = newArr.indexOf(newElem)
  newArr[itemToChange].selected = true;
  const apiCall = yield call(fetch, `https://wine-back-test.herokuapp.com/products?page=${page}&limit=10&filter=${newElem.queryString}`, { method: 'GET' });
  const data = yield apiCall.json()
  yield put({type: ActionTypes.SET_PRICE_FILTER, payload: newArr})
  yield put({type: ActionTypes.SET_CURRENT_PAGE, payload: parseInt(page)})
  yield put({type: ActionTypes.SET_TOTAL_PAGES, payload: data.totalPages})
  yield put({type: ActionTypes.SET_PRODUCTS, payload: data.items})
}

function* searchProductTask({ payload: { name, page } }) {
  const apiCall = yield call(fetch, `https://wine-back-test.herokuapp.com/products?page=${page}&limit=10&name=${name}`, { method: 'GET' });
  const data = yield apiCall.json()
  yield put({type: ActionTypes.SET_CURRENT_PAGE, payload: parseInt(page)})
  yield put({type: ActionTypes.SET_TOTAL_PAGES, payload: data.totalPages})
  yield put({type: ActionTypes.SET_PRODUCTS, payload: data.items})
}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.LOAD_PRODUCTS, firstLoadTask),
    takeEvery(ActionTypes.CHANGE_PRICE_FILTER, priceFilterTasks),
    takeEvery(ActionTypes.SEARCH_PRODUCTS, searchProductTask),
  ]);
}

