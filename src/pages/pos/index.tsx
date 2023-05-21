import Cart from "./Cart";
import CartContextProvider from "./CartContextProvider";
import ProductAdmin from "./ProductAdmin";
import ProductContextProvider from "./ProductContextProvider";
import ProductGrid from "./ProductGrid";

export default function POSPage() {
  return <div className="flex justify-center">
    <div className="grid grid-cols-2">
      <div className="col-span-2">
        <h3>POS Sample</h3>
        <p>Here we play arround react useContext and useReducer hooks to easily manage states across more complex components</p>
        <hr />
      </div>
      <ProductContextProvider>
        <CartContextProvider>
          <div className="col-span-1">
            <ProductAdmin />
            <ProductGrid />
          </div>
          <div className="col-span-1">
            <Cart />
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  </div>
}
