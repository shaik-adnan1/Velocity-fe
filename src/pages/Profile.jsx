import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);  // User data state
  const [error, setError] = useState(null); // Error handling
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        if (!token) {
          // If no token, redirect to login
          navigate('/login');
          return;
        }

        // Fetch the user's profile from the backend
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Set user data
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data. Please log in again.', err);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Remove the token from local storage and redirect to login
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add other user details as needed, like name, etc. */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
