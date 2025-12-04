import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-black/10 border-t border-white/10 mt-20">
            <div className="px-6 py-14 max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">

                {/* Titolo / Brand */}
                <img src={logo} alt="Logo" className="w-60" />

                {/* Link di navigazione */}
                <nav className="flex flex-col md:flex-row gap-4 mt-4">
                    <a href="" className="colorPrim text-4xl"><FaFacebook /></a>
                    <a href="" className="colorPrim text-4xl"><FaInstagram /></a>
                    <a href="" className="colorPrim text-4xl"><FaLinkedin /></a>
                </nav>

                {/* Linea divisoria */}
                <div className="w-full h-px bg-white/10 my-4"></div>

                {/* Copyright */}
                <p className="colorPrim text-lg">
                    © {new Date().getFullYear()} LaPiacentino — Tutti i diritti riservati.
                </p>

            </div>
        </footer>
    );
}
