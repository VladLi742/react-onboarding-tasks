import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
} from "./modules/list";

function* fetchOrders() {
  const url = "http://127.0.0.1:8080/api/order";
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put({ type: FETCH_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_ORDERS_FAIL, error });
  }
}

function* watchFetchOrders() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
}

export default function* rootSaga() {
  yield all([watchFetchOrders()]);
}
