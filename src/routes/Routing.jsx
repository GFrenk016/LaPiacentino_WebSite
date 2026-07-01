import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Homepage from '../pages/homepage/index.jsx';
import Servizi from '../pages/servizi/index.jsx';
import Chisiamo from '../pages/chisiamo/index.jsx';
import Contatti from '../pages/contatti/index.jsx';
import Blog from '../pages/blog/index.jsx';
import Networking from '../pages/networking/index.jsx';
import Preventivo from '../pages/preventivo/index.jsx';

/*
 * MODALITÀ MANUTENZIONE / LANDING LOCKDOWN
 * -----------------------------------------------------------------------------
 * Quando attiva, l'UNICA pagina visibile è la landing "Richiedi preventivo":
 * ogni altra rotta viene reindirizzata (senza 404) sulla landing stessa.
 *
 * È controllata dalla variabile d'ambiente Vite `VITE_MAINTENANCE_MODE`
 * (vedi file `.env`).
 *   - attiva (default):  VITE_MAINTENANCE_MODE=true   -> solo landing
 *   - disattiva (sito):  VITE_MAINTENANCE_MODE=false  -> sito completo
 *
 * Comportamento di default: se la variabile non è impostata la manutenzione è
 * ATTIVA. Per riattivare l'intero sito basta impostarla a "false" e rifare la
 * build/deploy. Le rotte del sito completo restano definite qui sotto: non è
 * stato cancellato nulla, sono solo condizionate a questo flag.
 */
const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE !== 'false';

export default function Routing() {
    if (maintenanceMode) {
        return (
            <Routes>
                <Route path="/" element={<Preventivo />} />
                {/* Qualsiasi altra rotta torna pulita alla landing, niente 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/chi-siamo" element={<Chisiamo />} />
                <Route path="/contatti" element={<Contatti />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/networking" element={<Networking />} />
                <Route path="/preventivo" element={<Preventivo />} />
            </Route>
        </Routes>
    );
}
