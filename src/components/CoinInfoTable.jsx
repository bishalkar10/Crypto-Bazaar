export default function CoinInfoTable({
  rank,
  symbol,
  totalSupply,
  marketCap,
  volume,
  priceChange1h,
  priceChange1d,
  priceChange1w,
}) {
  return (
    <table className="w-4/5 min-w-fit max-w-3xl text-center">
      <tbody>
        <tr>
          <td className="pb-2">Rank</td>

          <td className="indent-2 pb-2">{rank}</td>
        </tr>
        <tr>
          <td className="pb-2 ">Symbol</td>

          <td className="indent-2 pb-2 ">{symbol}</td>
        </tr>
        <tr>
          <td className="pb-2 ">Total supply</td>

          <td className="indent-2 pb-2 ">{totalSupply}</td>
        </tr>
        <tr>
          <td className="pb-2 ">Market cap</td>

          <td className="indent-2 pb-2 ">{marketCap}</td>
        </tr>
        <tr>
          <td className="pb-2 ">Volume</td>

          <td className="indent-2 pb-2 ">{volume}</td>
        </tr>
        <tr>
          <th>Price changed in</th>

          <th>Price</th>
        </tr>
        <tr>
          <td className="pb-2 ">1 hour</td>

          <td className="indent-2 pb-2 ">{priceChange1h}</td>
        </tr>
        <tr>
          <td className="pb-2 ">1 day</td>

          <td className="indent-2 pb-2 ">{priceChange1d}</td>
        </tr>
        <tr>
          <td className="pb-2 ">1 week</td>

          <td className="indent-2 pb-2 ">{priceChange1w}</td>
        </tr>
      </tbody>
    </table>
  );
}
