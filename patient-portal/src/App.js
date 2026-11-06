import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* TOP NAVIGATION BAR */}
        <header className="navbar">
          <div className="nav-brand">
            <span className="brand-title">ABC Healthcare Portal</span>
          </div>
          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
            <NavLink to="/patients" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Patients
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
          </nav>
        </header>

        {/* MAIN ROUTE CONTENT AREA */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 ABC Healthcare Centre & Research Institute. All Rights Reserved. | SPA Version 2.4.0</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;