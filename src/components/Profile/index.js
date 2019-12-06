import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then(result => setUser(result.data))
      .catch(error => console.log(error));
  }, [id]);
  return (
    <div>
      <h2>PROFILE {id}</h2>
      <h4>User: {user.email}</h4>
    </div>
  );
}

export default Profile;
