import { FormEvent, useRef } from "react";
import { useProductContext } from "./ProductContextProvider"
import TextBox, { TextBoxTypes } from "../ui/basics/TextBox";
import WebForm from "../ui/basics/WebForm";

function Label({ htmlFor, children }: any) {
  return <label className="inline-block w-32" htmlFor={htmlFor} >{children}</label>
}

export default function ProductAdmin() {
  const txtName = useRef<HTMLInputElement>(null);
  const txtPrice = useRef<HTMLInputElement>(null);
  const productContext = useProductContext();

  function handleFormSubmitted(e: FormEvent<HTMLFormElement>) {
    const formData: { [key: string]: any } = {};
    const x = new FormData(e.currentTarget)
    x.forEach((value, key) => {
      formData[key.toString()] = value
    })

    productContext.dispatch({
      action: 'add',
      product: {
        id: crypto.randomUUID(),
        name: formData['productName'],
        price: parseFloat(formData['productPrice']),
      }
    });
    e.preventDefault()
  }

  return <div>
    <h4>Product Administration</h4>
    <WebForm id="product_form" onSubmit={handleFormSubmitted}>
      <div>
        <Label htmlFor="txtProductName" className="w-50">Name: </Label>
        <TextBox
          ref={txtName}
          id="txtProductName"
          name="productName"
          type={TextBoxTypes.text}
          isRequired
          maxLength={20}
          minLength={3}
          size={30} />
      </div>
      <div>
        <Label htmlFor="txtProductPrice" >Price: </Label>
        <TextBox
          ref={txtPrice}
          id="txtProductPrice"
          name="productPrice"
          isRequired
          accessKey="p"
          placeholder="Enter price"
          title='Price of the product'
          type={TextBoxTypes.number}
          minValue={1}
          maxValue={10000}
          maxLength={10}
          step={0.01}
          size={30}
          pattern={/^\d*\.?\d*$/} />
      </div>
      <div>
        <button className="flex flex-col items-center p-2 border-4 border-blue-500 bg-blue-500 
        rounded-md hover:border-blue-800 hover:bg-blue-700">Add product</button>
      </div>
    </WebForm>
  </div>
}
