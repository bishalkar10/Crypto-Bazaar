import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewsDesk from "./NewsDesk";
import CoinDesk from "./CoinDesk";
import CoinPage from "./CoinPage";

export default function App() {
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
  return (
    <Router>
      <div>
        <Navbar setSearchWord={setSearchWord} />
        <Routes>
          <Route
            path="/Crypto-Bazaar/"
            element={<CoinDesk searchWord={searchWord} />}
          />
          <Route path="/Crypto-Bazaar/coin/:id" element={<CoinPageWrapper />} />
          <Route path="/Crypto-Bazaar/news" element={<NewsDesk />} />
        </Routes>
      </div>
      <div
        className={`${
          arrowIcon ? "grid" : "hidden"
        } fixed place-content-center bottom-4 right-4 bg-gray-500 text-white p-2 h-10 w-10 rounded-full cursor-pointer transition-opacity duration-300 animate-bounce`}
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </Router>
  );
}

function CoinPageWrapper() {
  const { id } = useParams();

  return <CoinPage id={id} />;
}
