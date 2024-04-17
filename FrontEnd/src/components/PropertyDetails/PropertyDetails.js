// PropertyDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);


  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }




  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://rental-prlts-api.onrender.com/api/propertyDetails/${id}`);
        if (response.ok) {

         
          const propertyData = await response.json();
          setProperty(propertyData);
          
        } else {
          // Handle errors if the request is not successful
          alert('Error fetching property details');
        }
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };
    fetchProperty();
  }, [id]);

  return (<><></><div className='flex     w-full flex-col font-sans justify-center items-center h-full gap-2'>
    <div  className='  '>
      {property ? (
        <div className='flex   flex-col w-screen  p-2     bg-red-100 '>
          <img className='h-60 w-full   animate-pulse' src={property.image}  alt="propertyimg"/>
          <h2 className='text-center text-4xl font-bold font-serif '> {property.title}</h2>
          <div className='text-justify  text-xl '>
          <p>Description: {property.description}</p>
          <p>Location: {property.location}</p>
          <p>Amount: ₹ {property.price}</p>
          <p>propertyType: {property.propertyType}</p>
          <p>Owner: {property.owner}</p>
                  <p>Available from: {formatDate(property.availableFromDate)}</p>
          </div>
      
          {/* Add more details as needed */}
        </div>
      ) : (
        <p className='text-center text-cyan-500'>Loading...</p>
      )}
    </div>
    <div className='flex   items-center justify-center  ' >
      <form  method="POST" className="  w-96">
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {' '}
              Email address{' '}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                name='Email'
              


              ></input>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">

           Name
              </label>
            
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                name='Password'
              
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
            Book Now
            </button>
          </div>
        </div>
      </form>






    </div>






  </div></>
  );
}

export default PropertyDetails;
