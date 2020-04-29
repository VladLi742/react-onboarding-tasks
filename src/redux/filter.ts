import { FilterState } from "@ts/interfaces";
import { InferValueTypes } from "@ts/customTypes";

import { initialize, change, showError } from "@utils/filter";

export const INITIALIZE_FILTER = "orders/filter/INITIALIZE_FILTER";
export const CHANGE_FILTER = "orders/filter/CHANGE_FILTER";
export const SHOW_ERROR_FILTER = "orders/filter/SHOW_ERROR_FILTER";

export const initializeFilter = (id: string) =>
  ({
    type: INITIALIZE_FILTER,
    id,
  } as const);

export const changeFilter = (id: string, value: string) =>
  ({
    type: CHANGE_FILTER,
    id,
    value,
  } as const);

export const showErrorFilter = (id: string, message: string) =>
  ({
    type: SHOW_ERROR_FILTER,
    id,
    message,
  } as const);

const initialState: FilterState = {
  instances: [],
};

const actions = {
  initializeFilter,
  changeFilter,
  showErrorFilter,
};

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INITIALIZE_FILTER:
      return initialize(state, action);
    case CHANGE_FILTER:
      return change(state, action);
    case SHOW_ERROR_FILTER:
      return showError(state, action);
    default:
      return state;
  }
};
