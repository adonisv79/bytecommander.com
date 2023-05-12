import Image from "next/image";
import { useCallback, useState } from "react";

export default function SlowComponent() {
  const [visible, setVisible] = useState(false);

  const sleep = useCallback(async (ms = 5000) => {
    return new Promise((res) => {
      setTimeout(() => {
        setVisible(true)
        res(true)
      }, ms);
    });
  }, []);

  sleep(3000);
  
  return <>
    <div className={`${!visible && 'hidden'}`}>
      <h2>This is a slow loading component</h2>
      <p>Once you are seeing this, it means the component has loaded</p>
    </div>
    <div className={`${visible && 'hidden'}`}>
      <Image alt="loading" width={100} height={100} src={'/images/loading.gif'} />
    </div>
  </>

}