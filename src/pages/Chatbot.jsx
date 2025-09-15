import { useState, useRef, useEffect } from "react";

const responses = {
  anxiety: "Try a 5-min breathing exercise: inhale 4s, hold 7s, exhale 8s.",
  stress: "Break tasks into smaller goals. Here’s a quick relaxation guide.",
  sleep: "Limit screen time before bed. Try this calming audio: [link]",
};

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = (text) => {
    if (!text) return;
    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      let reply = "I’m here for you. Can you tell me more?";
      for (let key in responses) {
        if (text.toLowerCase().includes(key)) reply = responses[key];
      }
      const botMsg = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-indigo-600">AI First-Aid Chat</h2>

        {/* Quick Suggestions */}
        <div className="flex gap-2 mb-3 justify-center">
          {["anxiety", "stress", "sleep"].map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full hover:bg-indigo-200 transition"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-2 p-3 border-2 border-indigo-200 rounded-xl bg-indigo-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              <p
                className={`max-w-xs px-4 py-2 rounded-2xl break-words shadow-sm ${
                  m.sender === "user"
                    ? "bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl animate-pulse">
                Typing...
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-2 border-indigo-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Type your concern..."
            onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          />
          <button
            onClick={() => handleSend(input)}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
