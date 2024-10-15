import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import kitchenImage from '../assets/kitchen.jpg'; 
import bathroomImage from '../assets/bathroom.jpg'; 
import swimmingPoolImage from '../assets/swimmingpool.jpg'; 
import bedroomImage from '../assets/bedroom.jpg'; 
import gardenImage from '../assets/garden.jpg'; 
import './PropertyDetails.css';

const PropertyDetails = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();
  const { id } = useParams();

  const propertyData = [
    {
      id: 1,
      title: "Luxury Apartment",
      description: "Located in downtown with amazing amenities.",
      price: 750000,
      images: [
        { src: kitchenImage, name: "Kitchen" },
        { src: bathroomImage, name: "Bathroom" },
        { src: swimmingPoolImage, name: "Swimming Pool" },
        { src: bedroomImage, name: "Bedroom" },
        { src: gardenImage, name: "Garden" }
      ]
    },
    {
      id: 2,
      title: "Modern Condo",
      description: "Spacious and modern condo with city views.",
      price: 620000,
      images: [
        { src: kitchenImage, name: "Kitchen" },
        { src: bathroomImage, name: "Bathroom" },
        { src: swimmingPoolImage, name: "Swimming Pool" },
        { src: bedroomImage, name: "Bedroom" },
        { src: gardenImage, name: "Garden" }
      ]
    },
    {
      id: 3,
      title: "Beachfront Villa",
      description: "Exclusive villa with private beach access.",
      price: 1500000,
      images: [
        { src: kitchenImage, name: "Kitchen" },
        { src: bathroomImage, name: "Bathroom" },
        { src: swimmingPoolImage, name: "Swimming Pool" },
        { src: bedroomImage, name: "Bedroom" },
        { src: gardenImage, name: "Garden" }
      ]
    },
    // Add other properties as needed...
  ];

  const property = propertyData.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found.</div>;
  }

  const handleBuy = () => {
    navigate('/register', { state: { propertyId: property.id } });
  };

  const handleAddToCart = () => {
    const updatedCart = [...cart, property];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${property.title} added to the cart!`);
    navigate('/cart');
  };

  return (
    <div className="property-details-container">
      <h1 className="property-title">{property.title}</h1>
      <div className="image-gallery-card">
        <h2 className="gallery-title">Image Gallery</h2>
        <div className="image-gallery">
          {property.images.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-item-card">
                <img src={image.src} alt={`${property.title} - ${image.name}`} className="property-image-gallery" />
                <p className="image-caption">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="property-description">{property.description}</p>
      <p className="property-price">${property.price.toLocaleString()}</p>

      <div className="action-buttons">
        <button className="btn buy-btn" onClick={handleBuy}>Buy</button>
        <button className="btn cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <Link to="/properties" className="back-link">Back to All Properties</Link>
    </div>
  );
};

export default PropertyDetails;
