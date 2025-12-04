import Logo from "../../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";

export default function Homepage() {
    return (
        <div className="">

            {/* ========== HERO (tuo stile) ========== */}
            <section className="px-6 py-24 max-w-6xl mx-auto flex flex-col items-center text-center gap-4 text-3xl">
                <img src={Logo} alt="Logo" className="customSize" />

                <h1 className="mt-8 customTextSize font-semibold leading-tight colorSec">
                    Costruisci il tuo futuro
                </h1>

                <button className="mt-20 bgPrim py-4 rounded-lg text-xl font-medium w-50 hover:opacity-90 transition text-white">
                    <FaArrowDown />
                </button>
            </section>



            {/* ========== CHI SIAMO / MISSION ========== */}
            <section className="mt-20 px-6 py-24 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
                <h2 className="customTextSize font-semibold colorSec">
                    La nostra missione
                </h2>

                <p className="customTextSize2 text-neutral-300 leading-relaxed max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate corrupti molestias placeat odio tempora possimus, necessitatibus sit repudiandae aspernatur ducimus.
                </p>

                <a
                    href="#cta"
                    className="mt-10 rounded-lg bgPrim px-10 py-6 text-xl font-semibold text-white shadow-sm transition"
                >
                    Scopri di più
                </a>
            </section>



            {/* ========== SERVIZI / COSA TROVERAI ========== */}
            <section className="
                mt-30
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
                    
                    <h2 className="customTextSize font-semibold text-white mb-20">
                        Cosa troverai su LaPiacentino
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 customTextSize2">
                        {/* CARD 1 */}
                        <a href="">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer">
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus?
                                </p>
                            </div>
                        </a>

                        {/* CARD 2 */}
                        <a href="">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer">
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus?
                                </p>
                            </div>
                        </a>

                        {/* CARD 3 */}
                        <a href="">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition cursor-pointer">
                                <h3 className="font-semibold text-white">Lorem ipsum</h3>
                                <p className="text-2xl mt-3 text-neutral-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus?
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </section>




            {/* ========== CTA FINALE ========== */}
            <section className="mt-20 mb-10 px-6 py-24 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 grid grid-cols-2">
                
                <img 
                    src={`https://picsum.photos/400/300?random=${Math.random()}`}
                    alt="random"
                    className="w-full object-cover rounded-lg" 
                />

                <div className="flex flex-col">
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
                </div>

            </section>

        </div>
    );
}
