import * as React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { fetchOrders } from "@redux/tableOrders";

import FilterOrders from "@components/FilterOrders";
import { AppState } from "@ts/interfaces";
import { initializeFilter } from "@redux/filter";
import { LinearProgress } from "@material-ui/core";

export default function Container() {
  const defaultId = "filter-orders";
  const ms = 1000;
  const dispatch = useDispatch();
  const onChangeCallback = useCallback(
    debounce(() => dispatch(fetchOrders("table-orders")), ms),
    []
  );
  const instance = useSelector((state: AppState) =>
    state.filter.instances.find((instance) => instance.id === defaultId)
  );
  if (!instance) {
    dispatch(initializeFilter(defaultId));
  } else {
    return (
      <FilterOrders
        id={defaultId}
        onChangeCallback={onChangeCallback}
        label="Фильтр заказов"
        instance={instance}
      />
    );
  }

  return <LinearProgress />;
}
