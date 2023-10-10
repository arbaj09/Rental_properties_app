
import './HomePage.css'
import DeletePropertyButton from '../DeleteButton/DeletePropertyButton';
import { GrAdd } from "react-icons/gr";
import { useAuth0 } from "@auth0/auth0-react";

import React, { useState, useEffect } from 'react';



function PropertyList(props) {
  const {isAuthenticated} = useAuth0();
 
  const [properties, setProperties] = useState([]);


  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }


  



    // Implement logic to update the property list (e.g., fetch properties again)


  useEffect(() => {
   
    
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://apiodata-production.up.railway.app/api/list-properties');
        if (response.ok) {
          const propertyData = await response.json();
  
          setProperties(propertyData);
           } 
          else {
          // Handle errors if the request is not successful
          return<div>something went wrong</div>
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  



  return (
    <div className='container'>
      <div className='add-btn'>
       {isAuthenticated&& <><button onClick={props.onAddPropertyHandler} className="Filter_Button"><GrAdd className='add' /></button><button onClick={props.onFilterPropertyShow} className="Filter_Button">Filter </button></>}
      </div>
    
 
 
   
     <div className="property-listings">

                  {properties.map((property) => (
                      <li key={property._id} className="property-card">
                        <div className='property-image'  >
                            <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/201908/house_prop_660_080719010504.jpg'alt='prrr'/>
                        </div>

                        
                          <h2>{property.title}</h2>
                          <p>Location: {property.location}</p>
                          <p>Available from: {formatDate(property.availableFromDate)}</p>
                          <p>Price: ₹{property.price}</p>
                          <p>Property Type: {property.propertyType}</p>
                          <DeletePropertyButton propertyId={property._id} onDelete={props.handleDelete} />
                      </li>
                  ))}
              </div>
              </div>
 
  );
}

export default PropertyList;

