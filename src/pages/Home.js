import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti'; // Import confetti library
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Trigger confetti effect when the component mounts
  useEffect(() => {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval); // Stop after 5 seconds
        return;
      }

      // Random confetti burst
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(), // Random x-axis
          y: Math.random() - 0.2 // Slightly off the top
        }
      });
    }, 250); // Confetti burst every 250ms for 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleExploreClick = () => {
    navigate('/featured-projects'); // Navigate to the Featured Projects page
  };

  return (
    <div className="home">
      <div className="note-card">
        <h1>Welcome to Highwind Properties!</h1>
        <p>Explore our exclusive properties and find your dream home today.</p>
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore Properties
        </button>
      </div>
    </div>
  );
};

export default Home;
