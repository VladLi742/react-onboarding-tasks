import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_ITEM_SUCCESS,
  tableOrdersActions,
} from "@redux/tableOrders";

import { TableState } from "@ts/interfaces";
import { InferValueTypes } from "@ts/customTypes";

import { initialize, toggle } from "@utils/table";
import {
  fetchOrders,
  setOrdersSuccess,
  setOrderItemSuccess,
} from "@utils/tableOrders";

export const INITIALIZE_TABLE = "orders/table/INITIALIZE_TABLE";
export const TOGGLE_ROW = "orders/table/TOGGLE_ROW";

export const initializeTable = (instanceId: string) =>
  ({ type: INITIALIZE_TABLE, instanceId } as const);

export const toggleRow = (instanceId: string, rowId: number) =>
  ({ type: TOGGLE_ROW, instanceId, rowId } as const);

const actions = { initializeTable, toggleRow, ...tableOrdersActions };

type Action = ReturnType<InferValueTypes<typeof actions>>;

const initialState: TableState = { instances: [] };

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE_TABLE:
      return initialize(state, action);
    case TOGGLE_ROW:
      return toggle(state, action);
    case FETCH_ORDERS:
      return fetchOrders(state, action);
    case FETCH_ORDERS_SUCCESS:
      return setOrdersSuccess(state, action);
    case FETCH_ORDER_ITEM_SUCCESS:
      return setOrderItemSuccess(state, action);
    default:
      return state;
  }
};
