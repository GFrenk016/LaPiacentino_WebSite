import Logo from "../../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";
import BackgroundSlider from "../../components/BackgroundSlider";
import { motion } from "framer-motion";

export default function Homepage() {
    return (
        <div className="">

            {/* ========== HERO (tuo stile) ========== */}
            <section className="px-6 py-24 max-w-6xl mx-auto flex flex-col items-center text-center gap-4 text-3xl">

                <BackgroundSlider />

                <motion.img src={Logo} alt="Logo" className="customSize" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} />

                <motion.h1 className="mt-8 customTextSize font-semibold leading-tight text-white" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    Lorem ipsum dolor.
                </motion.h1>

                <motion.button 
                    className="mt-20 bgPrim py-4 rounded-lg text-xl font-medium w-50 hover:opacity-90 transition text-white flex justify-center" 
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
                className="customTextSize2 text-neutral-300 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
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
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corporis vitae veritatis, repellendus nesciunt doloribus.
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
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, quas. Alias optio tempora nihil accusantium.
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
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maiores neque quibusdam quae animi distinctio?
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
                        Inizia oggi la tua avventura
                    </h2>

                    <p className="customTextSize2 text-neutral-300 leading-relaxed my-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate corrupti molestias placeat odio tempora possimus, necessitatibus sit repudiandae aspernatur ducimus.
                    </p>

                    <a
                        href="#cta"
                        className="mt-10 rounded-lg bgPrim px-10 py-6 text-xl font-semibold text-white shadow-sm transition"
                    >
                        Inizia ora
                    </a>
                </motion.div>

            </section>

        </div>
    );
}
