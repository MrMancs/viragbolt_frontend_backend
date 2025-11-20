import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
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
            <img src="kepek/dalia.jpg" alt="Dália" className="img-thumbnail" />
          </div>
          <div className="col-md-6">
            <p>
              A dáliák gumós, fagyérzékeny évelők. Tápanyagdús talajban
              virágoznak a legszebben. Vízigényük közepes, virágzásuk idején
              rendszeres vízellátást igényelnek. Virágzási idejük júliustól
              októberig tart. Kiválóan alkalmasak vágott virágnak.{" "}
            </p>
            <form>
              <p className="text-center">
                <span id="ar">Ár: 356 Ft</span>
                <label for="mennyiseg">Mennyiség:</label>
                <input
                  type="number"
                  name="mennyiseg"
                  id="mennyiseg"
                  min="1"
                  max="999"
                  value="1"
                />
              </p>
              <p className="text-center">
                <button className="btn btn-warning btn-lg">Megrendelem</button>
              </p>
            </form>
          </div>
        </div>
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
  );
}
