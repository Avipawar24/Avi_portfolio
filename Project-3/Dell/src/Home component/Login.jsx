import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <img
          src="https://imgs.search.brave.com/hCMtYb-yR7WyCiMBWyvbUbYd030hJIvqV10QeZ3H3zU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA3/L0RlbGwtTG9nby0x/OTg5LTUwMHgyODIu/anBn"
          alt="Dell Technologies"
          className="w-32 mx-auto mb-4"
        />
        
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <button className="w-full py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-center space-x-2 mb-4">
        <i className="ri-google-fill"></i>
          <span className="text-sm font-medium text-gray-700">Google Sign In</span>
        </button>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-sm text-blue-500">Create or Reset password</a>
        </div>

        <button onClick={()=>loginWithRedirect()} className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition">
          Sign In
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have a Dell account?{' '}
            <a href="#" className="text-blue-500">Create an account</a>
          </p>
        </div>
      </div>
      <footer className="bg-gray-100 text-gray-600 py-4">
      {/* Top Section */}
      <div className="border-b border-gray-300">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-start">
          {/* Links */}
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Careers
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Community
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Events
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Partner Program
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Dell Premier
          </a>
          <a href="#" className="mx-2 text-sm hover:text-gray-800">
            Dell Technologies
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm">
            &copy; 2024 Dell Inc.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end">
            <a href="#" className="mx-2 text-sm hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Privacy Statement
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Legal & Regulatory
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Returns
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Accessibility
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              ESG & Impact
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Recycling
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Privacy Centre
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Contact Us
            </a>
            <a href="#" className="mx-2 text-sm hover:text-white">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
