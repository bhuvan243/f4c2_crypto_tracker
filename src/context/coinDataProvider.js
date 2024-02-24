import React, { useState } from "react";
import coinDataContext from "./coinDataContext";

const CoinDataProvider = (props) => {
  const [coinData, setCoinData] = useState({});
  return (
    <coinDataContext.Provider
      value={{
        coinData,
        setCoinData,
      }}
    >
      {props.children}
    </coinDataContext.Provider>
  );
};

export default CoinDataProvider;
