export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
};

export type FormProductType = {
  title: string;
  price: string;
  description: string;
  img: null | File;
};
