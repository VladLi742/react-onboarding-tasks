import * as React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { fetchOrders } from "../redux/modules/tableOrders";

import Filter from "../utils/components/Filter";

const validationRules = {
  regExp: new RegExp(/^ord-\d*$/, "i"),
  message: "Неправильный формат",
};

export default function FilterOrders() {
  const ms = 1000;
  const dispatch = useDispatch();
  const callback = useCallback(
    debounce(() => dispatch(fetchOrders("table-orders")), ms),
    []
  );

  return (
    <Filter
      id="filter-orders"
      validationRules={validationRules}
      placeholder="ORD-Номер заказа"
      onChange={callback}
      label="Фильтр заказов"
    />
  );
}
