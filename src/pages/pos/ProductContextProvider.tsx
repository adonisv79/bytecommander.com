import { Dispatch, createContext, useContext, useReducer } from 'react';
import initialProducts from './products.json';

export interface Product {
  id: string,
  name: string,
  price: number
}

export interface ProductDispatchRequest {
  action: string
  product: Product
}

export interface ProductContextProps {
  children: any
}

export interface ProductContextValue {
  products: Product[]
  dispatch: Dispatch<ProductDispatchRequest>
}

const productContext = createContext<ProductContextValue>({
  products: [],
  dispatch: () => { }
});

export function useProductContext() {
  return useContext(productContext);
}

export default function ProductContextProvider({ children }: ProductContextProps) {
  const [products, dispatch] = useReducer(productReducer, initialProducts);
  return <productContext.Provider value={{
    products, dispatch
  }}>
    {children}
  </productContext.Provider>
}

function productReducer(products: Product[], req: ProductDispatchRequest): Product[] {
  switch (req.action) {
    case "add":
      return [...products, req.product]
    case "remove":
      return [...products]
    default:
      return [...products]
  }
}
