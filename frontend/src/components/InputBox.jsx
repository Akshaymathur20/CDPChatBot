import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const InputBox = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <div className="flex p-3 border-t bg-gray-100">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ask a question..."
      />
      <button onClick={handleSend} className="ml-3 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default InputBox;
