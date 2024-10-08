import React from "react";
import {Link} from 'react-router-dom'
import { ImageSlidder, MiniImageSlidder } from "./Imageslider";

export const Findstore = () => {
  return (
    <div className="w-full h-screen bg-zinc-50">
      {/* Top bar */}
      <div className="px-3 py-3 text-white bg-[#0076ce] flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="w-40">
          <img
            className="mt-3"
            src="https://i.ibb.co/7Y1339j/Mask-group.png" alt="Dell logo"/>
        </div>
        {/* Menu */}
        <div className="flex gap-5 items-center text-white font-semibold">
          <select className="bg-sky-600">
            <option value="">Latest Offers</option>
          </select>
          <a href="#">Redeem Offers</a>
          <a href="#">Service Center</a>
          <select className="bg-sky-600">
            <option value="">New Launch</option>
          </select>
        </div>

        {/* Contact and social icons */}
        <div className="flex gap-10">
          <div className="text-sm text-center">
            <p>Connect with Store</p>
            <h2 className="font-bold text-xl">+919513631770</h2>
          </div>
          <div className="text-sm text-center">
            <p>Connect with us on</p>
            <div className="flex justify-center text-xl gap-5">
              <i className="ri-facebook-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-youtube-fill"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Image slider */}
      <div className="w-full h-[50%] relative bg-gray-100 text-black">
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url('your-image-url')` }}
        >
          <ImageSlidder/>
        </div>

        {/* Search bar */}
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-xl p-3 border border-zinc-900 bg-white flex justify-between items-center gap-5">
          <div className="flex items-center">
            <i className="ri-map-pin-line"></i>
            <p className="ml-2">Locate Me</p>
          </div>
          <div className="flex-grow flex items-center">
            <i className="ri-search-line"></i>
            <input
              className="ml-2 flex-grow border-none outline-none"
              type="text"
              placeholder="Search Dell locations"
            />
          </div>
          <button className="bg-blue-600 text-white py-3 px-6">
            <Link to="/login">Find Stores</Link>
          </button>
        </div>
      </div>

      {/* City store section */}
      <div className="text-center py-12">
        <h2>View stores by city</h2>
        <div className="grid grid-cols-1 w-[55%] mx-auto md:grid-cols-3 lg:grid-cols-6 mt-4">
          <img
            className="w-[100%]"
            src="https://i.ibb.co/7ybsPqC/Screenshot-886-1-1.png"alt="Kolkata"
          />
          <img
            className="w-[100%]"
            src="https://i.ibb.co/hgjdcyL/Screenshot-886-3-1.png"alt="Mumbai"
          />
          <img
            className="w-[100%]"
            src="https://i.ibb.co/MP0D2R6/Screenshot-886-4-1.png"alt="Delhi"
          />
          <img
            className="w-[100%]"
            src="https://i.ibb.co/5KxK6BF/Screenshot-886-5-1.png"alt="Bangalore"
          />
          <img
            className="w-[100%]"
            src="https://i.ibb.co/QQHdVwd/Screenshot-886-6-1.png"alt="Hyderabad"
          />
          <img
            className="w-[100%]"
            src="https://i.ibb.co/xLP1yrQ/Screenshot-886-7-1.png"alt="Chennai"
          />
        </div>
      </div>
      {/* about details */}
      <div className="bg-zinc-50">
        <div className="container flex justify-between w-[80%] p-5 text-2xl">
          <h1>
            <span className="font-bold">What's</span> New
          </h1>
          <h1 className="font-bold">Offers</h1>
          <h1>
            <span className="font-bold">Our</span> Store
          </h1>
        </div>
        <div className="flex gap-2 p-5 items-center">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Azocd1pL86c"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>

          <div className="w-full flex gap-2">
            <div className="bg-white w-full h-full object-cover">
              <MiniImageSlidder/>
            </div>
            <div className="bg-white w-full"></div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-[#0076ce] text-white flex justify-between pt-3 p-5 items-center">
        <p>
          Copyright © 2024 Dell Inc. Terms of Sale Privacy Statement Legal &
          Regulatory Accessibility
        </p>
        <div className="w-40">
          <img
            className="mt-3"
            src="https://i.ibb.co/7Y1339j/Mask-group.png"
            alt="Dell logo"
          />
        </div>
      </div>
    </div>
  );
};
