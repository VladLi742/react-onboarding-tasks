import * as React from "react";
import { useState } from "react";
import { ListItem as ListItemMaterial, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Order } from "../ts/interfaces";

interface ListItemProps {
  order: Order;
}

export default function ListItem(props: ListItemProps) {
  const { order } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ListItemMaterial button onClick={handleOpen}>
      <ListItemText primary={order.description} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemMaterial>
  );
}
