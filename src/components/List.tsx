import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List as ListMaterial, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import { FETCH_ORDERS } from "../redux/modules/list";

import { AppState, Order } from "../ts/interfaces";

import ListItem from "./ListItem";
import Filter from "./Filter";

const Header = styled.span`
  font-size: 20px;
`;

const useStyles = makeStyles(() => ({
  listSubHeaderRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { orders, isFetchedOrders } = useSelector(
    (state: AppState) => state.list
  );

  useEffect(() => {
    dispatch({ type: FETCH_ORDERS });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ListMaterial
      component="nav"
      aria-labelledby="list-subheader"
      subheader={
        <ListSubheader
          component="div"
          classes={{ root: classes.listSubHeaderRoot }}
        >
          <Header>Заказы</Header>
          <Filter />
        </ListSubheader>
      }
    >
      {isFetchedOrders &&
        orders.map((order: Order) => {
          return <ListItem order={order} key={order.id} />;
        })}
    </ListMaterial>
  );
}
