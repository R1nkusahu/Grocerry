import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const handleSuccess = (response) => {
    fetch('http://localhost:3000/auth/google_oauth2/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: response.tokenId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Login success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFailure = (response) => {
    console.error('Login failed:', response);
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
