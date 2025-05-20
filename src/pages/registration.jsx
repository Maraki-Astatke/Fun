import React from 'react';
import { useParams } from 'react-router-dom';

function Registration() {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Registration Page</h1>
      <p>You are registering for item with ID: {itemId}</p>
      {/* Add your registration form here */}
    </div>
  );
}

export default Registration;