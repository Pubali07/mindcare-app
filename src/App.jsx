/*import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Resources from "./pages/Resources";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
     
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-600">
                MindCare
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="hover:text-indigo-600">Home</Link>
              <Link to="/chatbot" className="hover:text-indigo-600">Chatbot</Link>
              <Link to="/resources" className="hover:text-indigo-600">Resources</Link>
              <Link to="/booking" className="hover:text-indigo-600">Booking</Link>
              <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                ☰
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
            <Link to="/chatbot" className="block px-4 py-2 hover:bg-gray-100">Chatbot</Link>
            <Link to="/resources" className="block px-4 py-2 hover:bg-gray-100">Resources</Link>
            <Link to="/booking" className="block px-4 py-2 hover:bg-gray-100">Booking</Link>
            <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
          </div>
        )}
      </nav>

   
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

*/
/*
import { useState } from "react";
import Chatbot from "./pages/Chatbot";
import Booking from "./pages/Booking";
import Resources from "./pages/Resources";
import Forum from "./pages/Home";
import AdminDashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("chat");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="flex gap-4 mb-4">
        <button onClick={() => setPage("chat")}>Chatbot</button>
        <button onClick={() => setPage("resources")}>Resources</button>
        <button onClick={() => setPage("booking")}>Booking</button>
        <button onClick={() => setPage("forum")}>Forum</button>
        <button onClick={() => setPage("admin")}>Admin</button>
      </nav>

      {page === "chat" && <Chatbot />}
      {page === "resources" && <Resources />}
      {page === "booking" && <Booking />}
      {page === "forum" && <Forum />}
      {page === "admin" && <AdminDashboard />}
    </div>
  );
}

export default App;
*/

import { useState } from "react";
import { Heart, MessageCircle, BookOpen, Calendar, BarChart3, Menu, X, Sparkles, Leaf, Sun, Send } from "lucide-react";

