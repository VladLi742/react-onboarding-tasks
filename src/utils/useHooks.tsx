import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleRow } from "@redux/table";
import { fetchOrders, fetchOrderItem } from "@redux/tableOrders";

import { AppState } from "@ts/interfaces";

export function useFetchOrders(id: string) {
  const dispatch = useDispatch();
  const instance = useSelector((state: AppState) =>
    state.table.instances.find((instance) => instance.id === id)
  );

  useEffect(() => {
    if (!instance) dispatch(fetchOrders(id));
  }, [dispatch, instance, id]);

  return instance;
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
