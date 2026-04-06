"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="logo"
              width={120}
              height={50}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              href="/buyer"
              className="text-black hover:text-[#C8A96A] transition font-medium"
            >
              Buyer
            </Link>
          </li>
          <li>
            <Link
              href="/seller"
              className="text-black hover:text-[#C8A96A] transition font-medium"
            >
              Seller
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-black hover:text-[#C8A96A] transition font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-black hover:text-[#C8A96A] transition font-medium"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black hover:text-[#C8A96A] transition font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white/80 backdrop-blur-md">
          <Link
            href="/buyer"
            className="block text-black hover:text-[#C8A96A] transition font-medium"
          >
            Buyer
          </Link>
          <Link
            href="/seller"
            className="block text-black hover:text-[#C8A96A] transition font-medium"
          >
            Seller
          </Link>
          <Link
            href="/about"
            className="block text-black hover:text-[#C8A96A] transition font-medium"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="block text-black hover:text-[#C8A96A] transition font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block text-black hover:text-[#C8A96A] transition font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
