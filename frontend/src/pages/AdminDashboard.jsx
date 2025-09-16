// src/pages/AdminDashboard.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import './AdminDashboard.css';

function AdminDashboard() {
  // Dummy data
  const bookings = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const data = [
    { name: "Bookings", value: bookings.length },
    { name: "Forum Posts", value: posts.length },
  ];

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Overview of bookings and forum posts</p>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
          <Cell fill="#4F46E5" />
          <Cell fill="#22C55E" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default AdminDashboard;
