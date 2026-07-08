import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden font-grot">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0%, rgba(210,175,105,0.14) 42%, transparent 54%), linear-gradient(65deg, transparent 0%, rgba(255,255,255,0.05) 48%, transparent 62%)",
          backgroundSize: "220% 220%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
