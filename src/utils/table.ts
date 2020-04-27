import { clone } from "lodash";

import { updateObject } from "./functions";
import {
  FetchOrdersSuccessAction,
  FetchOrderItemSuccessAction,
} from "../ts/interfaces";

function setOrdersSuccess(state: any, action: FetchOrdersSuccessAction) {
  const newState = clone(state);
  newState.orders = action.payload.map((order) => {
    const { id, docDate, docNum, description } = order;
    return {
      id,
      arr: [
        { id: 1, text: docNum },
        { id: 2, text: docDate },
        { id: 3, text: description },
      ],
    };
  });
  return updateObject(state, newState);
}

function setOrderItemSuccess(state: any, action: FetchOrderItemSuccessAction) {
  const newState = clone(state);
  const index = newState.orders.length
    ? newState.orders.findIndex(
        (order: any) => order.id === action.payload.orderId
      )
    : true;
  if (index) {
    newState.orders[index].items = action.payload.items.map((item: any) => {
      const { name, price, qty, sum } = item;
      return {
        orderId: action.payload.orderId,
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

export { setOrdersSuccess, setOrderItemSuccess };
