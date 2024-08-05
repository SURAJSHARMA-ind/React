import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserDetail } = useContext(UserContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
  };

  const btnHandler = () => {
    setUserDetail({ email, password });
    setPassword("")
    setEmail("")
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl text-orange-600 font-bold text-center">Login</h1>

        <div className="space-y-4">
          <div className="email">
            <label htmlFor="email" className="block text-xl">Email:</label>
            <input
              type="text"
              placeholder="abc@gmail.com"
              value={email}
              onChange={emailHandler}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div className="pass">
            <label htmlFor="password" className="block text-xl">Password:</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={passHandler}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>

        <button
          onClick={btnHandler}
          className="w-full bg-orange-500 px-4 py-3 font-medium rounded hover:bg-orange-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
