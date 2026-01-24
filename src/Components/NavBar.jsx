
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky z-50 bg-indigo/60 text-white">
      <div className="flex justify-end items-center p-4">

        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-400">Home</Link>
        
        </div>

        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black/80 px-4 py-4 space-y-3">
          <Link to="/" 
          onClick={() => 
          setIsOpen(false)} className="hover:text-pink-400">Home</Link>
          <Link to="/about"

           onClick={() => setIsOpen(false)}

            className="hover:text-pink-400"

            >About</Link>

        </div>
      )}
    </nav>
  );
}
