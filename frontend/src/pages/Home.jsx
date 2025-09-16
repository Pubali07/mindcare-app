import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this
import './Home.css';

function Home() {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tagline">✨ Your journey to wellness starts here</div>
          <h1 className="hero-title">
            Welcome to <span className="highlight">AAশা</span>
          </h1>
          <p className="hero-subtitle">
            Your safe, stigma-free sanctuary for mental health support. <br />
            Find peace, guidance, and healing in a gentle space designed for you.
          </p>
          <div className="hero-buttons">
            <button
              className="button-primary"
              onClick={() => navigate("/chatbot")} // ✅ routing
            >
              💬 Start Conversation
            </button>
            <button
              className="button-secondary"
              onClick={() => navigate("/resources")} // ✅ routing
            >
              📖 Explore Resources
            </button>
          </div>
        </div>
        {/* Floating shapes */}
        <div className="float blue"></div>
        <div className="float purple"></div>
        <div className="float teal"></div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">
          Everything you need for your mental wellness
        </h2>
        <p className="features-subtitle">
          Comprehensive support designed with care and compassion
        </p>
        <div className="features-grid">
          <div
            className="feature-card"
            onClick={() => navigate("/chatbot")} // ✅ navigate
          >
            <div className="feature-icon">💬</div>
            <h3>AI Support</h3>
            <p>Compassionate AI companion available 24/7 for gentle conversations and guidance.</p>
          </div>
          <div
            className="feature-card"
            onClick={() => navigate("/resources")} // ✅ navigate
          >
            <div className="feature-icon">📖</div>
            <h3>Resources</h3>
            <p>Curated library of healing content, meditation guides, and wellness materials.</p>
          </div>
          <div
            className="feature-card"
            onClick={() => navigate("/booking")} // ✅ navigate
          >
            <div className="feature-icon">📅</div>
            <h3>Book Sessions</h3>
            <p>Connect with licensed professionals through our secure, confidential platform.</p>
          </div>
          <div
            className="feature-card"
            onClick={() => navigate("/dashboard")} // ✅ navigate
          >
            <div className="feature-icon">❤️</div>
            <h3>Safe Space</h3>
            <p>Judgment-free environment where your privacy and wellbeing are our priority.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
