import { ListState, Order, Item, Items } from "../../ts/interfaces";
import { InferValueTypes } from "../../ts/customTypes";

import { updateObject } from "../../utils/functions";
import { setOrdersSuccess, setOrderItemSuccess } from "../../utils/list";

export const FETCH_ORDERS = "orders/list/FETCH_ORDERS";
export const FETCH_ORDERS_SUCCESS = "orders/list/FETCH_ORDERS:SUCCESS";
export const FETCH_ORDERS_FAIL = "orders/list/FETCH_ORDERS:FAIL";
export const FETCH_ORDER_ITEM = "orders/list/FETCH_ORDER_ITEM";
export const FETCH_ORDER_ITEM_SUCCESS = "orders/list/FETCH_ORDER_ITEM:SUCCESS";
export const FETCH_ORDER_ITEM_FAIL = "orders/list/FETCH_ORDER_ITEM:FAIL";

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

export const fetchOrderItemSuccess = (payload: Items) =>
  ({
    type: FETCH_ORDER_ITEM_SUCCESS,
    payload,
  } as const);

export const fetchOrderItemFail = (error: Error) =>
  ({
    type: FETCH_ORDER_ITEM_FAIL,
    error,
  } as const);

const initialState: ListState = {
  orders: [],
  itemsArr: [],
  isFetchedOrders: false,
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
      return updateObject(state, action);
    case FETCH_ORDERS_SUCCESS:
      return setOrdersSuccess(state, action);
    case FETCH_ORDERS_FAIL:
      return updateObject(state, action);
    case FETCH_ORDER_ITEM:
      return updateObject(state, action);
    case FETCH_ORDER_ITEM_SUCCESS:
      return setOrderItemSuccess(state, action);
    case FETCH_ORDER_ITEM_FAIL:
      return updateObject(state, action);
    default:
      return state;
  }
};
