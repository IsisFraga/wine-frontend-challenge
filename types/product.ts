export interface Wine  {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number | null;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number | null;
  avaliations: number | null;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
  volume: string;
}

export type WineList = Wine[];

export type ProductsList = Product[];
export interface Product {
  item: Wine;
  quantity: number;
  id: number;
}