import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faFacebook,
  faYouTube,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDiscord} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faYouTube} />
      </div>
    </div>
  );
}
