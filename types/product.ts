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
}