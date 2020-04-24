import { clone } from "lodash";

import { updateObject } from "./functions";
import { FilterState, ChangeFilterAction } from "../ts/interfaces";

function change(state: FilterState, action: ChangeFilterAction) {
  const newState = clone(state);
  newState.value = action.value;
  return updateObject(state, newState);
}

export { change };
