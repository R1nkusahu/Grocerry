import axios from 'axios';

function Logout() {
  const handleLogout = async () => {
    try {
      await axios.delete('http://localhost:3000/logout', { withCredentials: true });
      alert('Logged out successfully');
      // handle post-logout actions (e.g., redirect, update state)
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
