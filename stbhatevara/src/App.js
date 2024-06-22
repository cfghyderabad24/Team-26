// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrusteeLevel from './TrusteeLevel/main';
import SelectionRecord from './TrusteeLevel/SelectionRecord';
import Analytics from './TrusteeLevel/Analytics';
import Status from './TrusteeLevel/Status'; // Updated import

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TrusteeLevel />} />
                    <Route path="/selection-record" element={<SelectionRecord />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/status/:id" element={<Status />} /> {/* New route for Status component */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
