// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/signup', {
//         user: {
//           email,
//           password,
//           password_confirmation: passwordConfirmation
//         }
//       }, { withCredentials: true });

//       if (response.data.status === 'created') {
//         alert('Account created successfully');
//         // handle success (e.g., redirect, update state)
//       } else {
//         alert('Signup failed');
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <h2>Signup</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="password"
//         value={passwordConfirmation}
//         onChange={(e) => setPasswordConfirmation(e.target.value)}
//         placeholder="Confirm Password"
//         required
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// }

// export default Signup;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');

//     if (password !== passwordConfirmation) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:3000/signup', {
//         user: {
//           email,
//           password,
//           password_confirmation: passwordConfirmation
//         }
//       }, { withCredentials: true });

//       if (response.status === 201) {
//         alert('Account created successfully');
//         // handle success (e.g., redirect, update state)
//       } else {
//         setErrorMessage('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       if (error.response && error.response.data.errors) {
//         setErrorMessage(error.response.data.errors.join(', '));
//       } else {
//         setErrorMessage('An unexpected error occurred. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <h2>Signup</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="password"
//         value={passwordConfirmation}
//         onChange={(e) => setPasswordConfirmation(e.target.value)}
//         placeholder="Confirm Password"
//         required
//       />
      
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Signing up...' : 'Signup'}
//       </button>
//     </form>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== passwordConfirmation) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      }, { withCredentials: true });

      if (response.status === 201) {
        alert('Account created successfully');
        
      } else {
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrorMessage(error.response.data.errors.join(', '));
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='form' onSubmit={handleSignup}>
      <h2 className='h2'>Signup</h2>
      <input
      className='input'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
      className='input'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        className='input'
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      
      {errorMessage && <p>{errorMessage}</p>}

      <button className='button' type="submit" disabled={isLoading}>
        {isLoading ? 'Signing up...' : 'Signup'}
      </button>
    </form>
  );
}

export default Signup;
