import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../pages/SearchBar';
import '../components/FeaturedProjects.css';
import luxuryApartment from '../assets/luxury-apartment.jpg';
import modernCondo from '../assets/modern-condo.jpg';
import beachfrontVilla from '../assets/beachfront-villa.jpg';
import cozyCottage from '../assets/cozy-cottage.jpg';
import urbanLoft from '../assets/urban-loft.jpg';
import countryEstate from '../assets/country-estate.jpg';

const FeaturedProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      imgSrc: luxuryApartment,
      title: 'Luxury Apartment',
      description: 'Located in downtown with amazing amenities.',
      price: '$750,000',
    },
    {
      id: 2,
      imgSrc: modernCondo,
      title: 'Modern Condo',
      description: 'Spacious and modern condo with city views.',
      price: '$620,000',
    },
    {
      id: 3,
      imgSrc: beachfrontVilla,
      title: 'Beachfront Villa',
      description: 'Exclusive villa with private beach access.',
      price: '$1,500,000',
    },
    {
      id: 4,
      imgSrc: cozyCottage,
      title: 'Cozy Cottage',
      description: 'Charming cottage in a quiet neighborhood.',
      price: '$400,000',
    },
    {
      id: 5,
      imgSrc: urbanLoft,
      title: 'Urban Loft',
      description: 'Stylish loft in the heart of the city.',
      price: '$680,000',
    },
    {
      id: 6,
      imgSrc: countryEstate,
      title: 'Country Estate',
      description: 'Expansive estate with beautiful landscapes.',
      price: '$2,000,000',
    },
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="tooltip">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>{project.price}</p>
              </div>
            </div>
            <div className="project-info">
              <h3>
                <Link to={`/property/${project.id}`} className="project-title">{project.title}</Link>
              </h3>
              <p className="project-description">{project.description}</p>
              <p className="project-price">{project.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
