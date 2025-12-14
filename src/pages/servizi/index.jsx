import { motion } from "framer-motion";
import { FaFileContract, FaUserCheck, FaChartLine, FaHandsHelping } from "react-icons/fa";

export default function Servizi() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const services = [
        {
        icon: <FaUserCheck />,
        title: "Orientamento",
        desc: "Ti aiutiamo a capire da dove partire e quali passi fare per migliorare il tuo percorso.",
        href: "#orientamento",
        points: ["Analisi obiettivi", "Piano d’azione", "Priorità e focus"],
        },
        {
        icon: <FaFileContract />,
        title: "CV & Profilo",
        desc: "Ottimizziamo CV e profilo in modo chiaro, moderno e mirato al ruolo.",
        href: "#cv",
        points: ["CV ATS-friendly", "Portfolio", "Profilo LinkedIn"],
        },
        {
        icon: <FaChartLine />,
        title: "Preparazione Colloqui",
        desc: "Allenamento pratico per arrivare pronto e sicuro ai colloqui.",
        href: "#colloqui",
        points: ["Domande tipiche", "Simulazioni", "Storytelling personale"],
        },
        {
        icon: <FaHandsHelping />,
        title: "Supporto Pratico",
        desc: "Risorse e strumenti utili per candidature, ricerca e organizzazione.",
        href: "#supporto",
        points: ["Template e guide", "Strategie di ricerca", "Checklist candidatura"],
        },
    ];

    return (
        <div className="min-h-screen w-full">

        {/* HERO */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h1 className="customTextSize font-semibold leading-tight colorSec" {...fadeUp}>
                Servizi
            </motion.h1>

            <motion.p
                className="mt-8 customTextSize2 colorPrim max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Qui trovi i servizi principali di LaPiacentino: semplici, pratici e pensati per aiutarti a fare
                passi concreti verso nuove opportunità.
            </motion.p>

            <motion.div
                className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a
                href="#lista-servizi"
                className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                Vedi i servizi
                </a>
            </motion.div>
            </div>
        </section>

        {/* LISTA SERVIZI */}
        <section id="lista-servizi" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl font-semibold colorSec text-center" {...fadeUp}>
                Cosa possiamo fare per te
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-2 gap-10">
                {services.map((s, i) => (
                <motion.a
                    key={s.title}
                    href={s.href}
                    className="block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-[1.02] hover:bg-white/10 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl colorSec mt-1">{s.icon}</div>
                        <div className="text-left">
                        <h3 className="text-xl font-semibold colorSec">{s.title}</h3>
                        <p className="mt-3 colorPrim text-lg leading-relaxed">{s.desc}</p>

                        <ul className="mt-5 space-y-2 colorPrim">
                            {s.points.map((p) => (
                            <li key={p}>• {p}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </motion.a>
                ))}
            </div>
            </div>
        </section>

        {/* DETTAGLI (sezioni interne) */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto grid gap-12">

            {services.map((s, i) => (
                <motion.div
                key={s.href}
                id={s.href.replace("#", "")}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                >
                <div className="flex items-center gap-4">
                    <div className="text-3xl colorSec">{s.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{s.title}</h3>
                </div>

                <p className="mt-5 colorSec text-xl font-semibold leading-relaxed">
                    {s.desc} (Questa è una sezione “dettagli”: qui puoi inserire un testo più lungo, esempi concreti,
                    casi d’uso o una mini guida).
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                    href="#contatti"
                    className="rounded-lg bgPrim px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition text-center"
                    >
                    Richiedi info
                    </a>
                </div>
                </motion.div>
            ))}

            </div>
        </section>

        {/* CTA CONTATTI */}
        <section id="contatti" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl font-semibold colorSec" {...fadeUp}>
                Vuoi iniziare?
            </motion.h2>

            <motion.p
                className="mt-6 customTextSize2 colorPrim max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Scrivici cosa stai cercando e a che punto sei: ti rispondiamo con indicazioni chiare e il prossimo step.
            </motion.p>

            <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a
                href="mailto:info@lapIacentino.it"
                className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                Contattaci via mail
                </a>
            </motion.div>
            </div>
        </section>
        </div>
    );
}
