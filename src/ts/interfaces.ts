// ----- State -----

export interface AppState {
  list: ListState;
}

export interface ListState {
  orders: Order[];
  orderItems: OrderItem[];
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

// ----- OrderItem -----

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  sum: number;
  orderId: number;
}

export interface FetchOrderItemSuccessAction {
  readonly type: string;
  payload: OrderItem;
}
