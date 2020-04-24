import { FilterState } from "../../ts/interfaces";
import { InferValueTypes } from "../../ts/customTypes";

import { change } from "../../utils/filter";

export const CHANGE_FILTER = "orders/filter/CHANGE_FILTER";

export const changeFilter = (value: string) =>
  ({
    type: CHANGE_FILTER,
    value,
  } as const);

const initialState: FilterState = {
  value: "",
};

const actions = {
  changeFilter,
};

type Action = ReturnType<InferValueTypes<typeof actions>>;

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return change(state, action);
    default:
      return state;
  }
};
