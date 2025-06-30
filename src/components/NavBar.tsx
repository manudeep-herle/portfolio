"use client";

import React from "react";

const sections = ["about", "skills", "experience", "projects"];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl">Manudeep</span>
        <ul className="flex space-x-4 text-sm font-medium text-gray-700">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li key={"contact"}>
            <a
              href={`/contact`}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
