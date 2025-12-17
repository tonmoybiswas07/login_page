import React from 'react';

const About = () => {
    return (
        <div>
           <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
      <div className="bg-white/90 rounded-2xl p-8 text-center shadow-xl max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          About Page
        </h1>
        <p className="text-gray-600">
         About Page is currently under development.  
          Please check back soon.
        </p>
      </div>
    </div>
        </div>
    );
};

export default About;