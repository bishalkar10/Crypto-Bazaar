import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [iconVisibility, SetIconVisibility] = useState({
    menuIcon: true,
    closeIcon: false,
  });

  //
  const [searchWord, setSearchWord] = useState("");
  const [arrowIcon, setArrowIcon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setArrowIcon(true);
    } else {
      setArrowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function changeIcon() {
    SetIconVisibility((prevState) => ({
      menuIcon: !prevState.menuIcon,
      closeIcon: !prevState.closeIcon,
    }));
  }
  function handleChange(event) {
    setSearchWord(event.target.value);
  }
  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <nav className=" h-16 w-full bg-blue-400 rounded-b-lg flex justify-around items-center">
        <h1>
          CRYPTO <br />
          BAZAAR
        </h1>

        <input
          type="text"
          placeholder="Bitcoin"
          onChange={handleChange}
          className="outline-none indent-4 rounded-2xl h-8 w-40"
        />

        <a className="h-8 w-8 grid place-content-center" onClick={changeIcon}>
          {iconVisibility.menuIcon ? (
            <i className="fa fa-bars text-xl"></i>
          ) : (
            <i className="fa fa-close text-2xl"></i>
          )}
        </a>

        <ul
          className={`fixed top-16 right-0 w-44 h-screen bg-slate-700 text-white flex flex-col transition-transform duration-300 ${
            iconVisibility.menuIcon ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <li>
            <Link
              className=" pl-6 py-6 w-full block hover:text-black hover:bg-slate-50 text-white text-xl"
              to="/"
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              className=" pl-6 py-6 w-full block  hover:text-black hover:bg-slate-50 text-white text-xl"
              to="/news"
            >
              News
            </Link>
          </li>
        </ul>
        <div
          className={`${
            arrowIcon ? "grid" : "hidden"
          } fixed place-content-center bottom-4 right-4 bg-gray-500 text-white p-2 h-10 w-10 rounded-full cursor-pointer transition-opacity duration-300 animate-bounce`}
          onClick={scrollToTop}
        >
          <i className="fa fa-arrow-up"></i>
        </div>
      </nav>
    </header>
  );
}
