import BarChart from './../../libs/charts/BarChart'
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function ChartsPage() {
  const barchartData = useRef<HTMLInputElement>(null);
  const [data, setData] = useState([5, 10, 15, 20, 15, 15, 10, 20, 25])

  useEffect(() => {
    if (barchartData.current)
      barchartData.current.value = data.toString()
  }, []);


  function updateData() {
    try {
      if (barchartData.current) {
        const data = barchartData.current.value.split(",")
          .map(i => {
            const n = parseInt(i.trim())
            if (isNaN(n)) throw new Error('NaN')
            return n;
          });
        setData(data);
      }
    } catch {
      alert('Invalid data: use comma delimited numbers only');
    }
  }

  return <div>
    <h2>Charts Demo</h2>
    <p>The following is a new prototype of the charts I used in <a href="http://mypinoy.bytecommander.com">MyPinoy</a>. These charts are react components used with D3</p>
    <p>Note that this page is still under construction and most of the charts are still undergoing transitions. Check back soon! :)</p>
    <div>
      Ente a comma delimited numbers here then press UPDATE
      <input type='text' ref={barchartData} className='m-4 p-1 text-gray-900' />
      <button className='border p-1' onClick={() => { updateData() }}>UPDATE</button>
    </div>
    <div className='border m-2 h-96'>
      <BarChart id="barchart" data={data}
        viewport={{ width: 800, height: 400, bgcolor: "#fff" }}
        bars={{ color: "#859" }} />
    </div>
  </div>
}