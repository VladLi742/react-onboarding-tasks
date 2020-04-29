import { cloneDeep } from "lodash";

import {
  TableState,
  InitializeTableAction,
  ToggleRowAction,
} from "@ts/interfaces";

import { updateObject } from "./functions";

function initialize(state: TableState, action: InitializeTableAction) {
  const newState = cloneDeep(state);
  newState.instances.push({ id: action.id, rows: [], isLoading: false });
  return updateObject(state, newState);
}

function toggle(state: TableState, action: ToggleRowAction) {
  const newState = cloneDeep(state);
  const instance = newState.instances.find(
    (instance) => instance.id === action.id
  );
  if (instance) {
    const row = instance.rows.find((row) => row.id === action.rowId);
    if (row) row.isOpen = !row.isOpen;
  }
  return updateObject(state, newState);
}

export { initialize, toggle };
