import "../assets/styles/navbar.css";

import {
  House,
  Layers,
  Play,
  ShoppingCart,
} from "lucide-react";

function Navbar() {
  const scrollToCollection = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    const home = document.getElementById("home");

    window.scrollTo({
      top: home?.offsetHeight ?? window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <a href="#home" aria-label="Home">
        <span className="navbar-text">Home</span>
        <House className="navbar-icon" />
      </a>

      <a
        href="#collection"
        onClick={scrollToCollection}
        aria-label="Collection"
      >
        <span className="navbar-text">Collection</span>
        <Layers className="navbar-icon" />
      </a>

      <a href="#videos" aria-label="Videos">
        <span className="navbar-text">Videos</span>
        <Play className="navbar-icon" />
      </a>

      <a href="#buy" aria-label="Buy Now">
        <span className="navbar-text">Buy Now</span>
        <ShoppingCart className="navbar-icon" />
      </a>
    </nav>
  );
}

export default Navbar;