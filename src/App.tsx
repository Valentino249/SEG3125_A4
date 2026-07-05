import { useState } from "react";

import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import LogoBand from "./components/LogoBand";
import Search from "./components/Search";
import Checkout from "./components/Checkout.tsx"
import Feedback from "./components/Feedback.tsx"


import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="flex flex-col items-center">
      <LogoBand />

      <Header onNavigate={setCurrentPage} />

      {currentPage === "home" && <Hero />}
      {currentPage === "search" && <Search onNavigate={setCurrentPage}/> }
      {currentPage === "checkout" && <Checkout onNavigate={setCurrentPage}/>}
      {currentPage === "feedback" && <Feedback onNavigate={setCurrentPage}/>}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;