import React from "react";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 p-1">
       <div className="w-full bg-blue-600 text-white text-center py-3 shadow-md">
        <h1 className="text-2xl font-bold">ChatBot</h1>
      </div>
      <Chatbot />
    </div>
  );
};

export default App;
