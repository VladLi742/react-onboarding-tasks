// ----- State -----

export interface AppState {
  list: ListState;
}

export interface ListState {
  orders: Order[];
  itemsArr: Items[];
  isFetchedOrders: boolean;
}

// ----- Order -----

export interface Order {
  id: number;
  docDate: string;
  docNum: number;
  description: string;
}

export interface FetchOrdersSuccessAction {
  readonly type: string;
  payload: Order[];
}

// ----- Item -----

export interface Item {
  id: number;
  name: string;
  price: number;
  qty: number;
  sum: number;
}

export interface Items {
  items: Item[];
  orderId: number;
}

export interface FetchOrderItemSuccessAction {
  readonly type: string;
  payload: Items;
}
