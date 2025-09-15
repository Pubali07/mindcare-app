import { useEffect, useState } from "react";
/*import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";*/
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const bSnap = await getDocs(collection(db, "bookings"));
      setBookings(bSnap.docs.map(doc => doc.data()));

      const pSnap = await getDocs(collection(db, "posts"));
      setPosts(pSnap.docs.map(doc => doc.data()));
    };
    loadData();
  }, []);

  const data = [
    { name: "Bookings", value: bookings.length },
    { name: "Forum Posts", value: posts.length },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
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
