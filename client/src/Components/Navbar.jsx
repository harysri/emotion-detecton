//client/src/Components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Menu, X, Sparkles, User, LogIn, Music } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-4 h-4" /> },
    {
      name: "Face Detection",
      path: "/emotion-detection",
      icon: <Music className="w-4 h-4" />,
    },
    // { name: "Login", path: "/login", icon: <LogIn className="w-4 h-4" /> },
    // { name: "Sign Up", path: "/signup", icon: <User className="w-4 h-4" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO SECTION */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                <Music className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tight">
                Face
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Tunes
                </span>
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Emotion-Powered Music
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.icon}
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-700 transition-all duration-300"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800/50 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-full text-base font-medium transition-all duration-300
                  ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <div
                  className={`
                  p-2 rounded-full
                  ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "bg-slate-800/50"
                  }
                `}
                >
                  {React.cloneElement(item.icon, {
                    className: `w-4 h-4 ${
                      isActive(item.path) ? "text-white" : "text-slate-400"
                    }`,
                  })}
                </div>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Animated underline for active desktop nav */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
