import React, { useState } from "react";

export default function Login() {
  let [pstatus, setPstatus] = useState(false);
  let display = () => {
    setPstatus(!pstatus);
  };
  let [shown, setShown] = useState(true);
  return (
    <div className="main">
      {/* Button to open the login modal */}
      <button
        className="fixed top-[100px] right-0 bg-blue-500 text-white p-2 w-20 rotate-90 focus:outline-none hover:bg-blue-600 transition duration-300"
        onClick={() => setShown(!shown)}
      >
        Login
      </button>

      {/* Modal overlay */}
      <div
        className={`bg-black fixed inset-0 opacity-50 z-40 ${
          shown ? "block" : "hidden"
        }`}
      ></div>

      {/* Modal content */}
      <div
        className={`fixed inset-0 z-50 w-[400px] mx-auto my-16 p-8 h-auto mt-[100px] bg-green-700 shadow-lg rounded-lg transition duration-300 transform ${
          shown ? "scale-100" : "scale-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Close button */}
          <button
            onClick={() => setShown(!shown)}
            className="text-[40px] text-white focus:outline-none ml-[350px] mt-[-20px]"
          >
            &times;
          </button>

          {/* Username input */}
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter username"
          />

          {/* Email input */}
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="saadwaheed075@gmail.com"
          />

          {/* Password input */}
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type={pstatus ? "text" : "password"}
            placeholder="Enter your password"
          />

          {/* Toggle password button */}
          <button
            className="bg-blue-500 my-8 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors duration-200 focus:outline-none"
            onClick={display}
          >
            {pstatus ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}
