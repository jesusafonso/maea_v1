import React from "react";
import logoImage from "../assets/img/logo.png";

export default function Logo({ className = "", scrolled = false, showText = true }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Organizações M.F Logo"
        className="h-10 w-auto mr-2"
      />
      {showText && (
        <span className={`font-bold text-lg transition-all duration-300 ${
          scrolled ? 'text-blueGray-700' : 'text-white'
        }`}>
          MAEA SOLUTIONS
        </span>
      )}
    </div>
  );
} 