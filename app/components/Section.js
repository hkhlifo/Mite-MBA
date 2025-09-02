"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Section() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Department Advisory Board", href: "/advisory-board" },
        { name: "Faculty", href: "/faculty" },
        { name: "Department Forum", href: "/forum" },
        {
            name: "Courses",
            href: "/courses",
            subitems: [
                { name: "Courses", href: "/courses/main" },
                { name: "Learning Resources", href: "/courses/resources" },
                { name: "Model Question Papers", href: "/courses/question-papers" },
            ],
        },
        {
            name: "Achievements",
            href: "/achievements",
            subitems: [
                { name: "Beyond Syllabus", href: "/achievements/beyond-syllabus" },
                { name: "Student Achievements", href: "/achievements/students" },
            ],
        },
        { name: "Alumni", href: "/alumni" },
    ];

    return (
        <nav className="sticky top-0 font-poppins z-40 bg-[#F8FAFC] border-b border-slate-200 shadow-sm transition-shadow duration-300 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 flex items-center justify-between md:justify-center">
                <ul className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base font-medium tracking-wide uppercase">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative group">
                            <Link
                                href={item.href}
                                className={`${pathname === item.href
                                    ? "text-indigo-600"
                                    : "text-slate-700"
                                    } px-3 md:px-4 py-2 rounded-md transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-700 hover:scale-105`}
                            >
                                {item.name}
                            </Link>

                            {item.subitems && (
                                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white shadow-lg border border-slate-300 rounded-md hidden group-hover:block z-50">
                                    {item.subitems.map((sub, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={sub.href}
                                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-200"
                                            >
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>


                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <img
                        src={isOpen ? "/cross.svg" : "/menu-burger.svg"}
                        alt="Menu Toggle"
                        className="h-6 w-6 active:scale-90 transition-transform duration-150 ease-out"
                    />
                </button>
            </div>
            <div
                className={`md:hidden px-4 space-y-2 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                style={{ maxHeight: isOpen ? "500px" : "0px" }}
            >
                {navItems.map((item, index) => (
                    <div key={index}>
                        <Link
                            href={item.href}
                            className={`block text-sm font-medium uppercase tracking-wide py-2 px-3 rounded-md ${pathname === item.href
                                ? "text-indigo-600"
                                : "text-slate-700"
                                } hover:bg-indigo-50 hover:text-indigo-700 transition`}
                        >
                            {item.name}
                        </Link>

                        {item.subitems && (
                            <div className="ml-4 space-y-1">
                                {item.subitems.map((sub, idx) => (
                                    <Link
                                        key={idx}
                                        href={sub.href}
                                        className="block text-[0.85rem] text-slate-600 hover:text-indigo-600 transition px-3 py-1"
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}