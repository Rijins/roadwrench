// ViewWorkshops.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Fetch workshops data from the server
    axios.get('http://localhost:8000/workshops')
      .then(response => setWorkshops(response.data))
      .catch(error => console.error('Error fetching workshops:', error));
  }, []);

  const handleDelete = (workshopId) => {
    // Delete a workshop by sending a request to the server
    axios.delete(`http://localhost:8000/workshops/${workshopId}`)
      .then(response => {
        console.log('Workshop deleted successfully');
        // Update the workshops state after deletion
        setWorkshops(prevWorkshops => prevWorkshops.filter(workshop => workshop._id !== workshopId));
      })
      .catch(error => console.error('Error deleting workshop:', error));
  };

  return (
    <div>
      <h1>View Workshops</h1>
      <ul>
        {workshops.map(workshop => (
          <li key={workshop._id}>
            <p>{`Workshop Name: ${workshop.workshopName}`}</p>
            <p>{`Owner Name: ${workshop.ownerName}`}</p>
            <p>{`User ID: ${workshop.userId}`}</p>
            {/* Add other details as needed */}
            <button onClick={() => handleDelete(workshop._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewWorkshops;
