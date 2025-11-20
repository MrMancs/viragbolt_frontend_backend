import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import OpeningPage from "./OpeningPage.jsx";
import Products from "./Products.jsx";
import Order from "./Order.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}
