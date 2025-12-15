import { motion } from "framer-motion";

export default function Contatti() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const team = [
        {
        name: "Marco Verdi",
        role: "Founder • Orientamento & Strategia",
        email: "marco@lapiacentino.it",
        img: "https://picsum.photos/400/400?random=11",
        },
        {
        name: "Giulia Rossi",
        role: "CV & Personal Branding",
        email: "giulia@lapiacentino.it",
        img: "https://picsum.photos/400/400?random=12",
        },
        {
        name: "Luca Bianchi",
        role: "Colloqui & Preparazione",
        email: "luca@lapiacentino.it",
        img: "https://picsum.photos/400/400?random=13",
        },
    ];

    const onSubmit = (e) => {
        e.preventDefault();
        // TODO: collegare a backend (EmailJS, Formspree, Supabase, ecc.)
        alert("Messaggio inviato! (demo)");
    };

    return (
        <div className="min-h-screen w-full">
        {/* HERO */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h1 className="customTextSize font-semibold leading-tight colorSec" {...fadeUp}>
                Contatti
            </motion.h1>

            <motion.p
                className="mt-8 customTextSize2 colorPrim max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Hai una domanda o vuoi iniziare un percorso? Scrivici: ti rispondiamo con indicazioni chiare e il prossimo step.
            </motion.p>
            </div>
        </section>

        {/* INFO + FORM */}
        <section className="w-full pb-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* INFO BOX */}
            <motion.div
                className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold colorSec">Info rapide</h2>

                <div className="mt-6 space-y-4 text-neutral-300 text-lg">
                    <p>
                        <span className="colorSec font-semibold">Email:</span>{" "}
                        <a className="colorPrim hover:underline" href="mailto:info@lapiacentino.it">
                        info@lapiacentino.it
                        </a>
                    </p>
                    <p>
                        <span className="colorSec font-semibold">Telefono:</span>{" "}
                        <a className="colorPrim hover:underline" href="tel:+390000000000">
                        +39 000 000 0000
                        </a>
                    </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                        className="rounded-lg bgPrim px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition text-center"
                        href="mailto:info@lapiacentino.it"
                    >
                        Scrivi una mail
                    </a>
                </div>
            </motion.div>

            {/* FORM */}
            <motion.form
                onSubmit={onSubmit}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <h2 className="text-2xl font-semibold colorSec">Invia un messaggio</h2>

                <div className="mt-8 grid gap-5">
                <div>
                    <label className="colorSec text-sm">Nome</label>
                    <input
                    type="text"
                    required
                    placeholder="Il tuo nome"
                    className="mt-2 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                    />
                </div>

                <div>
                    <label className="colorSec text-sm">Email</label>
                    <input
                    type="email"
                    required
                    placeholder="nome@email.com"
                    className="mt-2 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                    />
                </div>

                <div>
                    <label className="colorSec text-sm">Messaggio</label>
                    <textarea
                    required
                    rows={5}
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="mt-2 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 rounded-lg bgPrim px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                    Invia
                </button>
                </div>
            </motion.form>
            </div>
        </section>

        {/* TEAM */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl font-semibold colorSec text-center" {...fadeUp}>
                Il nostro team
            </motion.h2>

            <motion.p
                className="mt-6 customTextSize2 colorPrim max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Persone reali, supporto pratico. Qui trovi i profili e i riferimenti principali.
            </motion.p>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
                {team.map((p, i) => (
                <motion.div
                    key={p.email}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                    <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 object-cover rounded-xl"
                    />
                    <h3 className="mt-6 text-xl font-semibold colorSec">{p.name}</h3>
                    <p className="mt-2 colorPrim">{p.role}</p>
                    <a
                    href={`mailto:${p.email}`}
                    className="mt-5 inline-block colorPrim hover:underline"
                    >
                        {p.email}
                    </a>
                </motion.div>
                ))}
            </div>
            </div>
        </section>
        </div>
    );
}
