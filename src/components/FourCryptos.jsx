import React, { useEffect, useState } from "react";
import axios from "axios";
import fourCryptosData from "../data/fourCryptosData.json";

export default function FourCryptos() {
  const [datas, setDatas] = useState([]);

  const fetchData = () => {
    /*axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      )
      .then((response) => setDatas(response.data));*/

    setDatas(fourCryptosData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(datas);
  return (
    <div className="four-cryptos">
      {datas.map((coin) => (
        <div>
          <img src={coin.image} alt="" />
          <div className="four-cryptos-title">
            <h5>{coin.name}</h5>
            <h5
              className={
                Number(coin.price_change_percentage_24h) >= 0 ? "green" : "red"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}
            </h5>
            <h5>{coin.current_price.toFixed(2)} €</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
