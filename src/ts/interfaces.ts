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
  id: string;
  value: string;
}

export interface ChangeFilterAction {
  readonly type: string;
  id: string;
  value: string;
}

export interface FilterProps {
  id: string;
  defaultValue?: string;
  label: string;
  onChange: Function;
}

// ----- Table -----

export interface TableState {
  instances: TableInstance[];
}

export interface TableInstance {
  id: string;
  rows: TableRowData[];
}

export interface TableUIData {
  id: number;
  text: string;
}

export interface TableRowData {
  id: number;
  arr: TableUIData[];
  isOpen: boolean;
  items?: TableItemUiData[];
}

export interface TableItemUiData {
  id: number;
  orderId: number;
  arr: TableUIData[];
}

export interface TableProps {
  id: string;
  headers: TableUIData[];
  subHeaders: TableUIData[];
  data: TableInstance;
  type: string;
  isExpandable: boolean;
}

export interface TableRowProps {
  tableId: string;
  subHeaders: TableUIData[];
  row: TableRowData;
  type: string;
  isExpandable: boolean;
}

export interface InitializeAction {
  readonly type: string;
  id: string;
}

export interface ToggleRowAction {
  readonly type: string;
  id: string;
  rowId: number;
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
  id: string;
  payload: Order[];
}

// ----- OrderItem -----

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
  id: string;
  payload: OrderItems;
}
