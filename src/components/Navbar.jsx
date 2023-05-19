import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="logo" href="/">CRYPTO TRACKER</a>
      <div className="navbar-menu">
        <a href="">SECTION</a>
        <a href="">MARKET</a>
        <a href="">JOIN US</a>
      </div>
      <a href="https://discord.com/" target="_blank" className="button">
        OUR DISCORD
      </a>
    </div>
  );
}
