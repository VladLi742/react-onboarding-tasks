import { cloneDeep } from "lodash";

import {
  TableState,
  FetchOrdersAction,
  FetchOrdersSuccessAction,
  FetchOrderItemSuccessAction,
} from "@ts/interfaces";

import { updateObject } from "@utils/functions";

export function fetchOrders(state: TableState, action: FetchOrdersAction) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.instanceId === action.instanceId
  );
  if (instance) instance.isLoading = true;
  return updateObject(state, newState);
}

export function setOrdersSuccess(
  state: TableState,
  action: FetchOrdersSuccessAction
) {
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
    (instance) => instance.instanceId === action.instanceId
  );
  if (instance) {
    instance.rows = rows;
    instance.isLoading = false;
  }
  return updateObject(state, newState);
}

export function setOrderItemSuccess(
  state: TableState,
  action: FetchOrderItemSuccessAction
) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.instanceId === action.instanceId
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
    instance.isLoading = false;
  }
  return updateObject(state, newState);
}
