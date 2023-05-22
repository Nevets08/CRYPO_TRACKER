import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">CRYPTO TRACKER</Link>
      <div className="navbar-menu">
        <a href="/">HOME</a>
        <a href="/#market">MARKET</a>
        <a href="/#control">JOIN US</a>
        <a href="/#navigate-section">OUR PHILOSOPHY</a>
      </div>
      <a href="https://discord.com/" target="_blank" className="button">
        OUR DISCORD
      </a>
    </div>
  );
}
