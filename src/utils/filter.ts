import { cloneDeep } from "lodash";

import { updateObject } from "@utils/functions";
import {
  FilterState,
  InitializeFilterAction,
  ChangeFilterAction,
} from "@ts/interfaces";

function initialize(state: FilterState, action: InitializeFilterAction) {
  const { instanceId } = action;
  const newState = cloneDeep(state);
  newState.instances.push({ id: instanceId, value: "", errMessage: "" });
  return updateObject(state, newState);
}

function change(state: FilterState, action: ChangeFilterAction) {
  const { instanceId, value } = action;
  const newState = cloneDeep(state);
  const filter = newState.instances.find(
    (instance) => instance.id === instanceId
  );
  if (filter) filter.value = value;
  return updateObject(state, newState);
}

export { initialize, change };
