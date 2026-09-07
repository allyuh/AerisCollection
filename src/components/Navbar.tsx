import "../assets/styles/navbar.css";

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
      <a href="#home">Home</a>

      <a href="#collection" onClick={scrollToCollection}>
        Collection
      </a>

      <a href="#videos">Videos</a>
      <a href="#buy">Buy Now</a>
    </nav>
  );
}

export default Navbar;