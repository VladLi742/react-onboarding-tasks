import * as React from "react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

import { AppState, FilterProps } from "../../ts/interfaces";

import { changeFilter } from "../redux/modules/filter";

export default function Filter(props: FilterProps) {
  const {
    id: customId,
    value: defaultValue,
    label,
    onChange: onChangeCallback,
  } = props;
  const dispatch = useDispatch();
  // TODO: remove @ts-ignore by resolving the issue
  // @ts-ignore
  const { id, value } = useSelector((state: AppState) =>
    state.filter.instances.map((instance) => instance.id === customId)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilter(id || customId, e.target.value));
    if (onChangeCallback) onChangeCallback();
  };

  return (
    <TextField
      onChange={handleChange}
      label={label}
      defaultValue={defaultValue}
      value={value}
    />
  );
}
