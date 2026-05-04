"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background-main/90 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 sm:h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center md:w-1/4">
            <Link
              href="/"
              className="relative w-32 h-10 sm:h-12 flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Samipab Roka Magar"
                fill
                sizes="(min-width: 640px) 128px, 96px"
                className="object-contain object-left"
                priority
              />
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
              {isOpen ? (
                <CloseIcon className="block h-7 w-7" />
              ) : (
                <MenuIcon className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-main border-b border-border absolute w-full shadow-lg">
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
