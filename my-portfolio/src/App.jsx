import "./App.css";
import { Routes, Route } from "react-router";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
