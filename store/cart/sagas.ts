import { all, call, delay, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects'
import { action } from 'typesafe-actions';
import { ActionTypes, InitialState, Product } from './types';
export const getCartState = ({cart}) => cart


function* getFromStorage () {
  const previousCart = JSON.parse(localStorage.getItem('currentCart') || "[]")
  const newArr = [...previousCart]
  let check
  if (newArr.length > 1) {
    check = newArr.reduce((a,b) => (a.count * a.priceNonMember) + (b.count * b.priceNonMember))
  } else if (newArr.length === 1 ) {
    check = newArr[0].count * newArr[0].priceNonMember
  } else {
    check = 0
  }
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: previousCart})
  yield put({type: ActionTypes.SET_CHECK, payload: check})
}

function* addProductTask(action) {
  const {productsList} = yield select(getCartState)
  const newArr = [...productsList];
  if (newArr.some(product => product.id === action.payload.product.id)) {
    return false;
  }
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
    count: action.payload.quantity
  }))(action.payload.product)
  newArr.push(newObj)

  let check
  if (newArr.length > 1) {
    check = newArr.reduce((a,b) => (a.count * a.priceNonMember) + (b.count * b.priceNonMember))
  } else if (newArr.length === 1 ) {
    check = newArr[0].count * newArr[0].priceNonMember
  } else {
    check = 0
  }

  localStorage.setItem('currentCart', JSON.stringify(newArr))
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: newArr})
  yield put({type: ActionTypes.SET_CHECK, payload: check})
}

function* increaseCount(action) {
  const {productsList} = yield select(getCartState)
  const newArr = [...productsList];
  newArr.map(element => {
    if (element.id === action.payload) {
      element.count = element.count + 1
    }
  })
  let check
  if (newArr.length > 1) {
    check = newArr.reduce((a,b) => (a.count * a.priceNonMember) + (b.count * b.priceNonMember))
  } else if (newArr.length === 1 ) {
    check = newArr[0].count * newArr[0].priceNonMember
  } else {
    check = 0
  }
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: newArr})
  yield put({type: ActionTypes.SET_CHECK, payload: check})

}

function* decreaseCount(action) {
  const {productsList} = yield select(getCartState)
  const newArr = [...productsList];
  newArr.map(element => {
    if (element.id === action.payload &&
        element.count > 0
      ) {
      element.count = element.count - 1
    }
  })
  let check
  if (newArr.length > 1) {
    check = newArr.reduce((a,b) => (a.count * a.priceNonMember) + (b.count * b.priceNonMember))
  } else if (newArr.length === 1 ) {
    check = newArr[0].count * newArr[0].priceNonMember
  } else {
    check = 0
  }
  localStorage.setItem('currentCart', JSON.stringify(newArr))
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: newArr})
  yield put({type: ActionTypes.SET_CHECK, payload: check})
}

function* removeProduct(action) {
  const {productsList} = yield select(getCartState)
  const newArr = [...productsList].filter(element => element.id !== action.payload);
  let check
  if (newArr.length > 1) {
    check = newArr.reduce((a,b) => (a.count * a.priceNonMember) + (b.count * b.priceNonMember))
  } else if (newArr.length === 1 ) {
    check = newArr[0].count * newArr[0].priceNonMember
  } else {
    check = 0
  }
  localStorage.setItem('currentCart', JSON.stringify(newArr))
  yield put({type: ActionTypes.SET_PRODUCT_LIST, payload: newArr})
  yield put({type: ActionTypes.SET_CHECK, payload: check})
}


export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.CLICK_PRODUCT, addProductTask),
    takeEvery(ActionTypes.LOAD_CART, getFromStorage),
    takeEvery(ActionTypes.INCREASE_COUNT, increaseCount),
    takeEvery(ActionTypes.DECREASE_COUNT, decreaseCount),
    takeEvery(ActionTypes.REMOVE_PRODUCT, removeProduct),
  ]);
}