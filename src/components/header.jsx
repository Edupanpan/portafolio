import React, { useState } from "react";
import '../index.css';
import github from '../images/github.svg';
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="flex justify-between items-center m-5 text-xl relative">
      {/* Botones a la izquierda */}
      <div className="flex items-center z-50">
        <button
          onClick={toggleVisibility}
          className={`mr-4 relative inline-flex items-center gap-1 w-24 h-10 px-6 py-2 bg-[#37554a] text-[#f6d4b1] border border-[#f6d4b1] shadow-[6px_6px_0px_rgba(82,82,82,0.25)] transition-all duration-300 cursor-pointer transform hover:scale-105 ${isVisible ? "bg-slate-600" : "bg-slate-400"}`}
        >
          {/* SVG con color dinámico */}
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="3.2" y="0" fill="#f6d4b1"></rect>
            <rect width="16" height="3.2" y="6.4" fill="#f6d4b1"></rect>
            <rect width="16" height="3.2" y="12.8" fill="#f6d4b1"></rect>
          </svg>
        </button>

        <a href="https://www.linkedin.com/in/eduardo-silva-arellana-4679b133b/" target="_blank" rel="noopener noreferrer">
          <button button className="flex items-center justify-center gap-2 w-20 h-10 px-6 py-2 bg-[#39594D] text-[#f6d4b1] border border-[#f6d4b1] shadow-[6px_6px_0px_rgba(82,82,82,0.25)] transition-all duration-300 cursor-pointer transform hover:scale-105">
            <span>IN</span>
          </button>
        </a>
        
        <a href="https://github.com/Edupanpan" target="_blank" rel="noopener noreferrer">
          <button button className="flex items-center justify-center gap-2 w-40 h-10 px-6 py-2 bg-[#39594D] text-[#f6d4b1] border border-[#f6d4b1] shadow-[6px_6px_0px_rgba(82,82,82,0.25)] transition-all duration-300 cursor-pointer transform hover:scale-105">
            <img src={github} className="w-6 h-6" alt="GitHub" />
            <span>GitHub</span>
          </button>
        </a>

      </div>
      
      {/* Título a la derecha */}
      <ul className="flex justify-end items-center z-50">
        <li className="text-right mr-4">Eduardo Silva</li>
      </ul>

      {/* Fondo animado */}
      <div
        className={`fixed top-0 left-0 w-1/2 h-1/2 bg-[#A6330A] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} z-40`}
        style={{ transformOrigin: "center left" }}
      >
        <ul className="ml-5 w-full h-full flex flex-col justify-center items-start text-5xl text-[#f6d4b1] ">
          <li className=" w-1/2 mb-4 hover:border-b-2">Inicio</li>
          <li className="w-1/2 mb-4 hover:border-b-2">Proyectos</li>
          <li className="w-1/2 mb-4 hover:border-b-2  ">Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
