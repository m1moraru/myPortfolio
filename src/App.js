
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Profile from "../src/pages/Profile";
import Skills from "../src/pages/Skills";
import Experience from "../src/pages/Experience";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
