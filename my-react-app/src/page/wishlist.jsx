import React from "react";

import mouse from '../assets/wishlist/asset 2.png'
import keyboard from '../assets/wishlist/asset 3.png'
import camera from '../assets/wishlist/asset 4.png'
import Footer2 from "../component/footer2";
import Navbar from "../component/navbar";
import { AllTopBar } from "../component/Hometopbar/dropdown";


export const Wishlist = () => {
  return (
     <> 
     <div>
        <AllTopBar/>
     </div>
     <div className="sticky top-0 z-50 ">
       <Navbar/>
     </div>
     <div className="WISHLIST-SECTION mx-auto container">
        <div className="TABLE-SECTION">
          <div className="mx-28">
            <h1 className="text-2xl text-gray-900 mt-20">
              My Wish List on eTrade
            </h1>
          </div>

          <div className="py-3 mx-28 bg-gray-100 flex justify-around items-center mt-5 text-xl font-semibold text-gray-800">
            <p className="">Product</p>
            <p className="ml-56">Unit Price</p>
            <p className="mr-60">Stoke Status</p>
          </div>

          <div className="flex justify-between mx-28 py-4 items-center border-b-2 border-gray-100">
            <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300 "></i>
            <img className="h-20 w-20 -mx-32 cursor-pointer" src={mouse}></img>
            <p className="text-2xl hover:text-blue-600 cursor-pointer">
              Wireless PS Handler
            </p>
            <p className="mr-10 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-16 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-blue-500 duration-300">
              Add to Cart
            </button>
          </div>

          <div className="flex justify-between mx-28 py-4 items-center border-b-2 border-gray-100">
            <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300"></i>
            <img
              className="h-20 w-20 -mx-32 cursor-pointer"
              src={keyboard}
            ></img>
            <p className="text-2xl hover:text-blue-600 cursor-pointer">
              Wireless PS Handler
            </p>
            <p className="mr-10 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-16 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-blue-500 duration-300">
              Add to Cart
            </button>
          </div>

          <div className="flex justify-between mx-28 py-4 items-center border-b-2 border-gray-100">
            <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300"></i>
            <img className="h-20 w-20 -mx-32 cursor-pointer" src={camera}></img>
            <p className="text-2xl hover:text-blue-600 cursor-pointer">
              Wireless PS Handler
            </p>
            <p className="mr-10 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-16 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <button className="border rounded-lg text-base font-semibold px-4 py-2 mr-4 hover:text-white hover:bg-blue-500 duration-300 cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
     <div>
      <Footer2/>
     </div>

    
    </>
  );
};
