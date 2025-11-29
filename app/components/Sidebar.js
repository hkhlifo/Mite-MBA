"use client";

import { useEffect, useState } from "react";

const navLinks = [
    { label: "Program Overview", target: "program" },
    { label: "Specializations", target: "specializations" },
    { label: "Vision & Mission", target: "vision" },
    { label: "Placement Success", target: "placement" },
    { label: "Campus Life", target: "campus" },
    { label: "Testimonials", target: "testimonials" },
];

export default function SimpleSidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShowSidebar(window.scrollY > 550);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <aside
            className={`fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-opacity duration-300 ${showSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-white/10 backdrop-blur-xl border border-indigo-300 rounded-2xl p-4 w-60 shadow-xl flex flex-col gap-2">
                <div className="text-center mb-3 font-semibold text-indigo-400  tracking-wide">
                    Quick Navigate
                </div>
                {navLinks.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            const el = document.getElementById(item.target);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center gap-2 text-left px-3 py-2 rounded-lg transition text-gray-800 hover:text-indigo-50 hover:bg-gray-600"
                    >
                        <span className="text-sm">{item.label}</span>
                    </button>
                ))}
            </div>
        </aside>
    );
}