import React from "react";
import "./DeletePropertyButton.css";
import { BiSolidTrashAlt } from "react-icons/bi";

const DeletePropertyButton = ({ propertyId, onDelete }) => {
  const handleDelete = async () => {
    console.log(propertyId)
 



    try {
      const response = await fetch(
        `https://rental-prlts-api.onrender.com/api/property/${propertyId }`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
     return <div className="flex justify-center justify-items-center w-72 bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded">Property deleted successfully</div>

        // Trigger a callback to update the property list after deletion
      } else {
        console.error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <button onClick={handleDelete}>
      <BiSolidTrashAlt className="trash" />
    </button>
  );
};

export default DeletePropertyButton;
