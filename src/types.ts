import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { ReactNode, SetStateAction } from 'react';

export type CartItem = {
  product: any;
  product_id: string | number;
  price: number | string;
  image: string;
  quantity: number;
  totalPrice: number;
  name: string;
};

export type Filter = {
  id: string;
  name: string;
  items?: string[];
  subcategories?: { items: string[] }[];
};

export type FilterState = {
  type: string;
  items: string[];
};

export type Product = {
  gender: string;
  brand_name: string;
  available_sizes: number[];
  colors_available: string[];
  material: string;
  technology: string;
};

export type PaginationProps = {
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count: number
};

export type OrderItem = {
  order_id: number;
  product_name: string;
  total_price: number;
  quantity: number;
  order_date: string | Date;
  status: string;
};

export type ProductInfo = {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  available_sizes: number[];
}

export type ProductDetailProps = {
  product: ProductInfo;
}

export type AuthContextType =  {
  userInfo: { id: string; name: string; email: string } | null;
  setUserInfo: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; email: string } | null>
  >;
  authToken: string | null;
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export type cartProduct = {
  id: string | number;
  name: string;
  price: number;
  image_url: string;
  gender: string;
};

export type rootCartItem = {
  product_id: string | number;
  price: number;
  image: string; 
  quantity: number;
  totalPrice: number;
  name: string;
}

export type CartState = {
  items: rootCartItem[],
  totalQuantity: number,
  totalAmount: number
}

export interface RootCartState {
  cart: CartState;
}

export type RootProductState = {
  products: {
    products: InitialProductType[];
    filteredProducts: InitialProductType[];
  }; 
}

export type InitialProductType = {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image_url: string;
  description: string;
  gender: string;
  available_sizes: number[];
  colors_available: string[];
  material: string;
  technology: string;
  brand_name: string;
  category: string;
}

export type InitialStateType = {
  products: InitialProductType[],
  filteredProducts: InitialProductType[]
}

export type wishlistItemType = {
  product: any;
  quantity: number;
  product_id: string | number;
  price: number;
  image: string;
  name: string;
};

export type InitialWishlistType = {
  items: wishlistItemType[];
  totalQuantity: number;
};

export type RootWishlistState = {
  wishlist: InitialWishlistType;
};

export type ShopButtonProps = {
  children: React.ReactNode;
  cosmetic?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
};

export type CategoryCardType = {
  title: string,
  link: string,
  image: string
}

export type TextFieldType = {
  label: string,
  placeholder: string,
  multiline: boolean,
  rows: number,
  style: React.CSSProperties
}

export type CustomizedSteppersType = {
  activeStep: number,
  cosmetic: React.CSSProperties
}

export type CustomStepIconType = {
  active: boolean,
  completed: boolean,
  icon: number
}

export type OwnerStateType = {
  active: boolean;
  completed: boolean;
};

export type NavButtonType = {
  to: string,
  label: string
}

export type NavIconType = {
  to: string,
  label: string,
  quantity: number,
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
  }
}

export type PartnersType = {
  cosmetic: React.CSSProperties,
  data: cartProduct[],
  text: string
}

export type ProdCardType = {
  product_id: string | number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  currencyFormatter: Intl.NumberFormat;
};

export type ProductCardsType = {
  style: React.CSSProperties;
  menStyle: React.CSSProperties;
  navigationType: React.ReactNode;
  cosmetic: React.CSSProperties;
  text: string;
  currentPage: number;
  filterMenProducts: any;
  filterWomenProducts: any;
};

export type cardProduct = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image_url: string;
  gender: string;
};

export type ProtectedRouteProps = {
  children: ReactNode;
  isAuthenticated: boolean;
}

export type RadioButtonType = {
  label: string,
  name: string,
  value: string,
  checkedValue: string,
  onChange: (event: { target: { value: SetStateAction<string>; }; }) => void,
  style: React.CSSProperties,
  cosmetic: React.CSSProperties
}

export type ShoesCardType = {
  image: string,
  text: string
}

export type PromotionBannerType = {
  image: string, 
  text: string
}