import { motion } from "framer-motion";
import { FaUserTie, FaHandshake, FaComments, FaNetworkWired } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Networking() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const steps = [
        {
        icon: <FaUserTie />,
        title: "Conosci il tuo obiettivo",
        text: "Capire chi vuoi conoscere e perché è il primo passo per fare networking efficace.",
        },
        {
        icon: <FaComments />,
        title: "Avvia la conversazione",
        text: "Messaggi semplici, umani e mirati: niente spam, niente frasi forzate.",
        },
        {
        icon: <FaHandshake />,
        title: "Crea valore",
        text: "Il networking funziona quando lo scambio è reciproco e autentico.",
        },
        {
        icon: <FaNetworkWired />,
        title: "Costruisci relazioni",
        text: "Non contatti isolati, ma connessioni che crescono nel tempo.",
        },
    ];

    const people = [
        {
        name: "Alessandro Conti",
        role: "HR Manager",
        company: "Tech Company",
        img: "https://picsum.photos/400/400?random=51",
        },
        {
        name: "Sara Lombardi",
        role: "Recruiter IT",
        company: "Digital Agency",
        img: "https://picsum.photos/400/400?random=52",
        },
        {
        name: "Davide Rinaldi",
        role: "Project Manager",
        company: "Consulting Firm",
        img: "https://picsum.photos/400/400?random=53",
        },
    ];

    return (
        <div className="min-h-screen w-full">

        {/* HERO */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h1 className="customTextSize font-semibold colorSec" {...fadeUp}>
                Networking
            </motion.h1>

            <motion.p
                className="mt-8 customTextSize2 colorPrim max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Il networking non è “chiedere favori”, ma costruire relazioni professionali
                che aprono opportunità nel tempo.
            </motion.p>
            </div>
        </section>

        {/* PERCHÉ NETWORKING */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
                <h2 className="text-3xl font-semibold colorSec">
                Perché è così importante
                </h2>
                <p className="mt-6 customTextSize2 colorPrim leading-relaxed">
                Molte opportunità non vengono pubblicate online.
                Il networking ti permette di accedere a informazioni, consigli
                e possibilità che non trovi negli annunci.
                </p>
                <p className="mt-4 customTextSize2 colorPrim leading-relaxed">
                Qui impari come farlo nel modo giusto, senza imbarazzo
                e senza sembrare invadente.
                </p>
            </motion.div>

            <motion.div
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                <ul className="space-y-4 colorPrim text-lg">
                <li>• Accesso a opportunità nascoste</li>
                <li>• Consigli diretti da chi lavora nel settore</li>
                <li>• Crescita professionale più rapida</li>
                <li>• Maggiore sicurezza nei colloqui</li>
                </ul>
            </motion.div>
            </div>
        </section>

        {/* COME FUNZIONA */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl font-semibold colorSec text-center" {...fadeUp}>
                Come funziona
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-2 gap-10">
                {steps.map((s, i) => (
                <motion.div
                    key={s.title}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                    <div className="text-3xl colorSec mb-4 flex justify-center">
                    {s.icon}
                    </div>
                    <h3 className="text-xl font-semibold colorSec">{s.title}</h3>
                    <p className="mt-3 colorPrim">{s.text}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* PERSONE / NETWORK */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2 className="text-3xl font-semibold colorSec text-center" {...fadeUp}>
                    Professionisti del network
                </motion.h2>

                <motion.p
                    className="mt-6 customTextSize2 colorPrim max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    Alcuni esempi di figure con cui potrai confrontarti.
                </motion.p>

                <div className="mt-16">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        className="mt-16"
                        >
                        {people.map((p) => (
                            <SwiperSlide key={p.name}>
                            <motion.div
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center max-w-xl mx-auto"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                src={p.img}
                                alt={p.name}
                                className="w-full h-72 object-cover rounded-xl"
                                />
                                <h3 className="mt-6 text-xl font-semibold colorSec">{p.name}</h3>
                                <p className="mt-2 colorPrim">{p.role}</p>
                                <p className="colorPrim text-sm">{p.company}</p>
                            </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl font-semibold colorSec" {...fadeUp}>
                Vuoi iniziare a fare networking nel modo giusto?
            </motion.h2>

            <motion.p
                className="mt-6 customTextSize2 colorPrim max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Raccontaci il tuo obiettivo e ti aiutiamo a costruire
                una strategia di networking efficace e sostenibile.
            </motion.p>

            <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <a
                href="/contatti"
                className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                Contattaci
                </a>
                <a
                href="/servizi"
                className="rounded-lg bgPrim px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                Scopri i nostri servizi
                </a>
            </motion.div>
            </div>
        </section>
        </div>
    );
}
