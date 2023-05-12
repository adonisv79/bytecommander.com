import Head from "next/head";
import { MutableRefObject, useRef, useState } from "react";
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

interface StockInfoProps {
  data: any
}


interface StockInfoProps {
  data: any
}

function CompanyDescriptionCard({ data = {} }: StockInfoProps) {
  return <div>
    <h2>{data.title}</h2>
      {
        // data.description.map((desc: string, i: number) => {
        //   return (<p key={(`desc${i}`)}>{desc}</p>)
        // })
      }
      <h3>People</h3>
      {/* <h5>Boardmembers:</h5>
      <ul>
        {data.peopleCard.boardMembers.map((o: any) => {
          return <li key={o.id}>{o.fullName} ({o.jobTitle})</li>
        })}
      </ul>
      <h5>Executives:</h5>
      <ul>
        {data.peopleCard.executives.map((o: any) => {
          return <li key={o.id}>{o.fullName} ({o.jobTitle})</li>
        })} */}
      {/* </ul> */}
  </div>
}


function StockInfo({ data }: StockInfoProps) {
  if (!data) {
    return <div>No data found for symbol</div>
  }

  return <div>
    <CompanyDescriptionCard data={data.CompanyDescriptionCard } />
  </div>
}

export default function StockViewer() {
  const [data, setData] = useState(null);
  const txtTicker = useRef<HTMLInputElement>(null);

  async function onSearchClicked() {
    const ticker = txtTicker.current?.value || "";
    const country = "ph"
    // const uri = `https://proxy.bytecommander.com/get?uri=https%3A%2F%2Fwww.barrons.com%2Fmarket-data%2Fapi%2Fmillstone%3Fticker%3D${ticker}%26countrycode%3D${country}%26PAGE%3D%7B%22renderTab%22%3A%22%22%2C%22assetType%22%3A%22stock%22%2C%22analyticsValue%22%3A%22stockoverview%22`;
    const uri = `http://localhost:3001/get?uri=https%3A%2F%2Fwww.barrons.com%2Fmarket-data%2Fapi%2Fmillstone%3Fticker%3D${ticker}%26countrycode%3D${country}%26PAGE%3D%7B%22renderTab%22%3A%22%22%2C%22assetType%22%3A%22stock%22%2C%22analyticsValue%22%3A%22stockoverview%22`;
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
    if (data.props) {
      setData(data.props);
    }
  }

  return <div className="grid justify-center">
    <div className="">
      <label className="m-1 p-1">Country</label>
      <select className="m-1 p-1 text-black" name="country" id="country">
        <option value="ph">Philippines</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <input ref={txtTicker} className="m-1 p-1" type="text" placeholder="Stock Ticker Symbol" />
      <button className="m-1 p-1 border bg-slate-500" onClick={onSearchClicked}>View</button>
    </div>
    <StockInfo data={data} />
  </div>
}