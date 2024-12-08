import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import Auth from "./components/Auth";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/user/:username" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
