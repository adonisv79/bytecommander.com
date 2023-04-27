import { Input } from 'postcss'
import Charts from './../../libs/charts'
import { ChangeEvent, useState } from 'react';

export default function ChartsPage() {
  const [data, setData] = useState([12, 5, 6, 6, 9, 10]);

  function textAreaChanged(e: ChangeEvent) {
    const textValue = (e.target as HTMLTextAreaElement).value;
    console.log(textValue)
    try {
      const data = JSON.parse(textValue);
      setData(data);
    } catch {
      console.log(`Invalid JSON in textArea: ${textValue}`);
    }
  }
  
  return <div>
    <textarea className='text-gray-900' onChange={textAreaChanged} value={data} />
    <Charts data={data}></Charts>
  </div>
}