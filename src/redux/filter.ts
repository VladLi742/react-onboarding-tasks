import { FilterState } from "@ts/interfaces";
import { InferValueTypes } from "@ts/customTypes";

import { initialize, change } from "@utils/filter";

export const INITIALIZE_FILTER = "orders/filter/INITIALIZE_FILTER";
export const CHANGE_FILTER = "orders/filter/CHANGE_FILTER";

export const initializeFilter = (instanceId: string) =>
  ({ type: INITIALIZE_FILTER, instanceId } as const);

export const changeFilter = (instanceId: string, value: string) =>
  ({ type: CHANGE_FILTER, instanceId, value } as const);

const initialState: FilterState = { instances: [] };

const actions = { initializeFilter, changeFilter };

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE_FILTER:
      return initialize(state, action);
    case CHANGE_FILTER:
      return change(state, action);
    default:
      return state;
  }
};
