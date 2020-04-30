import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";

import { initializeTable } from "@redux/table";

import { AppState } from "@ts/interfaces";

import { useFetchOrders } from "@utils/useHooks";

import TableOrders from "@components/TableOrders";

const headers = [
  { id: 1, text: "Номер заказа" },
  { id: 2, text: "Дата заказа" },
  { id: 3, text: "Комментарий" },
];

const subHeaders = [
  { id: 1, text: "Наименование" },
  { id: 2, text: "Кол-во" },
  { id: 3, text: "Цена" },
  { id: 4, text: "Сумма" },
];

export default function Container() {
  const instanceId = "table-orders";
  const instance = useSelector((state: AppState) =>
    state.table.instances.find((instance) => instance.id === instanceId)
  );
  const dispatch = useDispatch();
  const fetchOrders = useFetchOrders(instanceId);

  if (!instance) {
    dispatch(initializeTable(instanceId));
  } else if (!instance.isLoading) {
    if (instance.rows.length) {
      return (
        <TableOrders
          instanceId={instanceId}
          headers={headers}
          subHeaders={subHeaders}
          instance={instance}
          type="orders"
          isExpandable
        />
      );
    } else fetchOrders();
  }
  return <LinearProgress />;
}
