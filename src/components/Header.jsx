import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Servizi", href: "/servizi" },
        { label: "Chi siamo", href: "/chi-siamo" },
        { label: "Contatti", href: "/contatti" },
        { label: "Blog", href: "/blog" },
        { label: "Networking", href: "/networking" },
    ];

    return (
        <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-60" />
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 text-xl font-medium colorSec md:flex">
                {navLinks.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="transition"
                    >
                    {link.label}
                    </a>
                ))}

                </nav>

                {/* Mobile button */}
                <button
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 md:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Apri menu"
                >
                <span className="sr-only">Apri menu</span>
                <div className="space-y-1.5">
                    <span
                    className={`block h-0.5 w-5 bg-slate-800 transition ${
                        isOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                    />
                    <span
                    className={`block h-0.5 w-5 bg-slate-800 transition ${
                        isOpen ? "opacity-0" : ""
                    }`}
                    />
                    <span
                    className={`block h-0.5 w-5 bg-slate-800 transition ${
                        isOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                    />
                </div>
                </button>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white md:hidden">
                    <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
                        {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-2 py-2 transition hover:bg-slate-100"
                        >
                            {link.label}
                        </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}