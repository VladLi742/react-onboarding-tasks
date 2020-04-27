import * as React from "react";

import { useFetchOrders } from "../utils/useHooks";

import Table from "../utils/components/Table";

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

export default function OrdersTable() {
  const orders = useFetchOrders();
  return (
    <Table
      headers={headers}
      subHeaders={subHeaders}
      rows={orders}
      type="orders"
      isExpandable
    />
  );
}
