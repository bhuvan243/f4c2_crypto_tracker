import axios from "axios";
// import cryptoData from "./cryptodata.json";

export async function getCryptodata(setCryptoData) {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false)";
  // const url = "https://dummyjson.com/recipes";
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      console.log("Setting data into state", response.data);
      setCryptoData(response.data);
    }
  } catch (error) {
    console.log(error.message, "Setting hard coded data for usage");
    // setCryptoData(cryptoData);
  }
}
export function formatNumber(num, precision = 2) {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
export function formatDate(value) {
  // const date = value.split("T")[0];
  // const time = value.split("T")[1].split("Z")[0];
  // return `${date} at ${time}`;
  return value;
}
