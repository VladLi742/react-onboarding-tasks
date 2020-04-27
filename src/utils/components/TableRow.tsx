import * as React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow as TableRowMaterial,
  TableCell,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { randomKey } from "../functions";

import { useFetchOrderItem } from "../useHooks";

export default function TableRow(props: any) {
  const { subHeaders, row, type, isExpandable } = props;
  const [isOpen, setOpen] = useState(false);
  const fetchOrderItem = useFetchOrderItem(row.id);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (type === "orders" && !row.items && isOpen) {
      fetchOrderItem();
    }
  }, [type, fetchOrderItem, row, row.items, isOpen]);

  return (
    <>
      <TableRowMaterial selected={isOpen}>
        {isExpandable && (
          <TableCell onClick={handleOpen} padding="none">
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </TableCell>
        )}
        {row.arr.length &&
          row.arr.map((cell: any) => (
            <TableCell key={randomKey()}>{cell.text}</TableCell>
          ))}
      </TableRowMaterial>
      {row.items && isOpen && (
        <TableRowMaterial>
          <TableCell colSpan={4}>
            <Table>
              <TableHead>
                <TableRowMaterial>
                  {subHeaders.map((subHeader: any) => {
                    return (
                      <TableCell key={randomKey()}>{subHeader.text}</TableCell>
                    );
                  })}
                </TableRowMaterial>
              </TableHead>
              <TableBody>
                {row.items.map((item: any) => {
                  return (
                    <TableRowMaterial key={randomKey()}>
                      {item.arr.map((cell: any) => {
                        return (
                          <TableCell key={randomKey()}>{cell.text}</TableCell>
                        );
                      })}
                    </TableRowMaterial>
                  );
                })}
              </TableBody>
            </Table>
          </TableCell>
        </TableRowMaterial>
      )}
    </>
  );
}
