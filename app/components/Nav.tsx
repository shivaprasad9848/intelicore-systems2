"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/Services" },
  { name: "Products", path: "/products" },
  { name: "Training", path: "/Training" },
  { name: "About", path: "/about" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled ? "bg-white/90 shadow-md py-1.5" : "bg-orange-100 py-2"}
        `}
        style={{
          backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8 transition-all duration-300">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="block py-1 mr-2" style={{ lineHeight: 0 }}>
              <Image
                src="/images/logo.png"
                alt="IteliCore Logo"
                width={scrolled ? 100 : 110}
                height={scrolled ? 50 : 30}
                className="object-contain transition-all duration-300"
                priority
                style={{ minWidth: scrolled ? 70 : 95, minHeight: 22 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-[15px] font-semibold tracking-wide uppercase text-black">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.path}
                  className="transition-all duration-300 group-hover:text-orange-600 group-hover:scale-105"
                >
                  {link.name}
                  <span className="block h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Section: Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signin"
              className="text-black text-sm font-semibold hover:text-orange-600 transition-all"
            >
              SIGN IN
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              JOIN NOW <FiArrowUpRight />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-2xl text-black"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.18 }}
              className="md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-40 flex flex-col pt-24 px-8 gap-7"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-lg font-semibold text-black border-b border-gray-200 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/signin"
                className="text-black text-base font-semibold py-2"
                onClick={() => setMenuOpen(false)}
              >
                SIGN IN
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-base font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 mt-2 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                JOIN NOW <FiArrowUpRight />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
