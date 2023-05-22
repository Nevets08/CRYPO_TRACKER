import React from "react";
import hero from "../images/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="left-hero">
        <h1>Unleashing the Power of Cryptocurrency Tracking</h1>
        <p>
          Discover cryptocurrencies: endless opportunities, decentralized
          finance, borderless digital assets. Invest, trade, and redefine
          money's future in real-time.
        </p>
        <a href="#market" className="button">View</a>
      </div>
      <div className="right-hero">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
