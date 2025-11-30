"use client";

import { useEffect, useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

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
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShowSidebar(window.scrollY > 550);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`hidden lg:block fixed top-1/2 right-6 -translate-y-1/2 z-50 transition-all duration-500 ${showSidebar ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
            >
                <div className="bg-white/30 backdrop-blur-xl border border-indigo-200/50 rounded-2xl p-5 w-64 shadow-2xl flex flex-col gap-3 ring-1 ring-indigo-100 hover:ring-indigo-300 transition">
                    <div className="text-center mb-2 font-semibold text-[#1e293b] tracking-wide text-lg">
                        Quick Navigate
                    </div>
                    {navLinks.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="relative text-left px-3 py-2 rounded-lg transition-all duration-300 text-[#1e293b] hover:text-indigo-700 hover:bg-indigo-50 font-medium group"
                        >
                            <span className="absolute left-0 top-0 h-full w-1 bg-indigo-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top rounded-r"></span>
                            <span className="text-sm">{item.label}</span>
                        </button>
                    ))}
                </div>
            </aside>

            {/* Mobile Floating Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110"
                >
                    {mobileOpen ? (
                        <XMarkIcon className="w-7 h-7" />
                    ) : (
                        <PlusIcon className="w-7 h-7" />
                    )}
                </button>

                {/* Mobile Floating Card Menu */}
                {mobileOpen && (
                    <div className="absolute bottom-20 right-0 w-56 bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl border border-indigo-200 p-4 animate-[fadeIn_0.3s_ease-out]">
                        <div className="text-center mb-3 font-semibold text-[#1e293b] text-base">
                            Quick Navigate
                        </div>
                        <div className="flex flex-col gap-2">
                            {navLinks.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
                                        setMobileOpen(false);
                                    }}
                                    className="px-4 py-2 rounded-full bg-indigo-50 text-[#1e293b] hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 text-sm font-medium shadow-sm"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}