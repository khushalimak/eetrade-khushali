import React from "react";
import alexa from "../assets/account/asset 2.png"
import Footer2 from "../component/footer2";
import { AllTopBar } from "../component/Hometopbar/dropdown";
import Navbar from "../component/navbar";
import SubFooter from "../component/subfooter";




export default function Account(){
    return(
        <>
        <div>
          <AllTopBar/>
        </div>
        <div className="sticky z-50 top-0">
          <Navbar/>
        </div>
        <div className=" Account-section ">
        <div className="first-part flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-16">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">My Account</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              Explore All Products
            </h1>
          </div>
          <div className="mx-16 relative z-10">
          <span className="before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full 
          before:-top-3 before:right-16 before:-z-10"></span>
            <img className="" src={alexa}></img>
          </div>
          </div>

        <div className="Second-part ml-40 mt-20">
          {/* <img className="rounded-full" src={author}></img> */}
          <h1 className="font-bold text-lg mt-3">Hello Annie</h1>
          <p className="text-gray-500 text-sm mt-1 font-semibold">
            eTrade Member Since Sep 2020
          </p>
        </div>

        <div className="Third-part mt-16 ml-40 flex">
          <div className="h-96 w-72 border border-gray-300 rounded-lg">
            <div className="mt-10">
              <div className="flex text-blue-500 mx-10  bg-gray-100 p-2 rounded-lg ">
                <i className="fas fa-th-large mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Dashboard</p>
              </div>

              <div className="flex text-gray-500 mx-10 mt-3  hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg">
                <i class="fas fa-shopping-basket mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Orders</p>
              </div>

              <div className="flex text-gray-500 mx-10 mt-3  hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg">
                <i className="fas fa-file-download mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Downloads</p>
              </div>

              <div className="flex text-gray-500 mx-10 mt-3  hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg">
                <i className="fas fa-home mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Addresses</p>
              </div>

              <div className="flex text-gray-500 mx-10 mt-3  hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg">
                <i className="fas fa-user mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Account Details</p>
              </div>

              <div className="flex text-gray-500 mx-10 mt-3  hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg">
                <i class="fa-solid fa-right-from-bracket mt-1"></i>
                <p className="ml-6 text-sm font-semibold">Logout</p>
              </div>
            </div>
          </div>

          <div className="ml-20 mt-2">
            <h1 className="text-lg">
              Hello Annie (not{" "}
              <span className="font-bold text-gray-800 ">Annie? </span>
              <span className="text-red-500">Log Out</span>)
              <p className="text-base text-gray-500 leading-7 mt-6">
                From your account dashboard you can view your recent orders,
                manage your shipping and billing addresses, and edit your <br />
                password and account details.
              </p>
            </h1>
          </div>
        </div>
        </div>

      <div>
        <SubFooter/>
      </div> 
    <div>
        <Footer2/>
    </div>
    
        
        
        

        </>
    )
}