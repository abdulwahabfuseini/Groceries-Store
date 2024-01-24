export interface ProductType {
  id: number;
  name: string;
  // desc: string;
  image: string;
  price: number;
  totalPrice: number;
  quantity: number;
  // totalQuantity: number
}

// export type CartProps = {
//   getItemQuantity: (id: number) => void;
//   increaseCartQty: (id: number) => void;
//   decreaseCartQty: (id: number) => void;
//   removeFromCart: (id: number) => void;
// };

export interface CartState {
  items: ProductType[];
  totalQuantity?: number
}

// export interface ItemProps {
//   item: ProductType;
// }

export interface StateProps {
  cart: {
    map(arg0: (item: ProductType) => void): unknown;
    length: number;
    some: any;
    productData: ProductType[];
    orderData: {
      order: ProductType[];
    };
    favoriteData: ProductType[];
  };
}

export type CardProps = {
  id?: number;
  name: string;
  image: string;
  price: number;
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
