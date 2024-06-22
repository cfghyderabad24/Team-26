// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrusteeLevel from './Volunteer/main';
import StudentDetails  from './Volunteer/studentDetails';
import MeetingForm from './Volunteer/meeting';
import Status from './Volunteer/specificStudent';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TrusteeLevel />} />
                    <Route path="/studentDetails" element={<StudentDetails/>} />
                    <Route path="/meeting" element={<MeetingForm/>} />
                    <Route path="/specificStudent/:id" element={<Status/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;