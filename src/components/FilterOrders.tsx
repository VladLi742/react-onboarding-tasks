import * as React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { FETCH_ORDERS } from "../redux/modules/table";

import Filter from "../utils/components/Filter";

export default function FilterOrders() {
  const ms = 1000;
  const dispatch = useDispatch();
  const callback = useCallback(
    debounce(() => dispatch({ type: FETCH_ORDERS }), ms),
    []
  );

  return (
    <Filter id="filter-orders" onChange={callback} label="Фильтр заказов" />
  );
}
