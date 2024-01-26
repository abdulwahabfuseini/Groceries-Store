export interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  totalPrice: number;
  quantity: number;
}

// export type CartProps = {
//   getItemQuantity: (id: number) => void;
//   increaseCartQty: (id: number) => void;
//   decreaseCartQty: (id: number) => void;
//   removeFromCart: (id: number) => void;
// };

// export interface CartState {
//   length: number;
//   // map(arg0: (CartProduct: any) => import("react").JSX.Element): import("react").ReactNode;
//   items: ProductType[];
//   totalQuantity?: number;
// }

// export interface ItemProps {
//   item: ProductType;
// }

// export interface StateProps {
//   cart: {
//     map(arg0: (item: ProductType) => void): unknown;
//     length: number;
//     some: any;
//     productData: ProductType[];
//     orderData: {
//       order: ProductType[];
//     };
//     favoriteData: ProductType[];
//   };
// }

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
