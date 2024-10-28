import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
