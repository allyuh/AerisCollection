import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
    <img src="/images/bg/riotlogo.png" alt="Riot Games" />
    </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#collection">Collection</a>
        <a href="#videos">Videos</a>
        <a href="#buy">Buy Now</a>
      </nav>

      <div className="footer-socials" aria-label="Social media links">
        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://x.com/VALORANT" aria-label="X">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/valorant/" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/VALORANTph/?brand_redir=103808897687593" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>

      <p className="footer-copy">
        © 2020-2026 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
      </p>
    </footer>
  );
}

export default Footer;