import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import FAQs from "./Components/FAQs";
import Contact from "./Components/Contact";

const AppContent = () => {
  // const location = useLocation();

  // Check if the current path is not "/" (or other paths where you want to hide Welcome)
  // const showWelcome = location.pathname === "/";

  return (
    <>
      <Header />
      <div className="app-container">
        {/* {showWelcome && <Main />} */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
