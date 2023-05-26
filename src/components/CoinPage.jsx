import { useEffect, useState } from "react";
import axios from "axios";
import CoinInfoTable from "./CoinInfoTable";

export default function CoinPage({ id }) {
  const [coinData, setCoinData] = useState({
    icon: "",
    name: "",
    priceChange1h: "",
    priceChange1d: "",
    priceChange1w: "",
    rank: "",
    totalSupply: "",
    marketCap: "",
    volume: "",
  });

  async function callCoinData(id) {
    try {
      const response = await axios.get(
        `https://api.coinstats.app/public/v1/coins/${id}`
      );
      const data = await response.data;
      const coin = await data.coin;
      setCoinData({
        icon: coin.icon,
        name: coin.name,
        priceChange1h: coin.priceChange1h,
        priceChange1d: coin.priceChange1d,
        priceChange1w: coin.priceChange1w,
        rank: coin.rank,
        totalSupply: coin.totalSupply,
        marketCap: coin.marketCap,
        volume: coin.volume,
        symbol: coin.symbol,
      });
    } catch (error) {
      // Handle the error, e.g., display an error message or log it
      console.error(error.message);
    }
  }

  useEffect(() => {
    callCoinData(id);
  }, [id]);

  return (
    <div className="p-5 flex flex-col items-center font-sans">
      <img src={coinData.icon} alt="" />
      <h1 className="font-bold text-2xl my-5">{coinData.name}</h1>
      <CoinInfoTable
        rank={coinData.rank}
        symbol={coinData.symbol}
        totalSupply={coinData.totalSupply}
        marketCap={coinData.marketCap}
        volume={coinData.volume}
        priceChange1h={coinData.priceChange1h}
        priceChange1d={coinData.priceChange1d}
        priceChange1w={coinData.priceChange1w}
      />
    </div>
  );
}
