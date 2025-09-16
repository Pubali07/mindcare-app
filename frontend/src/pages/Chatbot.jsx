import React, { useState } from "react";
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Conversation flow with solutions
  const conversationFlow = [
    {
      keywords: ["sad", "depressed", "unhappy", "stress", "anxious"],
      reply: "I hear you. Here are some ways to feel better:",
      solutions: [
        { text: "💨 Breathing Exercise", link: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk" },
        { text: "🎵 Calming Music", link: "https://www.youtube.com/results?search_query=calming+music" },
        { text: "📝 Journaling Prompt", link: "https://positivepsychology.com/journaling-for-mental-health/" }
      ]
    },
    {
      keywords: ["breathing"],
      reply: "Try this 5-minute guided breathing exercise to calm your mind:",
      solutions: [
        { text: "💨 Watch Breathing Video", link: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk" }
      ]
    },
    {
      keywords: ["music", "calming music"],
      reply: "Here’s some calming music you can listen to:",
      solutions: [
        { text: "🎵 Listen to Music", link: "https://www.youtube.com/results?search_query=calming+music" }
      ]
    },
    {
      keywords: ["meditation"],
      reply: "Guided meditation can help center your thoughts:",
      solutions: [
        { text: "🧘 Guided Meditation", link: "https://www.youtube.com/results?search_query=guided+meditation" }
      ]
    },
    {
      keywords: ["happy", "good", "fine"],
      reply: "That's wonderful! Keep practicing gratitude and positive habits 🌸"
    },
    {
      keywords: [],
      reply: "Tell me more about how you feel."
    }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    const userInput = input.toLowerCase();
    setInput("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      let matched = conversationFlow.find(flow =>
        flow.keywords.some(k => userInput.includes(k))
      );

      if (!matched) matched = conversationFlow[conversationFlow.length - 1];

      setMessages(prev => [
        ...prev,
        { text: matched.reply, sender: "bot", solutions: matched.solutions || [] }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <h2>Mental Health Chatbot 💬</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
            {msg.solutions && msg.solutions.length > 0 && (
              <div className="solutions">
                {msg.solutions.map((sol, i) => (
                  <a
                    key={i}
                    href={sol.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="solution-link"
                  >
                    {sol.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        {isTyping && <div className="chat-message bot">Typing...</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
