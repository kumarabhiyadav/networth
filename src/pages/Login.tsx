import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-48 relative">
            <img 
              src={Logo}
              alt="Networth Tracker" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Lock Icon with Dots */}
        <div className="flex justify-center mt-10">
          <div className="relative">
            {/* Lock Icon */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12.75 15.75v1.5h-1.5v-1.5h1.5z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5a3.75 3.75 0 00-3.75 3.75V9h7.5V8.25A3.75 3.75 0 0012 4.5zM6.75 9V8.25a5.25 5.25 0 0110.5 0V9h.75a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3v-6a3 3 0 013-3h.75z"/>
              </svg>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600" />
            <div className="absolute top-1/4 -right-2 w-3 h-3 rounded-full bg-red-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-teal-400" />
            <div className="absolute bottom-1/4 -right-1 w-3 h-3 rounded-full bg-yellow-400" />
            <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Form */}
        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label 
                htmlFor="email" 
                className="block text-base font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-base font-medium text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;