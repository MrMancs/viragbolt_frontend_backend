import React from "react";
import { Link } from "react-router";

export default function OpeningPage() {
  return (
    <>
      <div id="nyito">
        <header>
          <Link to="/">
            <img src="src/kepek/sunflower.jpg" alt="fa" id="logo" />
          </Link>
          <h1>Nevenincs Bt.</h1>
          <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
        </header>
        <main>
          <Link to="/products">
            <span>Válasszon vetőmagjainkból!</span>
          </Link>
        </main>
        <footer className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <h3>Nyitvatartás:</h3>
            </div>
            <div className="col-md-8 col-lg-8">
              <ul>
                <li>Hétfő-Péntek: 8-17 óráig</li>
                <li>Szombat: 8-13 óráig</li>
                <li>Vasárnap: 9-12 óráig</li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4">
              <h3>Kapcsolat:</h3>
            </div>
            <div className="col-md-8 col-lg-8">
              <ul>
                <li>06-30/111-1111</li>
                <li>06-70/111-1111</li>
                <li>nevenincsbt@gmail.com</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
