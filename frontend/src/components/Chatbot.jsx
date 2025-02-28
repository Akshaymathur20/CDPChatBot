import React, { useState } from "react";
import InputBox from "./InputBox";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text, sender = "user") => {
    setMessages([...messages, { text, sender }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: `Processing: ${text}`, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white-500 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-2xl font-bold text-center text-gray-800 py-4 bg-blue-600 text-white">CDP Support Chatbot</h1>
        <div className="flex-1 overflow-y-auto p-2 h-96">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}
        </div>
        <InputBox sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
