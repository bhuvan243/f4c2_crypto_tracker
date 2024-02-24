import React from "react";
import "./Styles/tableLayout.css";
import CoinData from "./CoinData";

const TableLayout = ({ cryptoData }) => {
  // console.log(cryptoData);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>All Time High</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData.map((coin, index) => (
          <CoinData key={index} coin={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default TableLayout;
