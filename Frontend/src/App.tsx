import type React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contactme from "./Pages/ContactMe";
import PortfolioPage from "./Pages/PortfolioPage";
import SkillsPage from "./Pages/SkillsPage";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-[var(--color-secondary)]">
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/contact" element= {<Contactme/>} />
          <Route path="/portfolio" element= {<PortfolioPage/>} />
          <Route path="/skills" element= {<SkillsPage/>} />
          <Route path="*" element= {<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
