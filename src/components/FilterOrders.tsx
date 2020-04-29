import * as React from "react";

import { FilterOrdersProps } from "@ts/interfaces";

import Filter from "./Filter";

export default function FilterOrders(props: FilterOrdersProps) {
  const { id, validationRules, placeholder, onChangeCallback, label } = props;
  return (
    <Filter
      id={id}
      validationRules={validationRules}
      placeholder={placeholder}
      onChangeCallback={onChangeCallback}
      label={label}
    />
  );
}
