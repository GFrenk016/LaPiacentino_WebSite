import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Homepage from '../pages/homepage/index.jsx';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    );
}