import * as React from "react";
import {
  Table as TableMaterial,
  TableHead,
  TableBody,
  TableRow as TableRowMaterial,
  TableCell,
} from "@material-ui/core";

import { TableProps, TableUIData, TableRowData } from "../../ts/interfaces";

import TableRow from "./TableRow";

export default function Table(props: TableProps) {
  const { id, headers, subHeaders, data, type, isExpandable } = props;
  return (
    <TableMaterial>
      <TableHead>
        <TableRowMaterial>
          {isExpandable && <TableCell padding="none" />}
          {headers.map((header: TableUIData) => (
            <TableCell key={header.id}>{header.text}</TableCell>
          ))}
        </TableRowMaterial>
      </TableHead>
      <TableBody>
        {data.rows.map((row: TableRowData) => (
          <TableRow
            tableId={id}
            subHeaders={subHeaders}
            row={row}
            isExpandable={isExpandable}
            type={type}
            key={row.id}
          />
        ))}
      </TableBody>
    </TableMaterial>
  );
}
