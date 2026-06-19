import { MouseEvent } from "react";
import { useCartItemContext } from "./CartContextProvider";
import { useProductContext } from "./ProductContextProvider"

export default function ProductGrid() {
  const productContext = useProductContext();
  const cartContext = useCartItemContext();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    cartContext.dispatch({
      action: 'add',
      product: {
        id: e.currentTarget.dataset.productId || '',
        name: e.currentTarget.dataset.productName || '',
        price: parseFloat(e.currentTarget.dataset.productPrice || '0.00'),
      }
    });
  }

  return <div className="flex flex-wrap w-96">
    {
      productContext.products.map(p => {
        return <button key={p.id} onClick={handleClick}
          data-product-id={p.id} data-product-name={p.name} data-product-price={p.price}
          className="border rounded-md w-20 h-20 m-2 bg-slate-700 hover:bg-slate-500">
          {p.name}<br />{p.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </button>
      })
    }
  </div>
}
