import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import EmotionDetection from "./Pages/EmotionDetection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emotion-detection" element={<EmotionDetection />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
