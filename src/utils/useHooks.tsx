import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { toggleRow } from "@redux/table";
import { fetchOrders, fetchOrderItem } from "@redux/tableOrders";

export function useFetchOrders(id: string) {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(fetchOrders(id)), [dispatch, id]); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useFetchOrderItem(id: string, orderId: number) {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(fetchOrderItem(id, orderId));
  }, [dispatch, id, orderId]);
}

export function useToggleRow(id: string, rowId: number) {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(toggleRow(id, rowId)), [
    dispatch,
    id,
    rowId,
  ]);
}
