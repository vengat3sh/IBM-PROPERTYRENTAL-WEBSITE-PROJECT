// frontend/src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './Register.css'; // Create this CSS file for styles

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          isAdmin: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }

      setSuccess(true);
      startConfetti();
      setTimeout(() => {
        navigate('/property/1');
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const startConfetti = () => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 250);
  };

  return (
    <div className="register-container">
      <h2>Register for Property Rental</h2>
      {error && <div className="alert alert-error">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Registration successful! Welcome!
        </div>
      )}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            required
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="btn submit-btn" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
