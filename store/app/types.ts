export interface InitialState {
  loading: boolean;
  modalCart: boolean;
  sidebar: boolean;
  filterSidebar: boolean;
  error: boolean;
}

export enum ActionTypes {
  START_LOADING = "app/START_LOADING",
  FINISH_LOADING = "app/FINISH_LOADING",
  APPLICATION_STATUS = "app/APPLICATION_STATUS",
  TOGGLE_SIDEBAR = "app/TOGGLE_SIDEBAR",
  TOGGLE_FILTER_SIDEBAR = "app/TOGGLE_FILTER_SIDEBAR",
  TOGGLE_MODALCART = "app/TOGGLE_MODALCART"
}