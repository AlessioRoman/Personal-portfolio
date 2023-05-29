import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import EarthCanvas from "./Components/EarthCanvas";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div
          id="landing-container"
          className="flex m-auto justify-center items-center gap-5"
        >
          <div id="earth-container">
            <EarthCanvas />
          </div>
          <div id="hero-container">
            <Hero />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
