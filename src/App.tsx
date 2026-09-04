import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Video from "./components/Video";
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
          <div
            className={`collection ${
              collectionFixed
                ? "collection-fixed"
                : "collection-normal"
            }`}
          >
            <Collection />
          </div>
        </div>


        <Video />

        <section id="buy" className="buy">
          <h2>Buy Now</h2>
        </section>
      </main>
    </div>
  );
}

export default App;