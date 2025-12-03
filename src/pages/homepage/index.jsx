export default function Homepage() {
    return (
        <div className="min-h-screen colorSec">

        {/* HERO */}
        <section className="px-6 py-20 max-w-4xl mx-auto flex flex-col">
            <h1 className="text-3xl font-semibold leading-tight">
            LaPiacentino – La tua guida nei contratti
            </h1>

            <p className="mt-4 text-lg">
            Assicurazioni <br />
            Accesso al credito <br />
            Consulenza su documenti e pratiche complesse
            </p>

            <button className="mt-8 bgPrim text-white px-6 py-2 rounded-lg font-medium w-50">
            Scopri di più
            </button>
        </section>

        </div>
    );
}
