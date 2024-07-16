import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_phone: '',
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
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                ...formData,
                user_lastname: 'Doe',
                user_city: 'Hyderabad',
                user_zipcode: '500072'
            });
            if (response.data.success) {
                navigate('/login');
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_firstname" placeholder="First Name" value={formData.user_firstname} onChange={handleChange} required />
                <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
                <input type="text" name="user_phone" placeholder="Phone" value={formData.user_phone} onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
                <button type="submit">Sign Up</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    );
};

export default SignUp;
