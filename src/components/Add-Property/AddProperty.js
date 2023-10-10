import React, { useState } from "react";
import "./AddProperty.css";
function AddProperty() {
  const [propertyData, setPropertyData] = useState({
    title: "",
    location: "",
    availableFromDate: "",
    price: "",
    propertyType: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://apiodata-production.up.railway.app/api/property", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });

      if (response.ok) {
        alert("success");

        // Data added successfully, you can redirect or show a success message
      } else {
        // Handle errors if the request is not successful
        console.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <>
      <h2>Add a New Property</h2>
      <div className="container-add">
        <form onSubmit={handleSubmit} className="Form-Control">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            required
            value={propertyData.title}
            onChange={handleInputChange}
          />
          <label>location:</label>
          <input
            required
            type="text"
            name="location"
            value={propertyData.location}
            onChange={handleInputChange}
          />
          <label> availableFromDate</label>
          <input
            required
            type="Date"
            name="availableFromDate"
            value={propertyData.availableFromDate}
            onChange={handleInputChange}
          />
          <label>price</label>
          <input
            required
            type="number"
            name="price"
            value={propertyData.price}
            onChange={handleInputChange}
          />
          <label> propertyType</label>
          <input
            required
            type="text"
            name="propertyType"
            value={propertyData.propertyType}
            onChange={handleInputChange}
          />
          {/* Add similar input fields for other property details */}

          <button type="submit" className="Add-BUTTON">
            Add Property
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProperty;
