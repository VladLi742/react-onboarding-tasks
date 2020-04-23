import { ListState, Order } from "../../ts/interfaces";
import { InferValueTypes } from "../../ts/customTypes";

import { updateObject } from "../../utils/functions";
import { fetchOrderSuccess } from "../../utils/list";

export const FETCH_ORDERS = "orders/list/FETCH_ORDERS";
export const FETCH_ORDERS_SUCCESS = "orders/list/FETCH_ORDERS:SUCCESS";
export const FETCH_ORDERS_FAIL = "orders/list/FETCH_ORDERS:FAIL";

export const fetchOrders = () =>
  ({
    type: FETCH_ORDERS,
  } as const);

export const fetchOrdersSuccess = (payload: Order[]) =>
  ({
    type: FETCH_ORDERS_SUCCESS,
    payload,
  } as const);

export const fetchOrdersFail = (error: Error) =>
  ({
    type: FETCH_ORDERS_FAIL,
    error,
  } as const);

const initialState: ListState = {
  orders: [],
  isFetchedOrders: false,
};

const actions = { fetchOrders, fetchOrdersSuccess, fetchOrdersFail };

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return updateObject(state, action);
    case FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);
    case FETCH_ORDERS_FAIL:
      return updateObject(state, action);
    default:
      return state;
  }
};
