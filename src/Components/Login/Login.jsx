import React, { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {
   
          
              const [showPassword, setShowPassword] = useState(false);
            
              return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                      Login
                    </h2>
            
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
            
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-xs text-purple-600 mt-1"
                        >
                          {showPassword ? "Hide" : "Show"} Password
                        </button>
                      </div>
            
                      <button
                        type="submit"
                        className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 hover:opacity-90 transition"
                      >
                        Login
                      </button>
                    </form>
            
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Don’t have an account? <Link to="/signup"><span className="text-purple-600 cursor-pointer">Register</span></Link>
                    </p>
                  </div>
                </div>
              );
            };
 
export default Login;