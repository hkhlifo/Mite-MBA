"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] bg-opacity-90 backdrop-blur-md shadow-md relative top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 flex items-center md:justify-between justify-end">

        <Link href="https://mite.ac.in/" target="_blank" rel="noopener noreferrer">
          <div className="bg-white p-1 md:p-2 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
            <img
              src="/mite-main-logo.svg"
              alt="MITE Logo"
              className="h-16 w-[6rem] md:h-25 md:w-auto transition-all duration-300"
            />
          </div>
        </Link>

        <div className="flex-grow text-center px-2 md:px-4 font-[Times_New_Roman]">
          <div className="text-white text-xs md:text-2xl font-bold uppercase tracking-wide mt-1">
            Department of Master of Business Administration (MBA)
          </div>
          <div className="text-indigo-300 text-[0.65rem] md:text-base font-semibold uppercase tracking-wide">
            Mangalore Institute of Technology & Engineering
          </div>
          <div className="text-indigo-300 text-[0.65rem] md:text-base font-semibold uppercase tracking-wide mt-1">
            Moodabidre, Mangalore
          </div>
        </div>

        <div className="hidden md:block bg-white p-2 rounded-md hover:scale-105 transition-transform duration-300 shadow-sm">
          <img
            src="/mite-mangalore-side-logo.png"
            alt="MITE Mangalore"
            className="h-15 w-auto"
          />
        </div>
      </div>
    </div>
  );
}