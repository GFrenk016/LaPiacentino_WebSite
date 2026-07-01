import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaWpforms,
    FaFileUpload,
    FaRegClock,
    FaCarCrash,
    FaCarSide,
    FaFireExtinguisher,
    FaTools,
    FaBalanceScale,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

/* ============================================================
   PLACEHOLDER WHATSAPP
   Sostituisci questi due valori con quelli reali.
   - WHATSAPP_NUMERO: prefisso internazionale SENZA "+" e senza spazi
     (es. per l'Italia: 393401234567)
   - WHATSAPP_MESSAGGIO: testo precompilato del messaggio (in chiaro,
     viene codificato automaticamente per l'URL)
   ============================================================ */
const WHATSAPP_NUMERO = "NUMERO_PLACEHOLDER";
const WHATSAPP_MESSAGGIO =
    "MESSAGGIO_PLACEHOLDER - Ciao, vorrei richiedere un preventivo assicurativo.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    WHATSAPP_MESSAGGIO
)}`;

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
};

const steps = [
    {
        icon: <FaWpforms />,
        title: "1. Compili il form",
        desc: "Ci scrivi su WhatsApp con i tuoi dati e cosa vuoi assicurare. Pochi minuti, nessun impegno.",
    },
    {
        icon: <FaFileUpload />,
        title: "2. Carichi i documenti",
        desc: "Ci invii i documenti necessari (libretto, patente, polizza attuale) direttamente in chat.",
    },
    {
        icon: <FaRegClock />,
        title: "3. Ricevi il preventivo",
        desc: "Analizziamo la tua situazione e ti inviamo il preventivo su misura in 24/48 ore.",
    },
];

const garanzie = [
    {
        icon: <FaCarCrash />,
        title: "RC Auto",
        desc: "La copertura obbligatoria per legge, alle condizioni più convenienti per te.",
    },
    {
        icon: <FaCarSide />,
        title: "Kasko",
        desc: "Protezione completa del tuo veicolo anche in caso di sinistro con tua responsabilità.",
    },
    {
        icon: <FaFireExtinguisher />,
        title: "Furto e Incendio",
        desc: "Metti al sicuro il tuo mezzo dai danni da furto, tentato furto e incendio.",
    },
    {
        icon: <FaTools />,
        title: "Assistenza Stradale",
        desc: "Soccorso, traino e supporto ovunque ti trovi, 24 ore su 24.",
    },
    {
        icon: <FaBalanceScale />,
        title: "Tutela Legale",
        desc: "Assistenza e copertura delle spese legali per le controversie legate alla circolazione.",
    },
];

function WhatsappCTA({ delay = 0, className = "" }) {
    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 rounded-lg bgPrim px-8 py-4 text-lg sm:text-xl font-semibold text-white shadow-sm hover:opacity-90 transition ${className}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay }}
        >
            <FaWhatsapp className="text-2xl" />
            Richiedi il tuo preventivo su WhatsApp
        </motion.a>
    );
}

export default function Preventivo() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            {/* ========== HEADER MINIMALE (solo logo) ========== */}
            <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
                    <img src={Logo} alt="LaPiacentino" className="w-52 sm:w-60" />
                </div>
            </header>

            <main className="flex-1">
                {/* ========== HERO ========== */}
                <section className="w-full px-6 py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
                        <motion.h1
                            className="text-4xl sm:text-6xl font-semibold leading-tight colorSec"
                            {...fadeUp}
                            transition={{ duration: 0.8 }}
                        >
                            Preventivi assicurativi rapidi
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-2xl colorPrim leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            Richiedi il tuo preventivo assicurativo direttamente su
                            WhatsApp e ricevilo, su misura, in sole 24/48 ore.
                            Semplice, veloce e senza impegno.
                        </motion.p>

                        <WhatsappCTA delay={0.3} className="mt-6" />
                    </div>
                </section>

                {/* ========== COME FUNZIONA ========== */}
                <section className="w-full px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            className="text-3xl sm:text-5xl font-semibold colorSec text-center"
                            {...fadeUp}
                            transition={{ duration: 0.8 }}
                        >
                            Come funziona
                        </motion.h2>

                        <div className="mt-12 sm:mt-16 grid gap-8 md:grid-cols-3">
                            {steps.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    className="p-8 rounded-2xl bg-white/5 border border-slate-200 shadow-sm backdrop-blur flex flex-col items-center text-center"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.12 }}
                                >
                                    <div className="text-4xl colorSec mb-4">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold colorSec">
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 colorPrim text-lg leading-relaxed">
                                        {s.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== GARANZIE (full-bleed su bgPrim) ========== */}
                <section className="w-screen bgPrim py-16 sm:py-24 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div className="max-w-6xl mx-auto px-8">
                        <motion.h2
                            className="text-3xl sm:text-5xl font-semibold text-white text-center mb-12 sm:mb-16"
                            {...fadeUp}
                            transition={{ duration: 0.8 }}
                        >
                            Le nostre garanzie
                        </motion.h2>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {garanzie.map((g, i) => (
                                <motion.div
                                    key={g.title}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <div className="text-4xl text-white mb-4">
                                        {g.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {g.title}
                                    </h3>
                                    <p className="mt-3 text-lg text-neutral-100 leading-relaxed">
                                        {g.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== CTA FINALE ========== */}
                <section className="w-full px-6 py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
                        <motion.h2
                            className="text-3xl sm:text-5xl font-semibold colorSec"
                            {...fadeUp}
                            transition={{ duration: 0.8 }}
                        >
                            Pronto a risparmiare?
                        </motion.h2>

                        <motion.p
                            className="text-lg sm:text-2xl colorPrim leading-relaxed"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            Scrivici ora su WhatsApp: ti rispondiamo con un preventivo
                            chiaro e personalizzato in 24/48 ore.
                        </motion.p>

                        <WhatsappCTA delay={0.3} className="mt-6" />
                    </div>
                </section>
            </main>

            {/* ========== FOOTER MINIMALE (dati di legge) ========== */}
            <footer className="w-full border-t border-slate-200 bg-black/5">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-3">
                    <img src={Logo} alt="LaPiacentino" className="w-44" />

                    {/* Dati obbligatori di legge - PLACEHOLDER: sostituire con i dati reali */}
                    <p className="text-sm colorPrim leading-relaxed max-w-3xl">
                        LaPiacentino S.r.l. — Sede legale: Via Placeholder 1, 00000
                        Città (PR) — P.IVA / C.F. 00000000000
                        <br />
                        Iscrizione RUI (Registro Unico degli Intermediari
                        assicurativi) n. XXXXXXXX del 00/00/0000
                        <br />
                        Attività soggetta a vigilanza IVASS. Email:
                        info@lapiacentino.it — Tel. +39 000 000 0000
                    </p>

                    <p className="colorPrim text-sm mt-2">
                        © {new Date().getFullYear()} LaPiacentino — Tutti i diritti
                        riservati.
                    </p>
                </div>
            </footer>
        </div>
    );
}
