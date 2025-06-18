"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx"; // Optional, for cleaner className conditionals
 
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300",
        isScrolled ? "bg-blue-900/60 backdrop-blur-md" : "bg-[#1b1253]"
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Assets/logo.png"
            alt="CricGem Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          {/* <span className="text-white text-2xl font-bold">CRICGEM</span> */}
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-white text-lg">
          {[
            { href: "/how-to-play", label: "How-to-Play" },
            { href: "/point-system", label: "Point System" },
            { href: "/about", label: "About Us" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline underline-offset-4 decoration-[#fef0b7] transition-colors"
            >
              {label}
            </Link>
          ))}
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
          <div className="flex flex-col space-y-4 text-white text-lg">
            {[
              { href: "/how-to-play", label: "How to Play" },
              { href: "/point-system", label: "Point System" },
              { href: "/about", label: "About Us" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block hover:underline underline-offset-4 decoration-[#fef0b7] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
 