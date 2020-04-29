import { cloneDeep } from "lodash";

import {
  TableState,
  InitializeTableAction,
  ToggleRowAction,
  FetchOrdersSuccessAction,
  FetchOrderItemSuccessAction,
} from "@ts/interfaces";

import { updateObject } from "./functions";

function initialize(state: TableState, action: InitializeTableAction) {
  const newState = cloneDeep(state);
  newState.instances.push({ id: action.id, rows: [] });
  return updateObject(state, newState);
}

function toggle(state: TableState, action: ToggleRowAction) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.id === action.id
  );
  if (instance) {
    const row = instance.rows.find((row) => row.id === action.rowId);
    if (row) row.isOpen = !row.isOpen;
  }
  return updateObject(state, newState);
}

function setOrdersSuccess(state: TableState, action: FetchOrdersSuccessAction) {
  const newState = cloneDeep(state);
  const rows = action.payload.map((order) => {
    const { id, docDate, docNum, description } = order;
    return {
      id,
      arr: [
        { id: 1, text: docNum.toString() },
        { id: 2, text: docDate.toString() },
        { id: 3, text: description.toString() },
      ],
      isOpen: false,
    };
  });
  const instance = newState.instances.find(
    (instance) => instance.id === action.id
  );
  if (instance) instance.rows = rows;
  return updateObject(state, newState);
}

function setOrderItemSuccess(
  state: TableState,
  action: FetchOrderItemSuccessAction
) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.id === action.id
  );
  if (instance) {
    const { orderId, items } = action.payload;
    const index = instance.rows.findIndex((order) => order.id === orderId);
    instance.rows[index].items = items.map((item) => {
      const { id, name, price, qty, sum } = item;
      return {
        id,
        orderId,
        arr: [
          { id: 1, text: name },
          { id: 2, text: qty.toString() },
          { id: 3, text: price.toString() },
          { id: 4, text: sum.toString() },
        ],
      };
    });
  }
  return updateObject(state, newState);
}

export { initialize, toggle, setOrdersSuccess, setOrderItemSuccess };
