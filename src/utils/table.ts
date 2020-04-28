import { cloneDeep } from "lodash";

import {
  TableState,
  InitializeAction,
  ToggleRowAction,
  FetchOrdersSuccessAction,
} from "../ts/interfaces";

import { updateObject } from "./functions";

function initialize(state: TableState, action: InitializeAction) {
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

function setOrderItemSuccess(state: TableState, action: any) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.id === action.id
  );
  if (instance) {
    const { orderId, items } = action.payload;
    const index = instance.rows.findIndex((order: any) => order.id === orderId);
    instance.rows[index].items = items.map((item: any) => {
      const { id, name, price, qty, sum } = item;
      return {
        id,
        orderId,
        arr: [
          { id: 1, text: name },
          { id: 2, text: qty },
          { id: 3, text: price },
          { id: 4, text: sum },
        ],
      };
    });
  }
  return updateObject(state, newState);
}

export { initialize, toggle, setOrdersSuccess, setOrderItemSuccess };
