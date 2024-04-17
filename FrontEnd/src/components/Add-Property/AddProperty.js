    import React, { useEffect, useState } from "react";
  import "./AddProperty.css";

  function AddProperty() {
    const [propertyData, setPropertyData] = useState({
      title: "",
      location: "",
      availableFromDate: "",
      price: "",
      propertyType: "",
      description: "",
      image: null,
      owner: "",
    
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPropertyData({
        ...propertyData,
        [name]: value,
      });
    };
    const handleImageChange = (event) => {
      const imageFile = event.target.files[0]; // Get the first file from the FileList
      console.log(imageFile)
      setPropertyData({
        ...propertyData,
        image: imageFile,
      });
    };
  


    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const formData = new FormData();
        formData.append("title", propertyData.title);
        formData.append("location", propertyData.location);
        formData.append("availableFromDate", propertyData.availableFromDate);
        formData.append("price", propertyData.price);
        formData.append("propertyType", propertyData.propertyType);
        formData.append("description", propertyData.description);
        formData.append("owner", propertyData.owner);
        formData.append("image", propertyData.image); // Append the file object
  
        const response = await fetch("https://rental-prlts-api.onrender.com/api/property", {
          method: "POST",
        
          body: formData,
        });

        if (response.ok) {

         
          setIsSubmitted(true);
       
          



     

          setPropertyData({
            title: "",
            location: "",
            availableFromDate: "",
            price: "",
            propertyType: "",
            description: "",
            image: null,
            owner: "",
            
          })

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


        <label> Upload Image:</label>
            <input
              type="file"
              name="image"
              required
              value={propertyData.imageFile}
              onChange={handleImageChange}
            />


  <label>description:</label>
            <input
              type="text"
              name="description"
              required
              value={propertyData.description}
              onChange={handleInputChange}
            />
              <label>Name of owner:</label>
            <input
              type="text"
              name="owner"
              required
              value={propertyData.owner}
              onChange={handleInputChange}
            />
          
        
    
  


            <button type="submit" className="Add-BUTTON hover:curser-pointer hover:bg-[#f5f5f5] text-black" >
              Add Property
            </button>
          </form>
          {isSubmitted && <p className="text-green-500 absolute  ">Property added successfully!</p>}
          
        </div>
      </>
    );
  }

  export default AddProperty;