import Link from "next/link";
import { Youtube, Instagram, Facebook, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b1253] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#fef0b7] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-[#1b1253] rounded"></div>
              </div>
              <span className="text-2xl font-bold text-[#fef0b7]">CRICGEM</span>
            </div>
            <div className="flex space-x-4">
              <Youtube className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
              <Play className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-[#fef0b7]">
                About Us
              </Link>
              <Link href="#" className="block hover:text-[#fef0b7]">
                Privacy Policy
              </Link>
              <Link href="#" className="block hover:text-[#fef0b7]">
                Terms & Conditions
              </Link>
              <Link href="#" className="block hover:text-[#fef0b7]">
                Contact us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block hover:text-[#fef0b7]">
                Blogs
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="#" className="block hover:text-[#fef0b7]">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">Copyright © 2023 cricgem.in</p>
        </div>
      </div>
    </footer>
  );
} 