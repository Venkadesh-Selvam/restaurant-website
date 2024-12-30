import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Campaigns from "./pages/Campaingns";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Category from "./categories/Category";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
