// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header1'; // Your Header component
import Navbar from './pages/Navbar'; // Your Navbar component
import SearchBar from './pages/SearchBar'; // Your SearchBar component
import Footer from './components/Footer'; // Your Footer component
import Home from './pages/Home'; // Home page
import About from './pages/About'; // About page
import Contact from './pages/Contact'; // Contact page
import FeaturedProjects from './components/FeaturedProjects'; // Featured Projects page
import PropertyDetails from './components/PropertyDetails'; // Property details page
import PropertiesPage from './pages/PropertiesPage'; // Properties listing page
import NotFound from './pages/NotFound'; // 404 Page
import Register from './components/Register'; // Register page
import Login from './pages/Login'; // Login page
import Cart from './pages/Cart'; // Cart page

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Include the Header, Navbar, and SearchBar globally across all pages */}
        <Header />
        <Navbar />
        <SearchBar />

        {/* Define your routes for different components/pages */}
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for About Page */}
          <Route path="/about" element={<About />} />

          {/* Route for Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Route for Featured Projects */}
          <Route path="/featured-projects" element={<FeaturedProjects />} />

          {/* Route for the Properties Listing Page */}
          <Route path="/properties" element={<PropertiesPage />} />

          {/* Route for Property Details Page, which expects an id param */}
          <Route path="/property/:id" element={<PropertyDetails />} />

          {/* Route for the Register Page */}
          <Route path="/register" element={<Register />} />

          {/* Route for the Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Route for the Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* Route for 404 Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Include Footer globally across all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
