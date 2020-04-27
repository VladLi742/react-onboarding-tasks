import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders, fetchOrderItem } from "../redux/modules/table";

export function useFetchOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: any) => state.table);

  useEffect(() => {
    if (!orders.length) {
      dispatch(fetchOrders());
    }
  }, [dispatch, orders]);

  return orders;
}

export function useFetchOrderItem(id: number) {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(fetchOrderItem(id)), [dispatch, id]);
}
