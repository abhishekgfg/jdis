import React, { useState, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋, I’m JD Infotech AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const contactInfo = `\n\n📞 Contact Our Team:

👨‍💼 Abhishek Kumar Pandey
Phone: +91 6202000340
Email: abhishek8579013@gmail.com
WhatsApp: https://wa.me/916202000340

👨‍💻 Aviraj
Phone: +91 6200594193
Email: aviraj0403@gmail.com
WhatsApp: https://wa.me/916200594193

👨‍💼 Hritik Kumar
Email: hritikcse859@gmail.com
Phone: +91 6209015004`;

  // ✅ Auto open chat after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "🤔 Still confused? Please i will guide you ask anything or please contact us!" + contactInfo }
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    const userMsg = input.toLowerCase();
    setInput("");

    setTimeout(() => {
      let reply = "";

      // Price related
      if (userMsg.includes("price") || userMsg.includes("cost") || userMsg.includes("website")) {
        if (userMsg.includes("static")) {
          reply = "💰 Static Website Price: ₹19,999 (under 20,000)";
        } else if (userMsg.includes("dynamic")) {
          reply = "💰 Dynamic Website Price Range: ₹34,999 – ₹74,999";
        } else if (userMsg.includes("premium")) {
          reply = "💎 Premium Website (All Integrations) starts at ₹79,999";
        } else {
          reply = "We offer Static, Dynamic & Premium websites. 🔹 Static under ₹20,000 🔹 Dynamic ₹34,999 – ₹74,999 🔹 Premium from ₹79,999";
        }
        reply += contactInfo;
      }
      // Services
      else if (userMsg.includes("service") || userMsg.includes("offer")) {
        reply = `🛠️ Our Services:\n- Website Development (Static, Dynamic, Premium)\n- Mobile App Development 📱\n- SEO & Digital Marketing 📈\n- Cloud Hosting ☁️\n- Maintenance & Support 🔧\n${contactInfo}`;
      }
      // About Company
      else if (userMsg.includes("about") || userMsg.includes("company") || userMsg.includes("who")) {
        reply = `🏢 JD Infotech is a digital solutions company based in Noida, UP. We provide end-to-end IT services from website development to digital marketing, helping businesses grow online.${contactInfo}`;
      }
      // Process / Timeline
      else if (userMsg.includes("how") || userMsg.includes("process") || userMsg.includes("time") || userMsg.includes("start")) {
        reply = `📌 Project Process:\n1️⃣ Discussion & Requirement Gathering\n2️⃣ Quotation & Agreement\n3️⃣ Design & Development\n4️⃣ Testing & Review\n5️⃣ Launch & Support\n\n⏳ Timeline depends on project type: Static (1-2 weeks), Dynamic (3-5 weeks), Premium (5-8 weeks).${contactInfo}`;
      }
      // Support
      else if (userMsg.includes("support") || userMsg.includes("help") || userMsg.includes("issue") || userMsg.includes("bug")) {
        reply = `🛠️ We provide lifetime support & bug fixing for all projects.\n🔄 Free updates for 6 months included.\n📞 You can reach us anytime for urgent support.${contactInfo}`;
      }
      // Default
      else {
        reply = "🤔 I didn’t understand that. You can ask me about:\n- Website Prices\n- Our Services\n- Company Info\n- Project Process\n- Support & Maintenance\n" + contactInfo;
      }

      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="font-semibold">JD Infotech AI Chat</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto whitespace-pre-line">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 outline-none"
            />
            <button type="submit" className="p-3 text-blue-600 hover:text-blue-800">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
