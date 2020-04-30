import * as React from "react";
import { useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow as TableRowMaterial,
  TableCell,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { TableUIData, TableItemUiData, TableRowProps } from "@ts/interfaces";

import { useFetchOrderItem, useToggleRow } from "@utils/useHooks";

export default function TableRow(props: TableRowProps) {
  const { instanceId, subHeaders, row, type, isExpandable } = props;
  const { id, items, isOpen } = row;
  const fetchOrderItem = useFetchOrderItem(instanceId, id);
  const toggleRow = useToggleRow(instanceId, id);

  const handleOpen = () => {
    toggleRow();
  };

  useEffect(() => {
    if (type === "orders" && !items && isOpen) {
      fetchOrderItem();
    }
  }, [type, fetchOrderItem, items, isOpen]);

  return (
    <>
      <TableRowMaterial selected={isOpen}>
        {isExpandable && (
          <TableCell onClick={handleOpen} padding="none">
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </TableCell>
        )}
        {row.arr.map((cell: TableUIData) => (
          <TableCell key={cell.id}>{cell.text}</TableCell>
        ))}
      </TableRowMaterial>
      {row.items && isOpen && (
        <TableRowMaterial>
          <TableCell padding="none" colSpan={subHeaders.length}>
            <Table>
              <TableHead>
                <TableRowMaterial>
                  {subHeaders.map((subHeader: TableUIData) => {
                    return (
                      <TableCell key={subHeader.id}>{subHeader.text}</TableCell>
                    );
                  })}
                </TableRowMaterial>
              </TableHead>
              <TableBody>
                {/*TODO: resolve // Argument type (item: TableItemUiData) => any*/}
                {/*is not assignable to parameter type (value: JSONSchema4,*/}
                {/*index: number, array: JSONSchema4[]) => any*/}
                {row.items.map((item: TableItemUiData) => {
                  return (
                    <TableRowMaterial key={item.id}>
                      {item.arr.map((cell: TableUIData) => {
                        return <TableCell key={cell.id}>{cell.text}</TableCell>;
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
