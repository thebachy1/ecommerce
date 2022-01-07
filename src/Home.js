import React from "react";
import Product from "./Product";
import home from "./images/bruma-home.jpg";
import lata from "./images/producto-lata.jpg";
import tarroAmbar from "./images/producto-tarro-ambar.jpg";
import tarroChico from "./images/producto-tarro-chico.jpg";
import tarroKris from "./images/producto-tarro-kris.jpg";
import tarroGrande from "./images/producto-tarro-grande.jpg";
import tarro7 from "./images/producto-tarro-7.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home flex justify-center mx-auto max-w-[1500px]">
      <div className="home_container">
        <img className="home_image w-full z-[-1] mb-[-150px]" src={home} />
        <div className="home_row flex z-10 mx-[5px]">
          <Product id="1" title="Lata chica" price={85} image={lata} />
          <Product
            id="2"
            title="Tarro ambar chico"
            price={85}
            image={tarroAmbar}
          />
        </div>
        <div className="home_row flex z-10 mx-[5px]">
          <Product id="3" title="Tarro chico" price={70} image={tarroChico} />
          <Product id="4" title="Tarro kris" price={110} image={tarroKris} />
          <Product
            id="5"
            title="Tarro grande"
            price={170}
            image={tarroGrande}
          />
        </div>
        <div className="home_row flex z-10 mx-[5px]">
          <Product id="6" title="Tarro 7" price={110} image={tarro7} />
        </div>
      </div>
    </div>
  );
}

export default Home;
