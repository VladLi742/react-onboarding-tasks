// ----- State -----

export interface AppState {
  filter: FilterState;
  table: TableState;
}

// ----- Filter -----

export interface FilterState {
  instances: FilterInstance[];
}

export interface FilterInstance {
  id: number;
  value: string;
}

export interface ChangeFilterAction {
  readonly type: string;
  id: number;
  value: string;
}

// ----- Table -----

export interface TableState {
  instances: TableInstance[];
}

export interface TableInstance {
  id: number;
  text: string;
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

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  sum: number;
}

export interface OrderItems {
  orderId: number;
  items: OrderItem[];
}

export interface FetchOrderItemSuccessAction {
  readonly type: string;
  payload: OrderItems;
}
