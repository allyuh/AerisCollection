import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Video from "./components/Video";
import BuyNow from "./components/BuyNow";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [collectionFixed, setCollectionFixed] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const home = document.getElementById("home");

        if (!home) {
          return;
        }

        const homeBottom = home.offsetTop + home.offsetHeight;
        setCollectionFixed(window.scrollY < homeBottom);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, []);

  return (
    <div className="page">
      <Navbar />

      <main>
        <div className="transition-stage">
          <div className="home-wrapper">
            <Home />
          </div>

          <div
            id="collection"
            className={`collection-wrapper ${
              collectionFixed ? "collection-is-fixed" : "collection-is-normal"
            }`}
          >
            <div className="collection">
              <Collection />
            </div>
          </div>
        </div>

        <Video />
        <BuyNow />
        <Footer />
      </main>
    </div>
  );
}

export default App;