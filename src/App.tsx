import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <div className="home-wrapper">
          <Home />
        </div>

        <section id="collection" className="collection">
          <h2>Collection</h2>
        </section>

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