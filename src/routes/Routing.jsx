import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Homepage from '../pages/homepage/index.jsx';
import Servizi from '../pages/servizi/index.jsx';
import Chisiamo from '../pages/chisiamo/index.jsx';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/chi-siamo" element={<Chisiamo />} />
            </Route>
        </Routes>
    );
}