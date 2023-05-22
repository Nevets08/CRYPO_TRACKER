import React from "react";
import control from "../images/control.png";

export default function TakeControl() {
  return (
    <section className="control" id="control">
      <div className="control-left">
        <h2>Take full control of your crypto</h2>
        <p>
          Step into the realm of financial empowerment and seize the reins of
          your cryptocurrency assets. With our comprehensive platform, gain full
          autonomy over your digital wealth, explore a wide range of investment
          opportunities, and harness the power of decentralized finance.
        </p>
        <br />
        <p>
          Embrace security, flexibility, and unparalleled control as you
          navigate the exciting world of cryptocurrencies with confidence.
        </p>
        <button>JOIN US</button>
      </div>
      <div className="control-right">
        <img src={control} alt="" />
      </div>
    </section>
  );
}
