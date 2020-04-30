import * as React from "react";

import { FilterOrdersProps } from "@ts/interfaces";

import Filter from "@components/Filter";

export default function FilterOrders(props: FilterOrdersProps) {
  const { instanceId, onChangeCallback, label, instance } = props;
  return (
    <Filter
      instanceId={instanceId}
      onChangeCallback={onChangeCallback}
      label={label}
      instance={instance}
    />
  );
}
