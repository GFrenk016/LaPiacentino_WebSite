import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
    };

    const posts = useMemo(
        () => [
        {
            id: "cv-ats",
            title: "CV ATS-friendly: come farlo leggere davvero",
            excerpt:
            "Come strutturare un CV chiaro e compatibile con i sistemi di selezione automatica, senza perdere personalità.",
            category: "CV",
            date: "12 Dic 2025",
            readTime: "5 min",
            cover: "https://picsum.photos/900/600?random=31",
        },
        {
            id: "colloquio-domande",
            title: "Le 10 domande più comuni ai colloqui (e come rispondere)",
            excerpt:
            "Strategie pratiche per rispondere in modo preciso e convincente, senza sembrare “preparato a memoria”.",
            category: "Colloqui",
            date: "10 Dic 2025",
            readTime: "7 min",
            cover: "https://picsum.photos/900/600?random=32",
        },
        {
            id: "linkedin-profilo",
            title: "LinkedIn: ottimizza headline e summary in 15 minuti",
            excerpt:
            "Piccole modifiche che aumentano la chiarezza del profilo e migliorano la prima impressione.",
            category: "LinkedIn",
            date: "05 Dic 2025",
            readTime: "4 min",
            cover: "https://picsum.photos/900/600?random=33",
        },
        {
            id: "candidature-strategia",
            title: "Candidature: qualità vs quantità (la strategia che funziona)",
            excerpt:
            "Come organizzare le candidature con un metodo semplice per evitare dispersione e frustrazione.",
            category: "Ricerca",
            date: "01 Dic 2025",
            readTime: "6 min",
            cover: "https://picsum.photos/900/600?random=34",
        },
        {
            id: "portfolio-base",
            title: "Portfolio: cosa inserire se stai iniziando",
            excerpt:
            "Esempi e struttura base per presentarti bene anche se hai pochi progetti.",
            category: "Portfolio",
            date: "27 Nov 2025",
            readTime: "5 min",
            cover: "https://picsum.photos/900/600?random=35",
        },
        {
            id: "soft-skills",
            title: "Soft skills: come dimostrarle (non solo dirle)",
            excerpt:
            "Frasi e tecniche per raccontare competenze trasversali in modo credibile durante CV e colloquio.",
            category: "Crescita",
            date: "22 Nov 2025",
            readTime: "6 min",
            cover: "https://picsum.photos/900/600?random=36",
        },
        ],
        []
    );

    const categories = useMemo(() => ["Tutti", ...new Set(posts.map((p) => p.category))], [posts]);

    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Tutti");

    const filteredPosts = useMemo(() => {
        const q = query.trim().toLowerCase();
        return posts.filter((p) => {
        const matchesCategory = activeCategory === "Tutti" || p.category === activeCategory;
        const matchesQuery =
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
        });
    }, [posts, query, activeCategory]);

    const featured = posts[0];

    return (
        <div className="min-h-screen w-full">

        {/* FEATURED */}
        <section className="w-full pb-10 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.div
                className="grid md:grid-cols-2 gap-10 items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
            >
                <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-72 object-cover rounded-xl"
                />
                <div className="text-left">
                <div className="text-sm colorSec">
                    <span className="font-semibold">{featured.category}</span> • {featured.date} •{" "}
                    {featured.readTime}
                </div>
                <h2 className="mt-4 text-2xl font-bold colorSec">{featured.title}</h2>
                <p className="mt-4 colorPrim text-lg leading-relaxed">{featured.excerpt}</p>

                <a
                    href={`/blog/${featured.id}`}
                    className="inline-block mt-8 rounded-lg bgPrim px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition"
                >
                    Leggi l’articolo
                </a>
                </div>
            </motion.div>
            </div>
        </section>

        {/* SEARCH + FILTERS */}
        <section className="w-full py-14 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.div
                className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8 }}
            >
                {/* Search */}
                <div className="flex-1">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cerca un articolo (es. CV, colloqui, LinkedIn...)"
                    className="w-full rounded-lg bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-white/30"
                />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                {categories.map((c) => (
                    <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition border
                        ${
                        activeCategory === c
                            ? "bgPrim text-white border-white/10"
                            : "bg-white/5 colorPrim border-white/10 hover:bg-white/10"
                        }`}
                    >
                    {c}
                    </button>
                ))}
                </div>
            </motion.div>
            </div>
        </section>

        {/* POSTS GRID */}
        <section className="w-full pb-24 px-6">
            <div className="max-w-6xl mx-auto">
            <motion.h2 className="text-3xl font-semibold colorSec text-center" {...fadeUp}>
                Ultimi articoli
            </motion.h2>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
                {filteredPosts.map((p, i) => (
                <motion.a
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="block"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                    <article className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:scale-[1.02] transition">
                    <img
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-44 object-cover rounded-xl"
                    />
                    <div className="mt-5 text-sm colorSec">
                        <span className="font-semibold">{p.category}</span> • {p.date} • {p.readTime}
                    </div>
                    <h3 className="mt-3 text-xl font-bold colorSec">{p.title}</h3>
                    <p className="mt-3 colorPrim leading-relaxed">{p.excerpt}</p>
                    <div className="mt-6 colorPrim font-semibold">Leggi →</div>
                    </article>
                </motion.a>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="mt-16 text-center text-2xl colorPrim">
                Nessun articolo trovato. Prova a cambiare filtro o ricerca.
                </div>
            )}
            </div>
        </section>

        </div>
    );
}
