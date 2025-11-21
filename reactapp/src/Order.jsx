import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Order() {
  const [flower, setFlower] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3333/api/flowers/1", {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();
          setFlower(data);
        })
        .catch((err) => console.log(err))
        .finally();
    }
    fetchData();
  }, []);

  //console.log(flower);

  return (
    <div>
      <header>
        <Link to="/">
          <img src="src/kepek/sunflower.jpg" alt="fa" id="logo" />
        </Link>
        <h1>Nevenincs Bt.</h1>
        <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
      </header>
      <main className="container">
        <h2>Dália (Kerti virág)</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="src/kepek/dalia.jpg"
              alt="Dália"
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-6">
            <p>
              A dáliák gumós, fagyérzékeny évelők. Tápanyagdús talajban
              virágoznak a legszebben. Vízigényük közepes, virágzásuk idején
              rendszeres vízellátást igényelnek. Virágzási idejük júliustól
              októberig tart. Kiválóan alkalmasak vágott virágnak.{" "}
            </p>
            <span id="ar">Ár: 356 Ft</span>
            {flower.map((flower) =>
              flower.keszlet > 0 ? (
                <form className="d-flex flex-column gap-3 mt-3">
                  <div>
                    <span>Mennyiség: </span>
                    <input
                      type="number"
                      name="mennyiseg"
                      id="mennyiseg"
                      min="1"
                      max={flower.keszlet}
                    />
                  </div>
                  <button
                    className="btn btn-warning btn-lg "
                    style={{ maxWidth: "200px" }}
                  >
                    Megrendelem
                  </button>
                </form>
              ) : (
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: 19,
                    display: "flex",
                    marginTop: "20px",
                  }}
                >
                  Jelenleg nincs a termékből készleten, keresse fel oldalunkat
                  később!
                </span>
              )
            )}
          </div>
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
  );
}
