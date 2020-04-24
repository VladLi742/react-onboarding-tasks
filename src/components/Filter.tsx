import * as React from "react";
import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { TextField } from "@material-ui/core";

import { AppState } from "../ts/interfaces";
import { CHANGE_FILTER } from "../redux/modules/filter";
import { FETCH_ORDERS } from "../redux/modules/list";

export default function Filter() {
  const ms = 1000;
  const dispatch = useDispatch();
  const { value } = useSelector((state: AppState) => state.filter);
  const callback = useCallback(
    debounce(() => dispatch({ type: FETCH_ORDERS }), ms),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: CHANGE_FILTER, value: e.target.value });
    callback();
  };

  return <TextField onChange={handleChange} value={value} />;
}
