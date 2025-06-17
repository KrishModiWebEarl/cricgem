import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Facebook, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b1253] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
          <div>
            {/* Brand */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/Assets/logo.png"
                  alt="CricGem Logo"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] object-contain"
                />
                <span className="text-2xl font-semibold text-[#fef0b7]">CRICGEM</span>
              </div>
              <hr className="border-white/30 w-52 mb-4" />
              {/* Social Icons */}
              <div className="flex space-x-6">
                <Youtube className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
                <Facebook className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
                <Play className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-[#fef0b7]">
                About Us
              </Link>
              <Link href="/privacy-policy" className="block hover:text-[#fef0b7]">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="block hover:text-[#fef0b7]">
                Terms & Conditions
              </Link>
              <Link href="/contact-us" className="block hover:text-[#fef0b7]">
                Contact us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase text-lg mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block hover:text-[#fef0b7]">
                Blogs
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase text-lg mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="https://www.webearl.com/" className="block hover:text-[#fef0b7]">
                Partner with us
              </Link>

              <p className="text-white/60 text-sm pt-4">Copyright 2025 cricgem.in</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}