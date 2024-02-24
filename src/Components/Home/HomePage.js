import React, { useState, useEffect } from "react";
import "./Styles/homePage.css";
import TableLayout from "./TableLayout";
import DisplayCoinDetails from "./DisplayCoinDetails";
import { getCryptodata } from "./functions";

const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    getCryptodata(setCryptoData);
  }, []);
  // console.log(cryptoData);

  return (
    <div className="homePage">
      <h1>Crypto Tracker</h1>
      <section className="layout">
        <TableLayout cryptoData={cryptoData} />
        <DisplayCoinDetails />
      </section>
    </div>
  );
};

export default HomePage;
