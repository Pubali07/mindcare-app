import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Resources from "./pages/Resources";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Global CSS
import './App.css';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">AAশা</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/chatbot">Support</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </div>
        </div>
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
}
