/* npm i react-router-dom react-router react-bootstrap bootstrap express mysql2 cory */

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
          <Route path="/termekek" element={<Products />} />
          <Route path="/rendeles" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}
