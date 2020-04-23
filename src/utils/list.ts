import { clone } from "lodash";

import { updateObject } from "./functions";
import {
  ListState,
  FetchOrdersSuccessAction,
  FetchOrderItemSuccessAction,
} from "../ts/interfaces";

function setOrdersSuccess(state: ListState, action: FetchOrdersSuccessAction) {
  const newState = clone(state);
  newState.orders = action.payload;
  newState.isFetchedOrders = true;
  return updateObject(state, newState);
}

function setOrderItemSuccess(
  state: ListState,
  action: FetchOrderItemSuccessAction
) {
  const newState = clone(state);
  const notFetched = newState.orderItems.length
    ? newState.orderItems.find(
        (items) => items.orderId !== action.payload.orderId
      )
    : true;
  if (notFetched) {
    newState.orderItems = [...newState.orderItems, action.payload];
  }
  return updateObject(state, newState);
}

export { setOrdersSuccess, setOrderItemSuccess };
