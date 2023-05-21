import { Dispatch, FC, createContext, useContext, useReducer } from "react";
import { Product } from "./ProductContextProvider";

export interface CartItem {
  product: Product
  quantity: number
  total: number
}

export interface CartDispatchRequest {
  action: string
  product: Product
}

export interface CartItemContext {
  items: CartItem[],
  dispatch: Dispatch<CartDispatchRequest>,
  totalCost: number
}

export interface CartContextProviderProps {
  children: any
}

const initialCartState: CartItem[] = []

const CartContext = createContext<CartItemContext>({
  items: [],
  dispatch: () => [],
  totalCost: 0
})

export function useCartItemContext() {
  return useContext(CartContext);
}

function reduceItems(items: CartItem[], req: CartDispatchRequest): CartItem[] {
  console.log(req)
  switch (req.action) {
    case 'add':
      return addProduct(items, req.product);
  }
  return items;
}

function addProduct(items: CartItem[], product: Product): CartItem[] {
  console.log('d')
  let found = false;

  const retval = items.map(i => {
    if (i.product.id === product.id) {
      found = true;
      const updatedItem = { ...i };
      updatedItem.quantity += 1;
      updatedItem.total = updatedItem.quantity * updatedItem.product.price;
      return updatedItem;
    }
    return { ...i };
  });

  if (!found) {
    retval.push({ product, quantity: 1, total: product.price })
  }

  console.log('d')
  console.log(retval)
  return retval;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, dispatch] = useReducer(reduceItems, initialCartState);
  let totalCost = 0;
  items.map(i => totalCost += i.total)
  return <CartContext.Provider value={{ items, dispatch, totalCost }}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider;
