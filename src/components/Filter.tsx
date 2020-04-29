import * as React from "react";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

import { AppState, FilterProps } from "@ts/interfaces";

import { changeFilter, initializeFilter, showErrorFilter } from "@redux/filter";

export default function Filter(props: FilterProps) {
  const {
    id: defaultId,
    validationRules,
    defaultValue,
    label,
    placeholder,
    onChange: onChangeCallback,
  } = props;
  const dispatch = useDispatch();
  const filter = useSelector((state: AppState) =>
    state.filter.instances.find((instance) => instance.id === defaultId)
  );

  useEffect(() => {
    if (!filter) dispatch(initializeFilter(defaultId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { regExp, message } = validationRules;
    const isValid = regExp.test(e.target.value);
    if (filter) {
      dispatch(changeFilter(filter.id, e.target.value));
      if (isValid && onChangeCallback) {
        onChangeCallback();
      } else {
        dispatch(showErrorFilter(filter.id, message));
      }
    }
  };

  return filter ? (
    <TextField
      error={!!filter.errMessage}
      onChange={handleChange}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={filter.value}
      helperText={filter.errMessage}
    />
  ) : null;
}
