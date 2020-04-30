import * as React from "react";

import { TableOrdersProps } from "@ts/interfaces";

import Table from "@components/Table";

export default function TableOrders(props: TableOrdersProps) {
  const {
    instanceId,
    headers,
    subHeaders,
    instance,
    type,
    isExpandable,
  } = props;
  return (
    <Table
      instanceId={instanceId}
      headers={headers}
      subHeaders={subHeaders}
      instance={instance}
      type={type}
      isExpandable={isExpandable}
    />
  );
}
