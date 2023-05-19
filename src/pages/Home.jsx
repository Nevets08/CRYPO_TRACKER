import React from "react";
import MainCoinList from "../components/CoinMainList";
import "../assets/style.css";
import SponsorsBanner from "../components/SponsorsBanner";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FourCryptos from "../components/FourCryptos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FourCryptos />
      <SponsorsBanner />
      <MainCoinList />
    </div>
  );
}
