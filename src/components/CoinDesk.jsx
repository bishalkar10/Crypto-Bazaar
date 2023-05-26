import { useState, useEffect } from "react";
import Axios from "axios";
import Coins from "./Coins";

// taking the 'searchWord' as an argument we wil use this to filter the array.
export default function CoinDesk({ searchWord }) {
  // create a state to store the array of coins received from the API call.
  const [coinsArray, setCoinsArray] = useState([]);

  async function callAPI() {
    try {
      const response = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
      );
      const data = await response.data;
      setCoinsArray(data.coins);
    } catch (error) {
      // Handle the error, e.g., display an error message or log it
    }
  }

  // call the API and store the array in the state.
  useEffect(() => {
    callAPI();
  }, []);

  // filter the array with searchWord and map the filtered array to display the coins.
  const listofCoins = coinsArray
    .filter((coin) =>
      coin.name.toLowerCase().includes(searchWord.toLowerCase())
    )
    .map((coin) => (
      <Coins
        key={coin.id}
        id={coin.id}
        name={coin.name}
        icon={coin.icon}
        price={coin.price}
        rank={coin.rank}
      />
    ));

  return <div>{listofCoins}</div>;
}
