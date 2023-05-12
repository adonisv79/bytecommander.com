import { useState } from "react"

export default function PanelComponent1() {
  const [count, setCount] = useState(0);
  return <div>
    <h1>Panel 1 Component</h1>
    <p>This is the first panel test component</p>
    <p>If you look at the console, this should not be rendered until it is opened (lazy loaded)</p>
    <p>Note that switching tabs does not recall prior states and wil lremount the component</p>
    <p>This is becasue we are not hidding the previous component but rather skipping its render</p>
    <button className="border p-2 mx-2" onClick={() => setCount(count - 1)}>-</button>
    {count}
    <button className="border p-2 mx-2" onClick={() => setCount(count + 1)}>+</button>
  </div>
}