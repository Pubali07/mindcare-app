import React, { useState } from "react";
import './Booking.css';

function Booking() {
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("Individual Therapy (50 min)");
  const [description, setDescription] = useState("");

  const counselors = [
    { name: "Dr. Sarah Chen", specialty: "Anxiety & Depression", available: "Today 2:00 PM" },
    { name: "Dr. Michael Rodriguez", specialty: "Trauma Therapy", available: "Tomorrow 10:00 AM" },
    { name: "Dr. Emma Thompson", specialty: "Relationship Counseling", available: "Tomorrow 3:00 PM" }
  ];

  const handleSubmit = () => {
    alert("Session booked successfully! You'll receive a confirmation email shortly.");
  };

  return (
    <div className="booking-container">
      <h2>Book a Session</h2>
      <p>Connect with licensed mental health professionals</p>

      <div className="booking-grid">
        <div className="counselors">
          <h3>Choose Your Counselor</h3>
          {counselors.map((counselor, index) => (
            <div
              key={index}
              className={`counselor-card ${selectedCounselor?.name === counselor.name ? 'selected' : ''}`}
              onClick={() => setSelectedCounselor(counselor)}
            >
              <h4>{counselor.name}</h4>
              <p>{counselor.specialty}</p>
              <p className="available">Available: {counselor.available}</p>
            </div>
          ))}
        </div>

        <div className="session-details">
          <h3>Session Details</h3>

          <label>Preferred Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <label>Session Type</label>
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option>Individual Therapy (50 min)</option>
            <option>Couples Therapy (80 min)</option>
            <option>Group Session (90 min)</option>
          </select>

          <label>Brief Description (Optional)</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What would you like to focus on in your session?"
          ></textarea>

          <button onClick={handleSubmit}>Book Confidential Session</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
