import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Login successful!');
    
    // Add your login logic here (e.g., API call)

    // Redirect to the home page after login
    navigate('/');
  };

  return (
    <div className="contact">
      <div className="contact-content login-container"> {/* Added login-container class for centering */}
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="contact-form"> {/* Reusing contact-form class for styling */}
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              required 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              className="form-input" 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              required 
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
              className="form-input"
            />
          </div>
          <button type="submit" className="contact-submit">Login</button> {/* Reused submit button style */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
