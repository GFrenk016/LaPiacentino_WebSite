import Logo from "../../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";
import BackgroundSlider from "../../components/BackgroundSlider";
import { motion } from "framer-motion";

export default function Homepage() {
    return (
        <div className="">

            {/* ========== HERO (tuo stile) ========== */}
            <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col items-center text-center gap-4 text-3xl">

                <BackgroundSlider />

                <motion.img src={Logo} alt="Logo" className="customSize" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />

                <motion.h1 className="mt-8 customTextSize font-semibold leading-tight colorPrim" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    IL TUO PUNTO DI CONTATTO UNICO.
                </motion.h1>

                

                <motion.button 
                    className="mt-10 bgPrim py-4 rounded-lg text-xl font-medium w-50 hover:opacity-90 transition text-white flex justify-center" 
                    initial={{ opacity: 0, y: 40 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.1, delay: 0.3 }} 
                    onClick={() => {
                        window.scrollTo({
                            top: 850,
                            behavior: "smooth",
                        });
                    }}
                > 
                    <FaArrowDown />
                </motion.button>

            </section>



            {/* ========== CHI SIAMO / MISSION ========== */}
            <section className="mt-60 px-6 py-24 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

                <motion.h2
                className="customTextSize font-semibold colorSec"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                >
                    La nostra missione
                </motion.h2>

                <motion.p
                className="customTextSize2 colorPrim leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Siamo un punto di contatto unico, un ponte tra i tuoi bisogni e chi ha la competenza giusta. Ma, prima di tutto, siamo un luogo dove la tua esigenza conta davvero e dove il valore delle persone viene prima di tutto.
                </motion.p>

                <motion.a
                href="#cta"
                className="mt-5 rounded-lg bgPrim px-8 py-4 text-xl font-semibold text-white shadow-sm transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                >
                    Scopri di più
                </motion.a>

            </section>

            {/* ========== SPAZIO COWORKING ========== */}
            <section className="mt-40 px-6 py-28 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">

                <motion.h2
                    className="customTextSize font-semibold colorSec"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    Spazio Coworking
                </motion.h2>

                <motion.p
                    className="customTextSize2 colorPrim leading-relaxed max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    Il futuro del lavoro prende spazio.
                </motion.p>

                <motion.div
                    className="mt-6 space-y-6 customTextSize2 colorPrim leading-relaxed max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <p>
                        Uno spazio pensato per freelance, professionisti e startup
                        che vogliono lavorare in libertà
                        senza rinunciare a professionalità e relazioni.
                    </p>

                    <p>
                        Non solo postazioni,
                        ma un contesto che valorizza chi lavora.
                    </p>
                </motion.div>

                {/* BLOCCO CONNESSIONE HUB */}
                <motion.div
                    className="mt-16 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur max-w-4xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    <h2 className="customTextSize font-semibold colorSec mb-6">
                        Connesso all’HUB
                    </h2>

                    <p className="customTextSize2 colorPrim leading-relaxed">
                        Il coworking non è separato dall’HUB.
                        È parte della stessa visione.
                        Qui le competenze si incontrano,
                        le idee circolano,
                        le collaborazioni nascono naturalmente.
                    </p>
                </motion.div>

                <motion.a
                    href="/contatti"
                    className="mt-12 rounded-lg bgPrim px-10 py-5 text-xl font-semibold text-white hover:opacity-90 transition"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    Scopri il coworking
                </motion.a>

            </section>

            {/* ========== SERVIZI / COSA TROVERAI ========== */}
            <section className="
                mt-45
                w-screen 
                bgPrim 
                py-24 
                text-center 
                relative 
                left-1/2 
                right-1/2 
                -ml-[50vw] 
                -mr-[50vw]
            ">
                <div className="max-w-6xl mx-auto px-8">
                    
                    <motion.h2 className="customTextSize font-semibold text-white mb-20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                        Cosa troverai su LaPiacentino
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10 customTextSize2">

                        {/* CARD 1 */}
                        <a href="">
                            <motion.div
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="font-semibold text-white">
                                    Orientamento Personalizzato
                                </h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Analizziamo la tua esigenza e ti guidiamo verso il professionista o il percorso più adatto.
                                    Nessuna dispersione. Solo direzione chiara.
                                </p>
                            </motion.div>
                        </a>


                        {/* CARD 2 */}
                        <a href="">
                            <motion.div
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="font-semibold text-white">
                                    Rete di Professionisti
                                </h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Un network selezionato di competenze diverse ma complementari.
                                    Qui le soluzioni non competono: si incontrano.
                                </p>
                            </motion.div>
                        </a>


                        {/* CARD 3 */}
                        <a href="">
                            <motion.div
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="font-semibold text-white">
                                    Spazio Coworking
                                </h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Uno spazio pensato per lavorare in libertà, incontrare clienti
                                    e sentirsi parte di una rete attiva e concreta.
                                </p>
                            </motion.div>
                        </a>

                    </div>

                </div>
            </section>




            {/* ========== CTA FINALE ========== */}
            <section className="mt-20 mb-10 px-6 py-24 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 grid grid-cols-2">
                
                <motion.img
                src={`https://picsum.photos/400/300?random=${Math.random()}`}
                alt="random"
                className="w-full object-cover rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                />

                <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="customTextSize font-semibold colorSec">
                        Inizia oggi il tuo percorso
                    </h2>

                    <p className="customTextSize2 colorPrim leading-relaxed my-10">
                        Che tu stia cercando orientamento, nuove collaborazioni
                        o uno spazio dove far crescere il tuo lavoro,
                        il primo passo è semplice: mettiamoci in contatto.
                    </p>

                    <a
                        href="/contatti"
                        className="mt-10 rounded-lg bgPrim px-10 py-6 text-xl font-semibold text-white shadow-sm transition"
                    >
                        Parliamone
                    </a>
                </motion.div>

            </section>

            {/* ========== COLLABORA CON NOI (HOMEPAGE) ========== */}
            <section className="mt-40 px-6 py-24 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">

                <motion.h2
                    className="customTextSize font-semibold colorSec"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    Collabora con noi
                </motion.h2>

                <motion.p
                    className="customTextSize2 colorPrim leading-relaxed max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Cerchiamo professionisti che credono
                    nella fiducia, nella competenza
                    e nel valore della rete.
                    <br /><br />
                    Se vuoi far parte di un progetto
                    che mette le persone al centro,
                    questo è il posto giusto.
                </motion.p>

                <motion.a
                    href="/contatti"
                    className="mt-6 rounded-lg bgPrim px-10 py-5 text-xl font-semibold text-white hover:opacity-90 transition"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Collabora con noi
                </motion.a>

            </section>


        </div>
    );
}
