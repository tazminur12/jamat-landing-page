"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "পরিচিতি", href: "/about" },
    { name: "ইস্তেহার", href: "/manifesto" },
    { name: "সংবাদ", href: "/news" },
    { name: "অনুষ্ঠান", href: "/events" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Left Section - Logo and Candidate Info */}
        <div className="navbar-left">
          <div className="logo-container">
            <Image
              src="/logo/jamaat-logo-.png"
              alt="জামায়াত লোগো"
              width={60}
              height={60}
              className="logo-image"
            />
          </div>
          <div className="candidate-info">
            <h1 className="candidate-name">শেখ মনজুরুল হক রাহাদ</h1>
            <p className="candidate-position">বগুড়া-২ আসনের প্রার্থী</p>
          </div>
        </div>

        {/* Right Section - Navigation Links and CTA */}
        <div className="navbar-right">
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="cta-button">
            যোগাযোগ করুন
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/"
            className="mobile-cta-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            যোগাযোগ করুন
          </Link>
        </div>
      )}
    </nav>
  );
}
