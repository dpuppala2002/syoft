import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<LogIn />} />
            </Routes>
        </div>
    );
};

export default App;

