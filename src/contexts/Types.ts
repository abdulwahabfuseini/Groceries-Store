export interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  totalPrice?: number;
  quantity: number;
}

export interface IUser {
  _id?: string;
  email: string;
  usename: string;
}

export type CardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number
  discount?: number;
  desc?: string;
  rating?: number;
};

export type RelateProps = {
  name: string;
  image: string;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type BannerProps = {
  id?: number;
  title: string;
  subTitle: string;
  desc: string;
  button: string;
  cover: string;
  color: string;
};

export type ButtonProps = {
  text: string;
  url: string;
};

export type ShoppingProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  totalPrice?: number;
};

export type CategoryTittleProps = {
   category: string,
   text: string
}

export type TestimonialProps = {
   id: number,
   name: string
   email: string
   message: string
}