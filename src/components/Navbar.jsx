import { useState } from "react";
import { Link } from "react-router-dom";

// taking the 'setSearchWord' as an argument we wil use this to filter the array.
export default function Navbar({ setSearchWord }) {
  // create a state to store the menu and close icon visibility.
  const [iconVisibility, SetIconVisibility] = useState({
    menuIcon: true,
  });

  // function to change the icon visibility. if menu icon is true then change it to close icon and vice versa.
  function changeIcon() {
    SetIconVisibility((prevState) => ({
      menuIcon: !prevState.menuIcon,
    }));
  }
  // with each keystroke we will update the searchWord state.
  function handleChange(event) {
    setSearchWord(event.target.value);
  }
  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <nav className=" h-16 w-full bg-blue-400 rounded-b-lg flex justify-between items-center px-5 md:px-10">
        <h1 className="font-BrunoAceSC sm:text-xl">
          CRYPTO <br />
          BAZAAR
        </h1>

        <input
          type="text"
          placeholder="Bitcoin"
          onChange={handleChange}
          className="outline-none indent-4 rounded-2xl h-8 min-w-40 w-1/2 max-w-md"
        />
        {/* top nav bar ------------------ */}
        <ul className="hidden sm:flex sm:gap-5 font-Roboto ">
          <li>
            <Link
              className="inline-block w-20 text-center rounded-lg bg-white"
              to="/Crypto-Bazaar/"
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              className="inline-block w-20 text-center rounded-lg bg-white"
              to="/Crypto-Bazaar/news"
            >
              News
            </Link>
          </li>
        </ul>

        {/* Menu icon and close icon------------- */}
        <a
          className="h-8 w-8 grid place-content-center sm:hidden"
          onClick={changeIcon}
        >
          {iconVisibility.menuIcon ? (
            <i className="fa fa-bars text-xl text-white"></i>
          ) : (
            <i className="fa fa-close text-2xl text-white font-extralight"></i>
          )}
        </a>

        {/* side nav bar --------------------*/}
        <ul
          className={`fixed top-16 right-0 w-44 h-screen bg-slate-700 text-white flex flex-col transition-transform duration-300 ${
            iconVisibility.menuIcon ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <li>
            <Link
              className=" pl-6 py-6 w-full block hover:text-black hover:bg-slate-50 text-white text-xl"
              to="/Crypto-Bazaar/"
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              className=" pl-6 py-6 w-full block  hover:text-black hover:bg-slate-50 text-white text-xl"
              to="/Crypto-Bazaar/news"
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
