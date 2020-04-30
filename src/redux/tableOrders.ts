import { Order, OrderItems } from "@ts/interfaces";

// --- FETCH_ORDERS ---

export const FETCH_ORDERS = "orders/table/FETCH_ORDERS";
export const FETCH_ORDERS_SUCCESS = "orders/table/FETCH_ORDERS:SUCCESS";
export const FETCH_ORDERS_FAIL = "orders/table/FETCH_ORDERS:FAIL";

// --- FETCH_ORDER_ITEM ---
export const FETCH_ORDER_ITEM = "orders/table/FETCH_ORDER_ITEM";
export const FETCH_ORDER_ITEM_SUCCESS = "orders/table/FETCH_ORDER_ITEM:SUCCESS";
export const FETCH_ORDER_ITEM_FAIL = "orders/table/FETCH_ORDER_ITEM:FAIL";

// --- fetchOrders ---
export const fetchOrders = (instanceId: string) =>
  ({ type: FETCH_ORDERS, instanceId } as const);

export const fetchOrdersSuccess = (instanceId: string, payload: Order[]) =>
  ({ type: FETCH_ORDERS_SUCCESS, instanceId, payload } as const);

export const fetchOrdersFail = (error: Error) =>
  ({ type: FETCH_ORDERS_FAIL, error } as const);

// --- fetchOrderItem ---
export const fetchOrderItem = (instanceId: string, orderId: number) =>
  ({ type: FETCH_ORDER_ITEM, instanceId, orderId } as const);

export const fetchOrderItemSuccess = (
  instanceId: string,
  payload: OrderItems
) => ({ type: FETCH_ORDER_ITEM_SUCCESS, instanceId, payload } as const);

export const fetchOrderItemFail = (error: Error) =>
  ({ type: FETCH_ORDER_ITEM_FAIL, error } as const);

export const tableOrdersActions = {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrderItem,
  fetchOrderItemSuccess,
  fetchOrderItemFail,
};
