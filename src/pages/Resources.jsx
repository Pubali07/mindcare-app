import React from "react";
import './Resources.css';
import { FaLeaf, FaSun, FaHeart, FaStar, FaMusic, FaVideo } from 'react-icons/fa';

function Resources() {
  const resources = [
    { 
      title: "Mindful Breathing", 
      description: "Gentle breathing exercises to center yourself and find calm in any moment.", 
      icon: <FaSun />, 
      color: "#FACC15",
      type: "article"
    },
    { 
      title: "Sleep Stories", 
      description: "Soothing narratives designed to help you drift into peaceful, restorative sleep.", 
      icon: <FaStar />, 
      color: "#C084FC",
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // example
    },
    { 
      title: "Nature Sounds", 
      description: "Immerse yourself in calming natural environments to reduce stress and anxiety.", 
      icon: <FaLeaf />, 
      color: "#22C55E",
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // example
    },
    { 
      title: "Guided Meditations", 
      description: "Step-by-step meditation practices for beginners and experienced practitioners.", 
      icon: <FaHeart />, 
      color: "#F43F5E",
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // example
    },
    { 
      title: "Relaxing Music", 
      description: "A collection of calming music tracks for focus and relaxation.", 
      icon: <FaMusic />, 
      color: "#3B82F6",
      type: "audio",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    { 
      title: "Yoga Flow Video", 
      description: "Follow along with guided yoga routines to improve mindfulness and flexibility.", 
      icon: <FaVideo />, 
      color: "#8B5CF6",
      type: "video",
      url: "https://www.youtube.com/embed/v7AYKMP6rOE"
    }
  ];

  return (
    <div className="resources-container">
      <h2>Healing Resources</h2>
      <p>Curated content to support your wellness journey</p>

      <div className="resources-grid">
        {resources.map((res, index) => (
          <div key={index} className="resource-card">
            <div className="icon" style={{ backgroundColor: res.color }}>{res.icon}</div>
            <h3>{res.title}</h3>
            <p>{res.description}</p>
            
            {/* Conditional rendering for audio/video */}
            {res.type === "audio" && (
              <audio controls style={{ width: "100%", marginTop: "8px" }}>
                <source src={res.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            {res.type === "video" && (
              <iframe 
                width="100%" 
                height="200" 
                src={res.url} 
                title={res.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ marginTop: "8px", borderRadius: "12px" }}
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
