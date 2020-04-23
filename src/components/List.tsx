import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List as ListMaterial } from "@material-ui/core";
import { FETCH_ORDERS } from "../redux/modules/list";

import { AppState, Order } from "../ts/interfaces";

import ListItem from "./ListItem";

export default function List() {
  const dispatch = useDispatch();
  const { orders, isFetchedOrders } = useSelector(
    (state: AppState) => state.list
  );

  useEffect(() => {
    dispatch({ type: FETCH_ORDERS });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ListMaterial component="nav">
      {isFetchedOrders &&
        orders.map((order: Order) => {
          return <ListItem order={order} key={order.id} />;
        })}
    </ListMaterial>
  );
}
