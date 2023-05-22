import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CoinDetail() {
  const [datas, setDatas] = useState([]);

  const { id } = useParams();
  const { image, name, market_data, description } = datas;
  const fetchData = () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => setDatas(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(datas);
  return (
    <div className="coin-detail">
      <div className="coin-detail-left">
        <img src={image?.large} alt="" />
        <h2>{name}</h2>
        <p>Rank : {datas.coingecko_rank}</p>
      </div>
      <div>
        <div className="coin-detail-right">
          <h3
            className={
              Number(market_data?.price_change_percentage_24h) >= 0
                ? "green"
                : "red"
            }
          >
            <span>24h Change : </span>
            {market_data?.price_change_percentage_24h.toFixed(2)} %
          </h3>
          <h3>
            Price :{" "}
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(market_data?.current_price.eur)}
          </h3>
          <h3>Symbol : {datas.symbol}</h3>
        </div>
        <p className="coin-detail-description">{description?.en}</p>
      </div>
    </div>
  );
}
