import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { toggleRow } from "@redux/table";
import { fetchOrders, fetchOrderItem } from "@redux/tableOrders";

export function useFetchOrders(instanceId: string) {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(fetchOrders(instanceId)), [
    dispatch,
    instanceId,
  ]); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useFetchOrderItem(instanceId: string, orderId: number) {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(fetchOrderItem(instanceId, orderId));
  }, [dispatch, instanceId, orderId]);
}

export function useToggleRow(instanceId: string, rowId: number) {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(toggleRow(instanceId, rowId)), [
    dispatch,
    instanceId,
    rowId,
  ]);
}
