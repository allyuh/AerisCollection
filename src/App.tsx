import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [collectionFixed, setCollectionFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const transitionPoint = window.innerHeight;

      if (window.scrollY >= transitionPoint) {
        setCollectionFixed(false);
      } else {
        setCollectionFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <Navbar />

      <main>
        {/* HOME */}
        <div className="home-wrapper">
          <Home />
        </div>

        {/* COLLECTION */}
        <div className="collection-wrapper">
          <section
            id="collection"
            className={`collection ${
              collectionFixed ? "collection-fixed" : "collection-normal"
            }`}
          >
            <h2>Collection</h2>
          </section>
        </div>

        {/* NORMAL SCROLLING SECTIONS */}
        <section id="videos" className="videos">
          <h2>Videos</h2>
        </section>

        <section id="buy" className="buy">
          <h2>Buy Now</h2>
        </section>
      </main>
    </div>
  );
}

export default App;