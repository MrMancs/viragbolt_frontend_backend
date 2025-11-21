import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3333/api/flowers", {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();
          setFlowers(data);
        })
        .catch((err) => console.log(err))
        .finally();
    }
    fetchData();
  }, []);

  //console.log(flowers);

  return (
    <>
      <div>
        <header>
          <Link to="/">
            <img src="src/kepek/sunflower.jpg" alt="fa" id="logo" />
          </Link>
          <h1>Nevenincs Bt.</h1>
          <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
        </header>
        <main className="container">
          <div className="row">
            <h2>Vetőmagjaink:</h2>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Dália</h4>
              <Link to="/rendeles">
                <img
                  src="/src/kepek/dalia.jpg"
                  alt="Dália"
                  className="img-fluid"
                />
              </Link>
            </div>
            {flowers.slice(1, flowers.length).map((flower, idx) => (
              <div className="col-lg-4 mt-4 arukep" key={idx}>
                <h4>{flower.nev}</h4>
                <img
                  src={flower.kepUrl}
                  alt={flower.nev}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </main>
        <footer className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-2">
              <h3>Nyitvatartás:</h3>
            </div>
            <div className="col-md-8 col-lg-4">
              <ul>
                <li>Hétfő-Péntek: 8-17 óráig</li>
                <li>Szombat: 8-13 óráig</li>
                <li>Vasárnap: 9-12 óráig</li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-2">
              <h3>Kapcsolat:</h3>
            </div>
            <div className="col-md-8 col-lg-4">
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
