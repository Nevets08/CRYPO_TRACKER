import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainCoinList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10&page=${currentPage}`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleClick = (e) => {
    if (e.target.name === "next") {
      setCurrentPage(currentPage + 1);
    }

    if (e.target.name === "previous") {
      if (currentPage <= 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div id="market">
      <h2>Current Market</h2>
      <div className="crypto-title">
        <h4>COIN</h4>
        <h4>PRICE</h4>
        <h4>24H CHANGE</h4>
        <h4>MARKET CAP</h4>
      </div>
      {data.map((coin) => (
        <Link
          to={`/coin/${coin.id}`}
          key={coin.id}
          className="crypto-container"
        >
          <div className="crypto-name">
            <img src={coin.image} alt="" />
            <p>{coin.name}</p>
          </div>
          <p>{coin.current_price.toFixed(2)} €</p>
          <p
            className={
              Number(coin.price_change_percentage_24h) >= 0 ? "green" : "red"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)} %
          </p>
          <p>
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
            }).format(coin.market_cap)}
          </p>
        </Link>
      ))}
      {currentPage <= 1 ? (
        ""
      ) : (
        <button onClick={handleClick} type="button" name="previous">
          Previous page
        </button>
      )}
      <button onClick={handleClick} type="button" name="next">
        Next page
      </button>
    </div>
  );
}
