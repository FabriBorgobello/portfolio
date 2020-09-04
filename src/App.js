import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/header/NavBar";
import { Header } from "./components/header/Header";
import { Break } from "./components/header/Break";
import { About } from "./components/sections/About";
import { Skill } from "./components/sections/Skill";
import { Work } from "./components/sections/Work";
import { Social } from "./components/sections/Social";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Header />
      <About />
      <Skill />
      <Work />
      <Social />¡
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
