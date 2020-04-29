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
  const id = "table-orders";
  const instance = useSelector((state: AppState) =>
    state.table.instances.find((instance) => instance.id === id)
  );
  const dispatch = useDispatch();
  const fetchOrders = useFetchOrders(id);

  if (!instance) {
    dispatch(initializeTable(id));
  } else if (!instance.isLoading) {
    if (instance.rows.length) {
      return (
        <TableOrders
          id={id}
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
