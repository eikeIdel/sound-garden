import React from "react";
import "./footer.css";
import Facebook from "./assets/icons/fb.png";
import Instagram from "./assets/icons/insta.png";
import Soundcloud from "./assets/icons/soundcloud.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_links">
        <div className="footer_socialmedia">
          <a
            href="https://www.facebook.com/BotanischerGartenBerlin/"
            target="_blank"
            className="footer_socialmedia-link"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/botanicgardenberlin/"
            target="_blank"
            className="footer_socialmedia-link"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://soundcloud.com/acoustic-refuge/berlin-botanic-garden-tropical/"
            target="_blank"
            className="footer_socialmedia-link"
          >
            <img src={Soundcloud} alt="soundcloud" />
          </a>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2021. Sound Garden</div>
    </footer>
  );
};

export default Footer;
