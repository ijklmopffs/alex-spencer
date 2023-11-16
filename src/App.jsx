import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Manage from "./pages/Manage";
import Bookmark from "./pages/Bookmark";
import Insure from "./pages/Insure";
import Fylo from "./pages/Fylo";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/manage" element={<Manage />} />
      <Route path="/portfolio/bookmark" element={<Bookmark />} />
      <Route path="/portfolio/insure" element={<Insure />} />
      <Route path="/portfolio/fylo" element={<Fylo />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
