import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        navigate('/login', { replace: true }); // Redirect to login if user is not logged in
        return null;
    }

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user.user_firstname}!</h2>
            <div className="user-info">
                <p><strong>Email:</strong> {user.user_email}</p>
                <p><strong>Phone:</strong> {user.user_phone}</p>
                <p><strong>Last Name:</strong> {user.user_lastname}</p>
                <p><strong>City:</strong> {user.user_city}</p>
                <p><strong>Zipcode:</strong> {user.user_zipcode}</p>
            </div>
            <button onClick={() => {
                localStorage.removeItem('user');
                navigate('/login', { replace: true });
            }}>Log Out</button>
        </div>
    );
};

export default Dashboard;
