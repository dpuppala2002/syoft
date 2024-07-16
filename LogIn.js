import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
            if (response.data.success) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/dashboard');
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
                <button type="submit">Log In</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default LogIn;
