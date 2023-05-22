import React from "react";
import MainCoinList from "../components/CoinMainList";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FourCryptos from "../components/FourCryptos";
import TakeControl from "../components/TakeControl";
import NavigateSection from "../components/NavigateSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FourCryptos />
      <MainCoinList />
      <TakeControl />
      <NavigateSection />
    </div>
  );
}
