import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_ORDER_ITEM,
  FETCH_ORDER_ITEM_SUCCESS,
  FETCH_ORDER_ITEM_FAIL,
} from "./modules/list";

function* fetchOrders() {
  const url = `${API_HOST}order`;
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put({ type: FETCH_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_ORDERS_FAIL, error });
  }
}

function* fetchOrderItem(action) {
  const url = `${API_HOST}order/${action.id}`;
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    data.orderId = action.id;
    yield put({ type: FETCH_ORDER_ITEM_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_ORDER_ITEM_FAIL, error });
  }
}

function* watchFetchOrders() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
}

function* watchFetchOrderItem() {
  yield takeLatest(FETCH_ORDER_ITEM, fetchOrderItem);
}

export default function* rootSaga() {
  yield all([watchFetchOrders(), watchFetchOrderItem()]);
}
