// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TrusteeLevel from './TrusteeLevel/main';
import SelectionRecord from './TrusteeLevel/SelectionRecord';
import Analytics from './TrusteeLevel/Analytics';
import Status from './TrusteeLevel/Status'; // Updated import
import AlumniHome from './alumniLevel/AlumniHome';
import AlumniProfile from './alumniLevel/AlumniProfile';
import AlumniConnections from './alumniLevel/AlumniConnections';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/alumni/home" />} />
                <Route path="/alumni/home" element={<AlumniHome />} />
                <Route path="/alumni/profile" element={<AlumniProfile />} />
                <Route path="/alumni/connections" element={<AlumniConnections />} />
                <Route path="/" element={<TrusteeLevel />} />
                    <Route path="/selection-record" element={<SelectionRecord />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/status/:id" element={<Status />} />            </Routes>
        </Router>
    );
};


