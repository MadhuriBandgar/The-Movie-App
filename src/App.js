import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Trending />} exact />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;