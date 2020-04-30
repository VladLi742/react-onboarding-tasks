import * as React from "react";

import { FilterOrdersProps } from "@ts/interfaces";

import Filter from "@components/Filter";

export default function FilterOrders(props: FilterOrdersProps) {
  const { id, onChangeCallback, label, instance } = props;
  return (
    <Filter
      id={id}
      onChangeCallback={onChangeCallback}
      label={label}
      instance={instance}
    />
  );
}
