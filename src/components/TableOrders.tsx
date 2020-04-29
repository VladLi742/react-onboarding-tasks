import * as React from "react";

import { TableOrdersProps } from "@ts/interfaces";

import Table from "@components/Table";

export default function TableOrders(props: TableOrdersProps) {
  const { id, headers, subHeaders, instance, type, isExpandable } = props;
  return (
    <Table
      id={id}
      headers={headers}
      subHeaders={subHeaders}
      instance={instance}
      type={type}
      isExpandable={isExpandable}
    />
  );
}
