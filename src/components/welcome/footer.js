import React from "react";
import "./footer.css";

import Facebook from "./assets/socialmedia/fb.png";
import Instagram from "./assets/socialmedia/insta.png";
import Soundcloud from "./assets/socialmedia/soundcloud.png";
import Youtube from "./assets/socialmedia/yt.png";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" width="3%" />
            </a>
            &nbsp;
            <a
              class="social-icon-link instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" width="3%" />
            </a>
            &nbsp;
            <a
              class="social-icon-link soundcloud"
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener"
              aria-label="Soundcloud"
            >
              <img src={Soundcloud} alt="Soundcloud" width="3%" />
            </a>
            &nbsp;
            <a
              class="social-icon-link youtube"
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <img src={Youtube} alt="YouTube" width="3%" />
            </a>
          </div>
          <small class="website-rights">© 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
