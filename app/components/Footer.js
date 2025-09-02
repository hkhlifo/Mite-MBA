import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer
      className="text-white py-10 bg-[url('/frontimg.jpg')] bg-cover bg-no-repeat bg-top md:bg-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-wide">Get in Touch</h3>
          <p className="text-sm text-gray-200">📞 9845076951</p>
          <Link href="mailto:info@mite.ac.in">
            <span className="text-sm text-indigo-200 hover:underline cursor-pointer">Send us an email</span>
          </Link>
          <div className="flex gap-4 py-2 md:justify-normal md:items-start justify-center items-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-indigo-300 hover:text-white transition-colors duration-300 text-2xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-indigo-300 hover:text-white transition-colors duration-300 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-indigo-300 hover:text-white transition-colors duration-300 text-2xl" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-wide">About MITE -</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            MITE's MBA Department empowers future business leaders with innovation-driven learning, global exposure, and ethical foundations that shape impactful careers.
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-indigo-200 opacity-30 w-3/4 mx-auto" />
      <p className="text-center text-md text-slate-300 mt-4">
        © {new Date().getFullYear()} Mangalore Institute of Technology & Engineering. All rights reserved.
      </p>
    </footer>
  );
}