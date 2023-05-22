import React from "react";
import navigate from "../images/navigate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCoins,
  faBarsProgress,
  faUnlock,
  faMedal,
  faHouseLock,
} from "@fortawesome/free-solid-svg-icons";

export default function NavigateSection() {
  return (
    <section id="navigate-section">
      <h2>Navigating the World of Cryptocurrencies</h2>
      <div className="navigate">
        <div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faChartLine} />
              Your All-in-One Crypto Solution
            </h5>
            <p>
              Simplifying, managing, and maximizing your crypto investments
              effortlessly.
            </p>
          </div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faCoins} />
              Stay Ahead in the Crypto Market
            </h5>
            <p>
              Real-time tracking and analysis for informed crypto investment
              decisions.
            </p>
          </div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faBarsProgress} />
              Bridge the Gap to Digital Wealth
            </h5>
            <p>Seamlessly access and manage your crypto assets with ease.</p>
          </div>
        </div>
        <img src={navigate} alt="" />
        <div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faUnlock} />
              Unlocking the Secrets of the Cryptocurrency World
            </h5>
            <p>
              Stay informed with insider insights and gain a competitive edge.
            </p>
          </div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faMedal} />
              Empowering You for Crypto Success
            </h5>
            <p>
              Tools, insights, and strategies for achieving your crypto goals.
            </p>
          </div>
          <div className="navigate-card">
            <h5>
              <FontAwesomeIcon icon={faHouseLock} />
              Securely Safeguard Your Digital Assets
            </h5>
            <p>Protect and store your cryptocurrencies with peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
