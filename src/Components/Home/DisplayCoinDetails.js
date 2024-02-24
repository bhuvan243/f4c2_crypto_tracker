import React, { useContext, useEffect } from "react";
import coinDataContext from "../../context/coinDataContext";
import "./Styles/displayTab.css";
import { formatNumber, formatDate } from "./functions";

const DisplayCoinDetails = () => {
  const { coinData: coin } = useContext(coinDataContext);

  return (
    <aside className="displayCoinDetails">
      <div className="header alc">
        <div className="alc">
          <img src={coin.image} alt={coin.name} />
          <div>
            <h4>{coin.name}</h4>
            <p>{coin.symbol}</p>
          </div>
        </div>
        <div>
          <h4>${coin.current_price}</h4>
          <p>Current Price</p>
        </div>
      </div>
      <div className="body-details">
        <div>
          <span>MARKET CAP</span>
          <span>{formatNumber(coin.market_cap)}</span>
        </div>
        <div>
          <span>VOLUME</span>
          <span>{formatNumber(coin.total_volume)}</span>
        </div>
        <div>
          <span>24 HR HIGH</span>
          <span className="green">{coin.high_24h}</span>
        </div>
        <div>
          <span>24 HR LOW</span>
          <span className="red">{coin.low_24h}</span>
        </div>
        <div>
          <span>ALL TIME LOW</span>
          <span className="red">{coin.atl}</span>
        </div>
        <div>
          <span>ALL TIME HIGH</span>
          <span className="green">{coin.ath}</span>
        </div>
      </div>
      <div className="last-updated">
        <p>LAST UPDATED</p>
        <p>{formatDate(coin.last_updated)}</p>
      </div>
    </aside>
  );
};

export default DisplayCoinDetails;
