import { all, call, delay, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects'
import { action } from 'typesafe-actions';
import { ActionTypes, InitialState, Product } from './types';
export const getCartState = ({cart}) => cart


function* getFromStorage () {
  const previousCart = localStorage.getItem('currentCart')
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: JSON.parse(previousCart) || []})
}

function* addProductTask(action) {
  const {productsList} = yield select(getCartState)
  const newArr = [...productsList];
  const newObj:Product = (({
    id,
    image,
    name,
    priceNonMember,
    country,
    region,
  }) => ({
    id,
    image,
    name,
    priceNonMember,
    country,
    region,
    count: 1
  }))(action.payload)
  newArr.push(newObj)
  localStorage.setItem('currentCart', JSON.stringify(newArr))
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: newArr})
}


export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.CLICK_PRODUCT, addProductTask),
    takeEvery(ActionTypes.LOAD_CART, getFromStorage),
  ]);
}