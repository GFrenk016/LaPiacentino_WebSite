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
                    C’è un momento in cui capisci
                    che non stai più offrendo un servizio.
                    Stai diventando un punto di riferimento.
                </motion.p>

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
                        Tutto è iniziato ascoltando davvero le persone.
                        </h2>
                        <p className="mt-6 customTextSize2 colorPrim leading-relaxed">
                        Vengo dal mondo assicurativo, ma il mio percorso mi ha portata oltre i confini di un ruolo.
                        Negli anni mi sono trovata spesso davanti a richieste che andavano oltre le mie competenze.
                        Invece di dire “non è il mio ambito”, ho scelto di dire:
                        “Troviamo insieme la soluzione giusta.”
                        </p>
                        <p className="mt-4 customTextSize2 colorPrim leading-relaxed">
                        Così ho capito che il mio valore non era solo nella consulenza,
                        ma nella capacità di orientare, spiegare, proteggere le scelte delle persone.
                        Quando un cliente si fida al punto da affidarti un problema,
                        non stai vendendo qualcosa.
                        Stai costruendo una relazione.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <img
                            src="https://picsum.photos/900/1600"
                            alt="Mockup preview"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE HUB */}
            <section className="w-full pt-21 pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                        className="customTextSize font-semibold colorSec"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8 }}
                    >
                        L’HUB
                    </motion.h2>

                    <motion.p
                        className="mt-8 customTextSize2 colorPrim leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        Siamo un punto di contatto unico.  
                        E il futuro del lavoro sta arrivando.
                    </motion.p>

                    <motion.div
                        className="mt-12 space-y-8 customTextSize2 colorPrim leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p>
                            Viviamo in un tempo in cui le esigenze si moltiplicano
                            e le soluzioni sono ovunque, ma raramente chiare.
                        </p>

                        <p>
                            L’HUB nasce per questo:
                            essere un punto di contatto unico, affidabile, umano.
                            Un luogo in cui non devi sapere tutto,
                            ma solo sapere a chi affidarti.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* IMMAGINE 16:9 TRA LE SEZIONI */}
            <section className="w-full py-1 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                    className="relative w-full md:w-3/4 mx-auto aspect-[16/9] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-xl"
                    >
                    <img
                        src="https://picsum.photos/1600/900?random=3"
                        alt="Visione HUB"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    </motion.div>
                </div>
            </section>

            {/* SEZIONE FUTURO DEL LAVORO */}
            <section className="w-full py-22 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                        className="customTextSize2 font-semibold colorSec"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8 }}
                    >
                        IL FUTURO DEL LAVORO STA ARRIVANDO
                    </motion.h2>

                    <motion.div
                        className="mt-12 space-y-8 customTextSize2 colorPrim leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            Il futuro del lavoro non è fare tutto da soli.
                            È saper lavorare insieme.
                        </p>

                        <p>
                            Questo HUB nasce da una visione chiara:
                            le competenze non devono competere,
                            devono incontrarsi.
                        </p>

                        <p>
                            Qui il lavoro diventa rete.
                            Qui la fiducia diventa metodo.
                            Qui la collaborazione diventa valore.
                        </p>

                        <p className="font-semibold colorSec">
                            Non è solo un nuovo spazio.
                            È un nuovo modo di lavorare.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* SEZIONE PONTE */}
            <section className="w-full py-28 px-6">
                <div className="max-w-4xl mx-auto">

                    <motion.h2
                        className="customTextSize2 font-semibold colorSec text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8 }}
                    >
                        Un ponte tra esigenze e soluzioni
                    </motion.h2>

                    <motion.div
                        className="mt-12 space-y-8 customTextSize2 colorPrim leading-relaxed text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            Siamo un ponte.
                            Tra chi ha un bisogno e chi ha la risposta giusta.
                        </p>

                        <p>
                            Ascoltiamo l’esigenza, la traduciamo, la rendiamo comprensibile.
                            Poi costruiamo il collegamento con il professionista più adatto.
                        </p>

                        <p>
                            Non lasciamo le persone sole nel processo.
                            Restiamo presenti.
                            Guidiamo le scelte.
                            Ci assumiamo la responsabilità di ogni passaggio.
                        </p>

                        <p className="font-semibold colorSec">
                            Perché fare intermediazione oggi
                            significa prendersi cura delle decisioni degli altri.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* CONTATTI / CTA */}
            <section id="contatti" className="w-full py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-semibold colorSec leading-relaxed"
                        {...fadeUp}
                    >
                        Un punto di contatto unico.
                        <br />
                        Un ponte tra esigenze e soluzioni.
                        <br />
                        Il futuro del lavoro, oggi.
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

            {/* ========== COLLABORA CON NOI (CHI SIAMO) ========== */}
            <section className="w-full py-28 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.h2
                    className="text-3xl font-semibold colorSec"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8 }}
                    >
                    Collabora con noi
                    </motion.h2>

                    <motion.div
                    className="mt-10 space-y-6 customTextSize2 colorPrim leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    >
                    <p>
                        Cerchiamo professionisti che credono
                        nella fiducia, nella competenza
                        e nel valore della rete.
                    </p>

                    <p>
                        Se vuoi far parte di un progetto
                        che mette le persone al centro,
                        questo è il posto giusto.
                    </p>
                    </motion.div>

                    <motion.a
                    href="/contatti"
                    className="mt-12 inline-block rounded-lg bgPrim px-10 py-5 text-xl font-semibold text-white hover:opacity-90 transition"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    >
                    Collabora con noi
                    </motion.a>

                </div>
            </section>

        </div>
    );
}
