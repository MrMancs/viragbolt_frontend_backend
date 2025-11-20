import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div>
        <header>
          <Link to="/">
            <img src="./sunflower.jpg" alt="fa" id="logo" />
          </Link>
          <h1>Nevenincs Bt.</h1>
          <h2>Vetőmagok - Mindenféle, minden mennyiségben</h2>
        </header>
        <main className="container">
          <div className="row">
            <h2>Vetőmagjaink:</h2>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Dália</h4>
              <Link to="/order">
                <img
                  src="src/kepek/dalia.jpg"
                  alt="Dália"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Százszorszép</h4>
              <img
                src="src/kepek/szazszorszep.jpg"
                alt="Százszorszép"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Levendula</h4>
              <img
                src="src/kepek/levendula.jpg"
                alt="Levendula"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Petúnia</h4>
              <img
                src="src/kepek/petunia.jpg"
                alt="Petúnia"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Bazsalikom</h4>
              <img
                src="src/kepek/bazsalikom.JPG"
                alt="Bazsalikom"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Rozmaring</h4>
              <img
                src="src/kepek/rozmaring.JPG"
                alt="Rozmaring"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Paradicsom</h4>
              <img
                src="src/kepek/paradicsom.jpg"
                alt="Paradicsom"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Sárgarépa</h4>
              <img
                src="src/kepek/sargarepa.jpg"
                alt="Sárgarépa"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Karalábé</h4>
              <img
                src="src/kepek/karalabe.jpg"
                alt="Karalábé"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Szamóca</h4>
              <img
                src="src/kepek/szamoca.JPG"
                alt="Szamóca"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Málna</h4>
              <img
                src="src/kepek/malna.JPG"
                alt="Málna"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-4 mt-4 arukep">
              <h4>Chili paprika</h4>
              <img
                src="src/kepek/chili-paprika.jpg"
                alt="Chili paprika"
                className="img-fluid"
              />
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
    </>
  );
}
