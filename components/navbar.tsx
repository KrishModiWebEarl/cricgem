"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-[#1b1253]">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder-logo.png"
            alt="CricGem Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-white text-2xl font-bold">CRICGEM</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/how-to-play" className="hover:text-[#fef0b7] transition-colors">
             Play
          </Link>
          <Link href="/point-system" className="hover:text-[#fef0b7] transition-colors">
            Point System
          </Link>
          <Link href="/about" className="hover:text-[#fef0b7] transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="hover:text-[#fef0b7] transition-colors">
            Blog
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1b1253] px-6 py-4">
          <div className="flex flex-col space-y-4 text-white">
            <Link href="/how-to-play" className="block hover:text-[#fef0b7] transition-colors">
              How to Play
            </Link>
            <Link href="/point-system" className="block hover:text-[#fef0b7] transition-colors">
              Point System
            </Link>
            <Link href="/about" className="block hover:text-[#fef0b7] transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="block hover:text-[#fef0b7] transition-colors">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 