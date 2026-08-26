import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <section id="home">
          <h1>Aeris Collection</h1>
        </section>

        <section id="collection">
          <h2>Collection</h2>
        </section>

        <section id="videos">
          <h2>Videos</h2>
        </section>

        <section id="buy">
          <h2>Buy Now</h2>
        </section>
      </main>
    </div>
  );
}

export default App;