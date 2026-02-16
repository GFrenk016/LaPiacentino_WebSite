import { motion } from "framer-motion";

export default function Contatti() {

    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Messaggio inviato! (demo)");
    };

    return (
        <div className="min-h-screen w-full">

            {/* HERO */}
            <section className="w-full py-28 px-6 text-center">
                <div className="max-w-4xl mx-auto">

                    <motion.h1 
                        className="customTextSize font-semibold colorSec"
                        {...fadeUp}
                    >
                        Parliamone.
                    </motion.h1>

                    <motion.p
                        className="mt-8 customTextSize2 colorPrim leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        Hai un'esigenza, un progetto o vuoi entrare nella rete?
                        Scrivici. Ti rispondiamo con chiarezza e il prossimo passo.
                    </motion.p>

                </div>
            </section>

            {/* COMING SOON / ATTESA */}
            <section className="w-full py-12 px-6 bg-white/5 border-t border-white/10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                        className="text-3xl font-semibold colorSec"
                        {...fadeUp}
                    >
                        Stiamo costruendo una nuova sede.
                    </motion.h2>

                    <motion.div
                        className="mt-10 space-y-6 customTextSize2 colorPrim leading-relaxed"
                        {...fadeUp}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>Un nuovo spazio.</p>
                        <p>Un nuovo modo di lavorare insieme.</p>
                        <p className="font-semibold colorSec">
                            Il sito è solo l’inizio.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
                        {...fadeUp}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="#"
                            className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                        >
                            Seguici
                        </a>

                        <a
                            href="#"
                            className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                        >
                            Lasciaci un messaggio
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* FORM CENTRALE */}
            <section className="w-full px-6 py-32">
                <div className="max-w-3xl mx-auto">

                    <motion.form
                        onSubmit={onSubmit}
                        className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
                        {...fadeUp}
                    >
                        <h2 className="text-2xl font-semibold colorSec text-center">
                            Invia un messaggio
                        </h2>

                        <div className="mt-10 grid gap-6">

                            <input
                                type="text"
                                required
                                placeholder="Nome"
                                className="w-full rounded-lg bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-white/30"
                            />

                            <input
                                type="email"
                                required
                                placeholder="Email"
                                className="w-full rounded-lg bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-white/30"
                            />

                            <textarea
                                required
                                rows={5}
                                placeholder="Scrivi qui il tuo messaggio..."
                                className="w-full rounded-lg bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-white/30 resize-none"
                            />

                            <button
                                type="submit"
                                className="mt-4 rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                            >
                                Invia
                            </button>
                        </div>

                    </motion.form>

                </div>
            </section>


            {/* INFO RAPIDE */}
            <section className="w-full px-6 pb-28">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2 className="text-2xl font-semibold colorSec" {...fadeUp}>
                        Info rapide
                    </motion.h2>

                    <motion.div
                        className="mt-8 space-y-4 customTextSize2 colorPrim"
                        {...fadeUp}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <p>
                            Email:{" "}
                            <a href="mailto:info@lapiacentino.it" className="colorSec hover:underline">
                                info@lapiacentino.it
                            </a>
                        </p>

                        <p>
                            Telefono:{" "}
                            <a href="tel:+390000000000" className="colorSec hover:underline">
                                +39 000 000 0000
                            </a>
                        </p>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
