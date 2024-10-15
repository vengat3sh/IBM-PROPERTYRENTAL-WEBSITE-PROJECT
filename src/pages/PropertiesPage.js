import React, { useState } from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import PropertyDetails from '../components/PropertyDetails';
import './PropertiesPage.css';

const PropertiesPage = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const handleSelectProperty = (id) => {
    setSelectedPropertyId(id);
  };

  return (
    <div className="properties-page">
      {/* Display either the list of properties or the selected property details */}
      {selectedPropertyId ? (
        <PropertyDetails selectedPropertyId={selectedPropertyId} onBack={() => setSelectedPropertyId(null)} />
      ) : (
        <FeaturedProjects onSelectProperty={handleSelectProperty} />
      )}
    </div>
  );
};

export default PropertiesPage;
