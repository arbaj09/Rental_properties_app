import './HomePage.css';
import DeletePropertyButton from '../DeleteButton/DeletePropertyButton';

import { Link } from 'react-router-dom';
import { GrAdd } from "react-icons/gr";
import React, { useEffect, useState  ,} from 'react';
import AddProperty from '../Add-Property/AddProperty';
import Filter from '../Filter/Filter';





function PropertyList(props) {
  const [properties, setProperties] = useState([]);
  const [Show, setShow] = useState(false);
  const [ShowFilter, setShowFilter] = useState(false);


  const AddPropertyHandler = () => {
    if (!Show) {
      setShow(true);
    }
    if (Show) {
      setShow(false);
    }
  };

  const FilterPropertyShow = () => {
    if (!ShowFilter) {
      setShowFilter(true);
    }
    if (ShowFilter) {
      setShowFilter(false);
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://rental-prlts-api.onrender.com/api/list-properties');
        if (response.ok) {
          
          const propertyData = await response.json();
       
          setProperties(propertyData);
        } else {
          // Handle errors if the request is not successful
          alert("Something went wrong while fetching properties");
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, [properties]);




  

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div className='container'>
     {ShowFilter && <Filter />}
 {Show && <AddProperty />}
      <div className='add-btn'>
        <>
          <button onClick={AddPropertyHandler} className="Filter_Button"><GrAdd className='add' /></button>
          <button onClick={FilterPropertyShow} className="Filter_Button">Filter</button>
        </>
      </div>
      <div className="property-listings">
        {properties.map((property) => (
          <li key={property._id} className="property-card">
            <div className='property-image'>
              <img src={property.image}alt='Property'/>
            </div>
            <h2>{property.title}</h2>
            {/* <p>Description: {property.description}</p> */}
            <p>Location: {property.location}</p>
            <p>Available from: {formatDate(property.availableFromDate)}</p>
            <p>Price: ₹{property.price}</p>
         
            <DeletePropertyButton propertyId={property._id} onDelete={props.handleDelete} />  

          <Link to={`/property/${property._id}`} > <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'


        
            >View Details</button> 
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
