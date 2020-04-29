import * as React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { fetchOrders } from "@redux/tableOrders";

import FilterOrders from "@components/FilterOrders";

const validationRules = {
  regExp: new RegExp(/^ord-\d*$/, "i"),
  message: "Неправильный формат",
};

export default function Container() {
  const ms = 1000;
  const dispatch = useDispatch();
  const onChangeCallback = useCallback(
    debounce(() => dispatch(fetchOrders("table-orders")), ms),
    []
  );

  return (
    <FilterOrders
      id="filter-orders"
      validationRules={validationRules}
      placeholder="ORD-Номер заказа"
      onChangeCallback={onChangeCallback}
      label="Фильтр заказов"
    />
  );
}
