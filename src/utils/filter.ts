import { cloneDeep } from "lodash";

import { updateObject } from "./functions";
import { FilterState, ChangeFilterAction } from "../ts/interfaces";

function change(state: FilterState, action: ChangeFilterAction) {
  const { id, value } = action;
  const newState = cloneDeep(state);
  if (newState.instances.length) {
    const filter = newState.instances.find((instance) => instance.id === id);
    if (filter) filter.value = value;
  } else {
    newState.instances.push({ id, value });
  }
  return updateObject(state, newState);
}

export { change };
