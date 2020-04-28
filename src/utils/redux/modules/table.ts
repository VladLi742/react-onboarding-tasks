import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDER_ITEM_SUCCESS,
  tableOrdersActions,
} from "../../../redux/modules/tableOrders";

import { TableState } from "../../../ts/interfaces";
import { InferValueTypes } from "../../../ts/customTypes";

import {
  initialize,
  toggle,
  setOrdersSuccess,
  setOrderItemSuccess,
} from "../../table";

export const TOGGLE_ROW = "orders/table/TOGGLE_ROW";

export const toggleRow = (id: string, rowId: number) =>
  ({
    type: TOGGLE_ROW,
    id,
    rowId,
  } as const);

const initialState: TableState = {
  instances: [],
};

const actions = {
  toggleRow,
  ...tableOrdersActions,
};

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_ROW:
      return toggle(state, action);
    case FETCH_ORDERS:
      return initialize(state, action);
    case FETCH_ORDERS_SUCCESS:
      return setOrdersSuccess(state, action);
    case FETCH_ORDER_ITEM_SUCCESS:
      return setOrderItemSuccess(state, action);
    default:
      return state;
  }
};
