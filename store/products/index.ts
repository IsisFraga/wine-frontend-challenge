import rootSaga from "./sagas";
import { InitialState } from "./types";
export * from "./reducer";
export * from "./types";

export { rootSaga };

export const initialState: InitialState = {
  selectedProduct: null,
  quantity: 0,
  productsList: [],
  filter: null,
  priceFilters: [
    {
      price: "até R$40",
      id: "price1",
      selected: false,
      queryString: "0-40",
    },
    {
      price: "R$40 a R$50",
      id: "price2",
      selected: false,
      queryString: "40-50",
    },
    {
      price: "R$60 a R$100",
      id: "price3",
      selected: false,
      queryString: "60-100",
    },
    {
      price: "R$100 a R$200",
      id: "price4",
      selected: false,
      queryString: "100-200",
    },
    {
      price: "R$200 a R$500",
      id: "price5",
      selected: false,
      queryString: "200-500",
    },
    {
      price: "acima de R$500",
      id: "price6",
      selected: false,
      queryString: "500",
    },
  ],
};
