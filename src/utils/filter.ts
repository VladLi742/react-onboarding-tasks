import { cloneDeep } from "lodash";

import { updateObject } from "@utils/functions";
import {
  FilterState,
  InitializeFilterAction,
  ChangeFilterAction,
  ShowErrorFilterAction,
} from "@ts/interfaces";

function initialize(state: FilterState, action: InitializeFilterAction) {
  const { id } = action;
  const newState = cloneDeep(state);
  newState.instances.push({ id, value: "", errMessage: "" });
  return updateObject(state, newState);
}

function change(state: FilterState, action: ChangeFilterAction) {
  const { id, value } = action;
  const newState = cloneDeep(state);
  const filter = newState.instances.find((instance) => instance.id === id);
  if (filter) {
    filter.value = value;
    filter.errMessage = "";
  }
  return updateObject(state, newState);
}

function showError(state: FilterState, action: ShowErrorFilterAction) {
  const { id, message } = action;
  const newState = cloneDeep(state);
  const filter = newState.instances.find((instance) => instance.id === id);
  if (filter) {
    if (filter.value) {
      filter.errMessage = message;
    } else {
      filter.value = "";
      filter.errMessage = "";
    }
  }
  return updateObject(state, newState);
}

export { initialize, change, showError };
