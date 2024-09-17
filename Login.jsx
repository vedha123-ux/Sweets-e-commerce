import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  // Function to handle form submission, email, and password validation
  const handleSignIn = (e) => {
    e.preventDefault();

    // Email validation regex (starts with letter, no numbers at the start)
    const emailRegex = /^[A-Za-z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address that does not start with numbers.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    // If both email and password are valid, proceed to navigation
    if (valid) {
      navigate('/home');
    }
  };

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strength = '';
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/; // Strong password: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const mediumPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Medium password: at least 6 characters, 1 letter, and 1 number

    if (strongPasswordRegex.test(password)) {
      strength = 'Strong';
    } else if (mediumPasswordRegex.test(password)) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }

    setPasswordStrength(strength);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          {/* Flex Container for Horizontal Layout */}
          <div className="flex space-x-6">
            {/* Email */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
                placeholder="Enter your email"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPasswordStrength(e.target.value);
                }}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              <p className={`mt-1 text-sm ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
                {passwordStrength && `Password Strength: ${passwordStrength}`}
              </p>
              <a href="#" className="text-sm text-indigo-600 hover:underline mt-1">
                Recover Password
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="text-left">
            <button
              type="submit"
              className="bg-black text-white py-1 px-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="mt-4 text-left">
          <button
            onClick={() => navigate('/register')}
            className="text-sm text-black-600 hover:underline"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
