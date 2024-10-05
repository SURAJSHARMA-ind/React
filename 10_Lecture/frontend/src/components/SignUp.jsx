import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneno: ''
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true on form submission

    try {
      const response = await axios.post(`http://localhost:3000/auth/signup`, formData);

      if (response.status === 200) {
        toast.success('Account Created Successfully');
        setTimeout(() => {
          navigate('/signin'); // Navigate to SignIn page
        }, 1000); // Reduced delay for better UX
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('User Already Exists');
      } else if (error.response && error.response.status === 400) {
        toast.error('Incorrect signup format. Please check your inputs.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false); // Set loading to false after request finishes
    }
  };

  return (
    <form
      onSubmit={signupHandler}
      action=''
      method='post'
      className="h-screen bg-gradient-to-tl gap-4 from-zinc-900 to-slate-900 w-full justify-start flex-col flex flex-wrap items-center"
    >
      <div><Toaster /></div>
      
      <h1 className='text-4xl text-white font-bold'>Signup</h1>                                     

      <div className="border-indigo-500 border-2 justify-center p-4 bg-gradient-to-tl text-white from-zinc-800 to-slate-700 rounded-lg flex flex-col min-w-[30%]">
        <div className='mb-4'>
          <h1 className="text-white text-center font-bold text-3xl">
            Welcome to <span className='bg-gradient-to-r from-sky-600 to-indigo-600 text-transparent bg-clip-text'>100xDevs</span>
          </h1>
          <p className='text-center text-gray-400'>Signup to become part of 100xdevs</p>
        </div>
        
        {/* Username Field */}
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm">Username</label>
          <input
            minLength={6}
            maxLength={30}
            required
            onChange={changeHandler}
            placeholder="Enter Username"
            type="text"
            value={formData.username}
            name="username"
            id="username"
            className="w-full bg-zinc-900 rounded border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Email Field */}
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm">Email</label>
          <input
            minLength={6}
            maxLength={100}
            required
            onChange={changeHandler}
            placeholder="Enter Email"
            type="email"
            value={formData.email}
            name="email"
            id="email"
            className="w-full bg-zinc-900 rounded border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Phone Number Field */}
        <div className="relative mb-4">
          <label htmlFor="phoneno" className="leading-7 text-sm">Phone Number</label>
          <input
            required
            onChange={changeHandler}
            placeholder="Enter Phone Number"
            type="text"
            value={formData.phoneno}
            name="phoneno"
            id="phoneno"
            maxLength={10}
            minLength={10}
            pattern="\d{10}"
            title="Please enter a valid 10-digit phone number"
            className="w-full bg-zinc-900 rounded border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Password Field */}
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm">Password</label>
          <input
            minLength={8}
            maxLength={30}
            required
            onChange={changeHandler}
            placeholder='Your Password'
            type="password"
            value={formData.password}
            name="password"
            id="password"
            className="w-full bg-zinc-900 rounded border border-none border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'} {/* Show loading state */}
        </button>
      </div>
    </form>
  );
}

export default SignUp;
