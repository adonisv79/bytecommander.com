import { useCartItemContext } from "./CartContextProvider"

export interface CartItem {
  id: string,
  name: string,
  quantity: number
}

export interface CartProps {
  items: CartItem[]
}

export default function Cart() {
  const cart = useCartItemContext()
  return <><div className="border-4 h-full mx-2 bg-slate-400 overflow-scroll">
    {
      cart.items.map(i => {
        return <div className="flex" key={i.product.id}>
          <span className="w-[100%]">{i.product.name} {i.quantity > 1 && ` x${i.quantity}`}</span>
          <span className="w-40 text-end">{i.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
      })
    }
  </div>

    <div className="text-end mx-2"><b>TOTAL: {cart.totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b></div>
  </>
}
