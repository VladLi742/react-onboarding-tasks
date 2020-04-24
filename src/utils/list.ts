import { clone } from "lodash";

import { updateObject } from "./functions";
import {
  ListState,
  FetchOrdersSuccessAction,
  FetchOrderItemSuccessAction,
  Items,
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
  const notFetched = newState.itemsArr.length
    ? newState.itemsArr.find(
        (items: Items) => items.orderId !== action.payload.orderId
      )
    : true;
  if (notFetched) {
    newState.itemsArr = [...newState.itemsArr, action.payload];
  }
  return updateObject(state, newState);
}

export { setOrdersSuccess, setOrderItemSuccess };
