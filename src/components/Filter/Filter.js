import React, { useState } from 'react';
import './Filter.css'

function Filter() {
  const[FilterProperty,setFilterProperty]=useState([])
  const [filters, setFilters] = useState({
    
    location: '',
    availableFromDate: '',
    price: '',
    propertyType: '',

  })
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  const handleInputChange=(e)=>{

    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  console.log(filters)


  const handleFilterClick = async () => {
    
    

      // Construct the query parameters
      const queryParams = new URLSearchParams(filters);
      console.log(queryParams)
    
      
      // Make the API request to fetch filtered properties
      const response = await fetch(`https://apiodata-production.up.railway.app/api/filter-properties?${queryParams}`);
   
      if (response.ok) {
        const FilterProperties = await response.json();
        console.log('hersisi',FilterProperties)


      setFilterProperty(FilterProperties)


  
  
      
      }
  
 

    
      
    
    

      // Call the onFilter function with the filtered properties

     if (!response.ok) {
      console.error('Error filtering properties:', );
    }
  };

  return (
    // ... rest of the code
<div className='Filter-container'>

      <h2>Property Filters</h2>
      <div className='filter-item'>
        <label>
          Location:
          <input
    
            type="text"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className='filter-item'>
        <label>
          Available From Date:
          <input 
            type="date"
            name="availableFromDate"
            value={formatDate(filters.availableFromDate)}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className='filter-item'>
        <label>
           Price:
          <input 
            type="number"
            name="price"
            value={filters.price}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className='filter-item'>
        <label>
          Property Type:
          <select
          className='filter-options'
            name="propertyType"
            value={filters.propertyType}
            onChange={handleInputChange}
          >
            <option >Select Property Type</option>
            <option >Appartment</option>
            <option >Guest House</option>
            <option >Home</option>
            {/* Add more property types as needed */}
          </select>
        </label>
      </div>
      <button onClick={handleFilterClick}className="filter-button">Apply Filters</button>
    
      <div className="property-listings">
      
      {FilterProperty.map((property) => (
          <li key={property._id} className="property-card">
            <div className='property-image'  >
                <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/201908/house_prop_660_080719010504.jpg'alt='prrr'/>
            </div>

            
              <h2>{property.title}</h2>
              <p>Location: {property.location}</p>
              <p>Available from: {property.availableFromDate}</p>
              <p>Price: ₹{property.price}</p>
              <p>Property Type: {property.propertyType}</p>
          
          </li>
      ))}
  </div>




   
  </div>  
    
  );

}

export default Filter;