// Home Component
function Home({ setCurrentPage }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-slate-600 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Your journey to wellness starts here
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 leading-tight">
              Welcome to
              <span className="block font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                MindCare
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Your safe, stigma-free sanctuary for mental health support. 
              <br />Find peace, guidance, and healing in a gentle space designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('chatbot')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start Conversation
              </button>
              <button 
                onClick={() => setCurrentPage('resources')}
                className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200"
              >
                <BookOpen className="w-5 h-5" />
                Explore Resources
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-float"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Everything you need for your mental wellness</h2>
            <p className="text-slate-600 text-lg">Comprehensive support designed with care and compassion</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              onClick={() => setCurrentPage('chatbot')}
              className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">AI Support</h3>
              <p className="text-slate-600 leading-relaxed">Compassionate AI companion available 24/7 for gentle conversations and guidance.</p>
            </div>
            
            <div 
              onClick={() => setCurrentPage('resources')}
              className="group p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-teal-100/50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Resources</h3>
              <p className="text-slate-600 leading-relaxed">Curated library of healing content, meditation guides, and wellness materials.</p>
            </div>
            
            <div 
              onClick={() => setCurrentPage('booking')}
              className="group p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Book Sessions</h3>
              <p className="text-slate-600 leading-relaxed">Connect with licensed professionals through our secure, confidential platform.</p>
            </div>
            
            <div 
              onClick={() => setCurrentPage('dashboard')}
              className="group p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-100/50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Safe Space</h3>
              <p className="text-slate-600 leading-relaxed">Judgment-free environment where your privacy and wellbeing are our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", content: "Hello! I'm here to listen and support you. How are you feeling today?" }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "user", content: message }]);
      setMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: "bot", 
          content: "Thank you for sharing. I understand this can be difficult. Would you like to talk more about what's on your mind?" 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-slate-800 mb-4">Compassionate AI Support</h2>
        <p className="text-slate-600">A safe space to share your thoughts and feelings</p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="h-96 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-blue-50/30 to-white">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-6 py-4 rounded-3xl ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-white text-slate-700 shadow-md border border-slate-100'
              } animate-slide-up`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Share what's on your mind..."
              className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={handleSend}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Resources() {
  const resources = [
    {
      title: "Mindful Breathing",
      description: "Gentle breathing exercises to center yourself and find calm in any moment.",
      icon: <Sun className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Sleep Stories",
      description: "Soothing narratives designed to help you drift into peaceful, restorative sleep.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Nature Sounds",
      description: "Immerse yourself in calming natural environments to reduce stress and anxiety.",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Guided Meditations",
      description: "Step-by-step meditation practices for beginners and experienced practitioners.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-400 to-red-400"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-4">Healing Resources</h2>
        <p className="text-slate-600 text-lg">Curated content to support your wellness journey</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {resources.map((resource, index) => (
          <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.color} flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-300`}>
              {resource.icon}
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-3">{resource.title}</h3>
            <p className="text-slate-600 leading-relaxed">{resource.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-light text-slate-800 mb-4">Need More Support?</h3>
        <p className="text-slate-600 mb-6">Our comprehensive library includes guided journaling, crisis resources, and wellness challenges.</p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
          Explore All Resources
        </button>
      </div>
    </div>
  );
}

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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-4">Book a Session</h2>
        <p className="text-slate-600 text-lg">Connect with licensed mental health professionals</p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-6">Choose Your Counselor</h3>
            <div className="space-y-4">
              {counselors.map((counselor, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedCounselor(counselor)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedCounselor?.name === counselor.name 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300' 
                      : 'bg-gradient-to-r from-slate-50 to-blue-50 hover:shadow-md'
                  }`}
                >
                  <h4 className="font-medium text-slate-800">{counselor.name}</h4>
                  <p className="text-slate-600 text-sm">{counselor.specialty}</p>
                  <p className="text-blue-600 text-sm font-medium mt-2">Available: {counselor.available}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-slate-800 mb-6">Session Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Session Type</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>Individual Therapy (50 min)</option>
                  <option>Couples Therapy (80 min)</option>
                  <option>Group Session (90 min)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Brief Description (Optional)</label>
                <textarea 
                  rows="3" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                  placeholder="What would you like to focus on in your session?"
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Confidential Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-4">Wellness Dashboard</h2>
        <p className="text-slate-600 text-lg">Anonymous insights and community trends</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-medium text-slate-800 mb-6">Community Wellness Trends</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-slate-600">Interactive wellness charts would appear here</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-6">
            <h4 className="font-medium text-slate-800 mb-2">Active Support Sessions</h4>
            <p className="text-3xl font-light text-teal-600">247</p>
            <p className="text-slate-600 text-sm">This week</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6">
            <h4 className="font-medium text-slate-800 mb-2">Resources Accessed</h4>
            <p className="text-3xl font-light text-purple-600">1,832</p>
            <p className="text-slate-600 text-sm">This month</p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6">
            <h4 className="font-medium text-slate-800 mb-2">Community Growth</h4>
            <p className="text-3xl font-light text-rose-600">+12%</p>
            <p className="text-slate-600 text-sm">From last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'chatbot':
        return <Chatbot />;
      case 'resources':
        return <Resources />;
      case 'booking':
        return <Booking />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-xl shadow-lg fixed w-full z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-light text-slate-800">
                  Mind<span className="font-medium">Care</span>
                </span>
              </button>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`font-medium transition-colors duration-300 ${currentPage === 'home' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('chatbot')}
                className={`font-medium transition-colors duration-300 ${currentPage === 'chatbot' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              >
                Support
              </button>
              <button 
                onClick={() => setCurrentPage('resources')}
                className={`font-medium transition-colors duration-300 ${currentPage === 'resources' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              >
                Resources
              </button>
              <button 
                onClick={() => setCurrentPage('booking')}
                className={`font-medium transition-colors duration-300 ${currentPage === 'booking' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              >
                Booking
              </button>
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className={`font-medium transition-colors duration-300 ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              >
                Dashboard
              </button>
            </div>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl hover:bg-slate-100 transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100">
            <div className="px-6 py-4 space-y-2">
              <button 
                onClick={() => { setCurrentPage('home'); setIsOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('chatbot'); setIsOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-300"
              >
                Support
              </button>
              <button 
                onClick={() => { setCurrentPage('resources'); setIsOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-300"
              >
                Resources
              </button>
              <button 
                onClick={() => { setCurrentPage('booking'); setIsOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-300"
              >
                Booking
              </button>
              <button 
                onClick={() => { setCurrentPage('dashboard'); setIsOpen(false); }}
                className="block w-full text-left py-3 px-4 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-300"
              >
                Dashboard
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="pt-20 px-6 pb-12">
        {renderCurrentPage()}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
}