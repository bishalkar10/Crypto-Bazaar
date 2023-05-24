import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import NewsDesk from "./NewsDesk";
import CoinDesk from "./CoinDesk";
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoinDesk />} />
          <Route path="/news" element={<NewsDesk />} />
        </Routes>
      </div>
    </Router>
  );
}
