import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onBookTableClick: () => void;
}

export const Header = ({ onBookTableClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logonobg.png"
            alt="Salman's Sahra & Spice Logo"
            className="h-9 w-9 bg-white rounded-full p-1"
          />
          <div className="text-lg md:text-2xl font-bold">Salman’s Sahra & Spice</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-secondary">Home</a>
          <a href="#" className="hover:text-secondary">About</a>
          <a href="#" className="hover:text-secondary">Portfolio</a>
          <a href="#" className="hover:text-secondary">Clients</a>
          <a href="#" className="hover:text-secondary">Blog</a>
          <a href="#" className="hover:text-secondary">Contact</a>
        </div>

        {/* Book A Table Button */}
        <Button
          onClick={onBookTableClick}
          className="hidden md:block bg-secondary text-black hover:bg-opacity-90"
        >
          Book A Table
        </Button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary text-white">
          <div className="space-y-4 px-4 py-4">
            <a href="#" className="block hover:text-secondary">Home</a>
            <a href="#" className="block hover:text-secondary">About</a>
            <a href="#" className="block hover:text-secondary">Portfolio</a>
            <a href="#" className="block hover:text-secondary">Clients</a>
            <a href="#" className="block hover:text-secondary">Blog</a>
            <a href="#" className="block hover:text-secondary">Contact</a>
            <Button
              onClick={onBookTableClick}
              className="w-full bg-secondary text-black hover:bg-opacity-90"
            >
              Book A Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
