import { motion } from "framer-motion";
import { FaBriefcase, FaBullseye, FaUsers } from "react-icons/fa";

export default function ChiSiamo() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const values = [
        {
        icon: <FaBullseye />,
        title: "Missione",
        text: "Guidare le persone verso opportunità concrete con strumenti semplici e consigli pratici.",
        },
        {
        icon: <FaBriefcase />,
        title: "Metodo",
        text: "Contenuti chiari, step operativi e risorse utili per migliorare CV, competenze e percorso.",
        },
        {
        icon: <FaUsers />,
        title: "Community",
        text: "Un punto di riferimento per chi vuole crescere e scegliere con consapevolezza.",
        },
    ];

    return (
        <div className="min-h-screen w-full">
        {/* HERO */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h1
                className="customTextSize font-semibold leading-tight colorSec"
                {...fadeUp}
            >
                Chi siamo
            </motion.h1>

            <motion.p
                className="mt-8 customTextSize2 colorPrim max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                LaPiacentino nasce per aiutare persone e professionisti a orientarsi nel mondo del lavoro:
                contenuti semplici, diretti e utili per costruire un percorso più chiaro.
            </motion.p>

            <motion.div
                className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a
                href="#contatti"
                className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                Contattaci
                </a>
            </motion.div>
            </div>
        </section>

        {/* VALORI / PILASTRI */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.h2
                className="text-3xl font-semibold colorSec text-center"
                {...fadeUp}
            >
                Cosa ci guida
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
                {values.map((v, i) => (
                <motion.div
                    key={v.title}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                    <div className="text-3xl colorSec">{v.icon}</div>
                    <h3 className="my-4 text-3xl font-semibold colorSec">
                    {v.title}
                    </h3>
                    <p className="my-3 colorPrim text-xl leading-relaxed">
                    {v.text}
                    </p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* SEZIONE “STORIA” */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
                <h2 className="text-3xl font-semibold colorSec">
                Perché esiste LaPiacentino
                </h2>
                <p className="mt-6 customTextSize2 colorPrim leading-relaxed">
                Troppe persone si trovano bloccate tra dubbi, informazioni confuse e mancanza di direzione.
                Qui trovi un approccio pratico: cosa fare, come farlo e quali passi seguire.
                </p>
                <p className="mt-4 customTextSize2 colorPrim leading-relaxed">
                L’obiettivo è darti chiarezza e strumenti concreti, così puoi costruire un percorso professionale
                più solido e realistico.
                </p>
            </motion.div>

            <motion.div
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                <h3 className="text-xl font-semibold colorSec">In breve</h3>
                <ul className="mt-5 space-y-3 colorPrim text-lg">
                <li>• Risorse e guide pratiche</li>
                <li>• Metodo semplice e step-by-step</li>
                <li>• Focus su chiarezza e utilità</li>
                <li>• Obiettivo: aiutarti a scegliere meglio</li>
                </ul>
            </motion.div>
            </div>
        </section>

        {/* CONTATTI / CTA */}
        <section id="contatti" className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl font-semibold colorSec" {...fadeUp}>
                Vuoi parlare con noi?
            </motion.h2>

            <motion.p
                className="mt-6 customTextSize2 colorPrim max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Scrivici e raccontaci cosa stai cercando. Ti rispondiamo con indicazioni chiare e un primo orientamento.
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
                Invia una mail
                </a>
            </motion.div>
            </div>
        </section>
        </div>
    );
}
