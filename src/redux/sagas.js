import { select, put, takeLatest, all } from "redux-saga/effects";

import {
  FETCH_ORDERS,
  fetchOrdersSuccess,
  fetchOrderItemFail,
  FETCH_ORDER_ITEM,
  fetchOrderItemSuccess,
  fetchOrdersFail,
} from "./tableOrders";

function* fetchOrders(action) {
  const { id } = action;
  const filterInstance = yield select((state) =>
    state.filter.instances.find((instance) => instance.id === "filter-orders")
  );
  const filter = filterInstance ? `?filter=${filterInstance.value}` : "";
  const url = `${API_HOST}order${filter}`;
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    yield put(fetchOrdersSuccess(id, data));
  } catch (error) {
    yield put(fetchOrdersFail(error));
  }
}

function* fetchOrderItem(action) {
  const { id, orderId } = action;
  const url = `${API_HOST}order/${orderId}`;
  try {
    const response = yield fetch(url);
    const data = { orderId, items: yield response.json() };
    yield put(fetchOrderItemSuccess(id, data));
  } catch (error) {
    yield put(fetchOrderItemFail(error));
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
