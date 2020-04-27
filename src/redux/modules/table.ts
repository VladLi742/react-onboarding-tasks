import { Order, OrderItems } from "../../ts/interfaces";
import { InferValueTypes } from "../../ts/customTypes";

import { setOrdersSuccess, setOrderItemSuccess } from "../../utils/table";

export const FETCH_ORDERS = "orders/table/FETCH_ORDERS";
export const FETCH_ORDERS_SUCCESS = "orders/table/FETCH_ORDERS:SUCCESS";
export const FETCH_ORDERS_FAIL = "orders/table/FETCH_ORDERS:FAIL";
export const FETCH_ORDER_ITEM = "orders/table/FETCH_ORDER_ITEM";
export const FETCH_ORDER_ITEM_SUCCESS = "orders/table/FETCH_ORDER_ITEM:SUCCESS";
export const FETCH_ORDER_ITEM_FAIL = "orders/table/FETCH_ORDER_ITEM:FAIL";

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

export const fetchOrderItem = (id: number) =>
  ({
    type: FETCH_ORDER_ITEM,
    id,
  } as const);

export const fetchOrderItemSuccess = (payload: OrderItems) =>
  ({
    type: FETCH_ORDER_ITEM_SUCCESS,
    payload,
  } as const);

export const fetchOrderItemFail = (error: Error) =>
  ({
    type: FETCH_ORDER_ITEM_FAIL,
    error,
  } as const);

const initialState: any = {
  orders: [],
};

const actions = {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrderItem,
  fetchOrderItemSuccess,
  fetchOrderItemFail,
};

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return state;
    case FETCH_ORDERS_SUCCESS:
      return setOrdersSuccess(state, action);
    case FETCH_ORDER_ITEM:
      return state;
    case FETCH_ORDER_ITEM_SUCCESS:
      return setOrderItemSuccess(state, action);
    default:
      return state;
  }
};
