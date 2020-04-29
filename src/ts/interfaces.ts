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
  errMessage: string;
}

export interface InitializeFilterAction {
  readonly type: string;
  id: string;
}

export interface ChangeFilterAction {
  readonly type: string;
  id: string;
  value: string;
}

export interface ShowErrorFilterAction {
  readonly type: string;
  id: string;
  message: string;
}

export interface FilterProps {
  id: string;
  defaultValue?: string;
  label: string;
  onChangeCallback: Function;
  validationRules: ValidationRules;
  placeholder: string;
}

export interface FilterOrdersProps {
  id: string;
  validationRules: ValidationRules;
  placeholder: string;
  onChangeCallback: Function;
  label: string;
}

export interface ValidationRules {
  regExp: RegExp;
  message: string;
}

// ----- Table -----

export interface TableState {
  instances: TableInstance[];
}

export interface TableInstance {
  id: string;
  rows: TableRowData[];
  isLoading: boolean;
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
  instance: TableInstance;
  type: string;
  isExpandable: boolean;
}

export interface TableOrdersProps {
  id: string;
  headers: TableUIData[];
  subHeaders: TableUIData[];
  instance: TableInstance;
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

export interface InitializeTableAction {
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

export interface FetchOrdersAction {
  readonly type: string;
  id: string;
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
