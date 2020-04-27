import * as React from "react";
import {
  Table as TableMaterial,
  TableHead,
  TableBody,
  TableRow as TableRowMaterial,
  TableCell,
} from "@material-ui/core";

import { randomKey } from "../functions";

import TableRow from "./TableRow";

export default function Table(props: any) {
  const { headers, subHeaders, rows, type, isExpandable } = props;
  return (
    <TableMaterial>
      <TableHead>
        <TableRowMaterial>
          {isExpandable && <TableCell padding="none" />}
          {headers.map((header: any) => {
            return <TableCell key={header.id}>{header.text}</TableCell>;
          })}
        </TableRowMaterial>
      </TableHead>
      <TableBody>
        {rows.map((row: any) => {
          return (
            <TableRow
              subHeaders={subHeaders}
              row={row}
              key={randomKey()}
              isExpandable={isExpandable}
              type={type}
            />
          );
        })}
      </TableBody>
    </TableMaterial>
  );
}
