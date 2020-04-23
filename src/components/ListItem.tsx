import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem as ListItemMaterial,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { FETCH_ORDER_ITEM } from "../redux/modules/list";

import { AppState, Order, OrderItem } from "../ts/interfaces";

interface ListItemProps {
  order: Order;
}

export default function ListItem(props: ListItemProps) {
  const { order } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { orderItems } = useSelector((state: AppState) => state.list);
  const items = orderItems.find((item: OrderItem) => item.orderId === order.id);

  const handleOpen = () => {
    if (!items) {
      dispatch({ type: FETCH_ORDER_ITEM, id: order.id });
    }
    setOpen(!open);
  };

  return (
    <>
      <ListItemMaterial
        onClick={handleOpen}
        button
        divider
        selected={items && open}
      >
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        <ListItemText primary={order.docNum} />
        <ListItemText primary={order.docDate} />
        <ListItemText primary={order.description} />
      </ListItemMaterial>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items &&
          items.map((item: OrderItem) => {
            return (
              <List component="div" disablePadding key={item.id}>
                <ListItemMaterial button divider>
                  <ListItemText primary={item.name} />
                  <ListItemText primary={item.qty} />
                  <ListItemText primary={item.price} />
                  <ListItemText primary={item.sum} />
                </ListItemMaterial>
              </List>
            );
          })}
      </Collapse>
    </>
  );
}
