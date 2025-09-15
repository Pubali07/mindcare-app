import { useState } from "react";
//import { collection, addDoc } from "firebase/firestore";
//import { db } from "../firebase";

function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "bookings"), { name, date, time });
    setMsg("Appointment booked successfully!");
    setName(""); setDate(""); setTime("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2" />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Book</button>
      </form>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </div>
  );
}

export default Booking;
