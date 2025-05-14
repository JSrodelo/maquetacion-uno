import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
