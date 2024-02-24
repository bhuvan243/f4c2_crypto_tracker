import React, { useContext, useEffect } from "react";
import { formatNumber } from "./functions";
import coinDataContext from "../../context/coinDataContext";

const CoinData = ({ coin }) => {
  const { setCoinData } = useContext(coinDataContext);
  useEffect(() => setCoinData(coin), []);
  
  function coinDataDisplay() {
    console.log("data set successfully", coin);
    setCoinData(coin);
  }
  return (
    <tr className="row" onClick={coinDataDisplay}>
      <td>{coin.market_cap_rank}</td>
      <td>
        <img src={coin.image} alt={coin.name} />
        {coin.name}
      </td>
      <td>${coin.current_price}</td>
      <td>{formatNumber(coin.market_cap)}</td>
      <td>{formatNumber(coin.total_volume)}</td>
      <td>${coin.ath}</td>
    </tr>
  );
};

export default CoinData;
