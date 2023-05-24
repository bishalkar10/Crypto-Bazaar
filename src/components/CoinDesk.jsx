import { useState, useEffect } from "react";
import Axios from "axios";
import Coins from "./Coins";

export default function CoinDesk() {
  const [coinsArray, SetCoinsArray] = useState([]);
  useEffect(() => {
    async function callAPI() {
      const response = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
      );
      const data = await response.data;
      SetCoinsArray(data.coins);
    }
    callAPI();
  }, []);

  const listofCoins = coinsArray.map((coins) => (
    <Coins
      key={coins.id}
      name={coins.name}
      icon={coins.icon}
      price={coins.price}
      rank={coins.rank}
      symbol={coins.symbol}
    />
  ));

  return <div>{listofCoins}</div>;
}
