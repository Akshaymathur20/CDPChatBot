import React from "react";

const Message = ({ text, sender }) => {
  return (
    <div className={`p-3 my-2 rounded-lg max-w-xs ${sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-black"}`}>
      {text}
    </div>
  );
};

export default Message;
