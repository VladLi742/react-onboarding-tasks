import { clone } from "lodash";

import { updateObject } from "./functions";
import { ListState, FetchOrderSuccessAction } from "../ts/interfaces";

function fetchOrderSuccess(state: ListState, action: FetchOrderSuccessAction) {
  const newState = clone(state);
  newState.orders = action.payload;
  newState.isFetchedOrders = true;
  return updateObject(state, newState);
}

export { fetchOrderSuccess };
