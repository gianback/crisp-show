export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  mainPicture: string;
  otherPictures: string[];
  attributes: unknown;
  categoryId: string;
}
