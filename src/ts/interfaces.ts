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
  instanceId: string;
}

export interface ChangeFilterAction {
  readonly type: string;
  instanceId: string;
  value: string;
}

export interface FilterProps {
  defaultValue?: string;
  label: string;
  onChangeCallback?: Function;
  validationRules?: ValidationRule[];
  placeholder?: string;
  instance: FilterInstance;
}

export interface FilterValues {
  filter: string;
}

export interface FilterOrdersProps {
  validationRules?: ValidationRule[];
  placeholder?: string;
  onChangeCallback: Function;
  label: string;
  instance: FilterInstance;
}

export interface ValidationRule {
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
  instanceId: string;
  headers: TableUIData[];
  subHeaders: TableUIData[];
  instance: TableInstance;
  type: string;
  isExpandable: boolean;
}

export interface TableOrdersProps {
  instanceId: string;
  headers: TableUIData[];
  subHeaders: TableUIData[];
  instance: TableInstance;
  type: string;
  isExpandable: boolean;
}

export interface TableRowProps {
  instanceId: string;
  subHeaders: TableUIData[];
  row: TableRowData;
  type: string;
  isExpandable: boolean;
}

export interface InitializeTableAction {
  readonly type: string;
  instanceId: string;
}

export interface ToggleRowAction {
  readonly type: string;
  instanceId: string;
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
  instanceId: string;
}

export interface FetchOrdersSuccessAction {
  readonly type: string;
  instanceId: string;
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
  instanceId: string;
  payload: OrderItems;
}
