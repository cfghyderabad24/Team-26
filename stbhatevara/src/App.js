// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrusteeLevel from './TrusteeLevel/main';
import SelectionRecord from './TrusteeLevel/SelectionRecord';
import Analytics from './TrusteeLevel/Analytics';
import Status from './TrusteeLevel/Status'; // Updated import
import Vol from './Volunteer/main'
import StudentDetails from './Volunteer/studentDetails';
import MeetingForm from './Volunteer/meeting';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TrusteeLevel />} />
                    <Route path="/selection-record" element={<SelectionRecord />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/status/:id" element={<Status />} /> {/* New route for Status component */}
                    <Route path="/volunteer" element={<Vol />} />
                    <Route path="/volunteerStudentDetails" element={<StudentDetails/>} />
                    <Route path="/volunteerMeeting" element={<MeetingForm/>} />
                    <Route path="/volunteerSpecificStudent/:id" element={<Status/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
