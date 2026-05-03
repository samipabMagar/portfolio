"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-main/90 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center md:w-1/4">
            <Link
              href="/"
              className="text-3xl font font-serif italic text-accent font-semibold  tracking-tight"
            >
              SRM<span className="text-text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-brand transition-colors duration-200 text-sm  tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-4 md:w-1/4">
            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden md:inline-flex bg-brand hover:bg-brand-hover text-white px-8 py-3 rounded-full text-base font-medium font-serif tracking-widest uppercase transition-colors shadow-md items-center justify-center"
            >
              Let's Talk
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-text-primary focus:outline-none p-2 md:hidden"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-surface border-b border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm tracking-widest uppercase text-text-secondary hover:text-brand hover:bg-background-muted rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full text-base font-medium tracking-widest uppercase transition-colors shadow-sm"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
