import React from "react";
import "./DeletePropertyButton.css";
import { BiSolidTrashAlt } from "react-icons/bi";

const DeletePropertyButton = ({ propertyId, onDelete }) => {
  const handleDelete = async () => {
 

    try {
      const response = await fetch(
        `https://apiodata-production.up.railway.app/api/property/${propertyId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("deleted");

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
