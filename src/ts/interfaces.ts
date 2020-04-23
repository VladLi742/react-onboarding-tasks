export interface AppState {
  list: ListState;
}

export interface ListState {
  orders: Order[];
  isFetchedOrders: boolean;
}

export interface Order {
  id: number;
  docDate: string;
  docNum: number;
  description: string;
}

export interface FetchOrderSuccessAction {
  readonly type: string;
  payload: Order[];
}
