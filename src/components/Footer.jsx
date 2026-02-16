import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-black/10 border-t border-white/10 mt-24">
            <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">

                {/* Logo */}
                <img src={logo} alt="LaPiacentino Logo" className="w-56" />

                {/* Claim */}
                <div className="space-y-2">
                    <p className="text-2xl font-semibold colorSec">
                        Un punto di contatto unico.
                    </p>
                    <p className="text-xl colorPrim">
                        Il futuro del lavoro, oggi.
                    </p>
                </div>

                {/* Social */}
                <div className="flex gap-6 text-3xl mt-4">
                    <a href="#" className="colorPrim hover:opacity-70 transition">
                        <FaFacebook />
                    </a>
                    <a href="#" className="colorPrim hover:opacity-70 transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="colorPrim hover:opacity-70 transition">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Email */}
                <a 
                    href="mailto:info@lapIacentino.it" 
                    className="text-lg colorSec hover:underline transition mt-4"
                >
                    info@lapIacentino.it
                </a>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 my-6"></div>

                {/* Copyright */}
                <p className="colorPrim text-sm">
                    © {new Date().getFullYear()} LaPiacentino — Tutti i diritti riservati.
                </p>

            </div>
        </footer>
    );
}
