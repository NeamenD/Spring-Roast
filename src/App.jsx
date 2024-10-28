import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
// import Home from "./assets/pages/Home";
// import About from "./assets/pages/About";
// import Shop from "./assets/pages/Shop";
// import Subscription from "./assets/pages/Subscription";
// import Contact from "./assets/pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
