import React  from "react";

import { AllTopBar } from "../component/Hometopbar/dropdown";
import mouse from '../assets/wishlist/asset 2.png'
import  keyboard   from '../assets/wishlist/asset 3.png'
import camera from '../assets/wishlist/asset 4.png'
import Navbar from "../component/navbar";

export default function Cart(){
    return(
        <>
           <div>
              <AllTopBar/>
           </div>
           <div>
             <Navbar/>
           </div>


             
      <div className="CART-SECTION mx-auto container">
        <div className="TABLE-SECTION">
          <div className="mt-20 mx-28 flex justify-between">
            <h1 className="text-2xl text-gray-800 font-semibold">Your Cart</h1>
            <p className="mt-1 text-blue-500 hover:text-black cursor-pointer duration-300 text-md">
              Clear Shoping Cart
            </p>
          </div>

          <div className="py-4 mx-28 bg-gray-100 flex justify-around items-center mt-5 text-xl font-semibold text-gray-800">
            <p className="ml-7">Product</p>
            <p className="ml-[320px] mr-[15px]">Price</p>
            <p className="ml-[120px]">Quantity</p>
            <p className="ml-[140px]">Subtotal</p>
          </div>

          <div className="flex justify-between mx-28 py-4 items-center border-b-2 border-gray-100">
            <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300 "></i>
            <img className="h-20 w-20 -mx-32 cursor-pointer" src={mouse}></img>
            <p className="text-2xl hover:text-blue-600 cursor-pointer">
              Wireless PS Handler
            </p>
            <p className="mr-14 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-20 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <div className="text-gray-500 font-semibold text-xl mr-16">
              $275.00
            </div>
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
            <p className="mr-14 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-20 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <div className="text-gray-500 font-semibold text-xl mr-16">
              $275.00
            </div>
          </div>

          <div className="flex justify-between mx-28 py-4 items-center border-b-2 border-gray-100">
            <i class="fa-solid fa-xmark border w-8 h-8 rounded-full bg-gray-100 text-center leading-7 ml-4 cursor-pointer hover:border-blue-700 hover:ring-1 duration-300"></i>
            <img className="h-20 w-20 -mx-32 cursor-pointer" src={camera}></img>
            <p className="text-2xl hover:text-blue-600 cursor-pointer">
              Wireless PS Handler
            </p>
            <p className="mr-14 text-gray-500 font-semibold text-xl">$124.00</p>
            <p className="mr-20 text-xl text-gray-500 font-semibold">
              In Stock
            </p>
            <div className="text-gray-500 font-semibold text-xl mr-16">
              $275.00
            </div>
          </div>

          <div className="FORM-SECTION flex justify-around mt-10">
            <input
              className="border-b-2 p-2 text-sm w-[500px] ml-24 focus:outline-none"
              type="text"
              placeholder="Enter coupon code"
            ></input>
            <a>
              <button
                className="button border px-8 py-4 mr-[500px] rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:scale-110 duration-300"
                type="submit"
              >
                Apply
              </button>
            </a>
            <a>
              <button
                className="button font-semibold border px-10 py-4 mr-28 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-110 duration-300"
                type="submit"
              >
                Update Cart
              </button>
            </a>
          </div>
        </div>

        <div className="LOGIC-SECTION w-[550px] h-[550px] border ml-[870px] mt-20 bg-[#f9f3f0] border-[#f9f3f0] rounded-md text-sm">
          <h1 className="my-10 ml-8 text-xl">Order summary</h1>
          <div className="flex border-b-2 w-[500px] ml-5 py-4  ">
            <p className="ml-4 font-semibold text-lg">Subtotal</p>
            <p className="ml-32 text-lg font-semibold">$117.00</p>
          </div>
          <div className="flex border-b-2 w-[500px] ml-4 py-4 ">
            <p className="ml-4 font-semibold text-lg">Shipping</p>
            <div className="ml-32 leading-7">
              <a href="#">
                <input type="radio" id="box1" name="box1" value="Box"></input>
              </a>
              <label for="vehicle1" className="ml-2 font-semibold text-lg">
                {" "}
                Free Shippping
              </label>
              <br></br>
              <a href="#">
                {" "}
                <input type="radio" id="box2" name="box2" value="box"></input>
              </a>
              <label for="vehicle2" className="ml-3 font-semibold text-lg">
                Local:$35.00
              </label>
              <br></br>
              <a href="#">
                <input type="radio" id="box3" name="box3" value="Box"></input>
              </a>
              <label for="vehicle3" className="ml-3 font-semibold text-lg">
                Flat rate:$12.00
              </label>
              <br></br>
            </div>
          </div>
          <div className="flex border-b-2 w-[500px] ml-4 py-4">
            <p className="ml-4 text-lg font-semibold">State Tax</p>
            <p className="ml-32 text-lg font-semibold">$8.00</p>
          </div>
          <div className="flex  border-b-2 w-[500px] ml-4 py-4">
            <p className="ml-4 text-lg font-semibold">Total</p>
            <p className="ml-40 text-xl font-semibold text-blue-600">$125.00</p>
          </div>
          <button
            type="button"
            className="w-[500px] my-2 border ml-5 h-14 rounded-md bg-blue-500 text-white font-semibold text-lg hover:scale-105 duration-500 "
          >
            Process to checkout
          </button>
        </div>
      </div>
        </>
    )
}