import * as React from "react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

import { AppState } from "../../ts/interfaces";
import { CHANGE_FILTER } from "../../redux/modules/filter";

export default function Filter(props: any) {
  const { id: customId, value: defaultValue, label, onChange } = props;
  const dispatch = useDispatch();
  // @ts-ignore
  const { id, value } = useSelector((state: AppState) =>
    state.filter.instances.map((instance) => instance.id === customId)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: CHANGE_FILTER,
      id: id || customId,
      value: e.target.value,
    });
    if (onChange) onChange();
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
