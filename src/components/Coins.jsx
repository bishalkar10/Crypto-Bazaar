export default function Coin({ name, icon, rank, symbol, price }) {
  return (
    <div className=" relative rounded-2xl h-48 min-w-[320px] max-w-[500px] shadow-xl mx-auto my-10 w-4/5 flex flex-col items-center justify-evenly">
      <div className="absolute h-8 w-8 rounded-xl grid place-content-center bg-black text-white top-2 left-2 ">
        {rank}
      </div>

      <img className="h-16 w-auto" src={icon} alt="cryptoCoinLogo" />
      <h2 className="text-xl">{name}</h2>
      <p>Price : {price}</p>
    </div>
  );
}
