import React from "react"
import Line from '../assets/account/asset 25.png'
import Footer2 from "../component/footer2";
import { AllTopBar } from "../component/Hometopbar/dropdown";
import Navbar from "../component/navbar";
import { Bgimg } from "../component/line";

export const Checkout = () => {
  return (
    <>
     <div>
        <AllTopBar/>
     </div>
     <div className="sticky top-0 z-50">
        <Navbar/>
     </div>
     <div>
      <Bgimg/>
     </div>
    <div>
    
    </div>
   
      <div className="chechout-sectio flex mt-10">
      
        <div className="Form-section ml-56">
        <div className="mt-10 bg-gray-100 text-gray-500 pl-7 pt-3 pb-3 text-base "> Returning customer?<span className="duration-300 rounded-md hover:text-blue-700 font-medium ">Click here to login</span> </div>
        <div className="mt-7 bg-gray-100 text-gray-500 pl-7 pt-3 pb-3 text-base "> Have a coupon?<span className="duration-300 rounded-md hover:text-blue-700 font-medium">Click here to enter your code</span> </div>
          <h1 className="text-2xl font-semibold text-gray-800 mt-4"> Billing detalis</h1>
        <div className="flex">
            <div className="relative mt-8">
                <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                first name<span className="text-red-500">*</span> </label>
                <input class="w-72 h-16 border mt-2 rounded-lg  px-6 text-gray-500 text-sm border-gray-300 ring-0"
                  type="text"
                  placeholder="Adam"></input>
            </div>

            
            <div className="relative mt-8 ml-3">
                 <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                   last name<span className="text-red-500">*</span>
                  </label>
              <input
                   className="w-72 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                     type="text"
                    placeholder="john"
              ></input>
           </div>
       </div> 

         <div className="relative mt-5">
               <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                    company Name <span className="text-red-500">*</span>
                 </label>
              <input
                 className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                 type="text"
               ></input>
         </div>

          <div className="relative mt-5">
               <label className="absolute top-[-5px] left-[20px] bg-[#fff]  text-gray-600 text-sm">
                  country/Region <span className="text-red-500">*</span>
               </label>
              <select
                className="w-[100%] pr-[20px] select:pr-[40px] h-14 bg-white border mt-2 rounded-lg px-6  text-gray-500 text-sm border-gray-300 ring-0"
                  type="text" >
                  <option value="">Australia</option>
                  <option value="">England</option>
                  <option value="">New Zealand</option>
                  <option value="">Switerland</option>
                  <option value="">United kindom (UK)</option>
                  <option value="">United States (USA)</option>
              </select>
          </div>

          <div className="relative mt-5">
               <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                 Street Address <span className="text-red-500">*</span>
               </label>
               <input
                  className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                  type="text"
                  placeholder="House number and street name"></input>

                  <div>
                     <input className="w-[100%] h-16 border mt-5 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                        type="text"
                        placeholder="Apartment, suite,unit,etc.(optional)" ></input>
                 </div>
          </div>

          <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                 Town/City <span className="text-red-500">*</span>
              </label>
            <input
              className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
              type="text"></input>
         </div>
          
            <div className="relative mt-5">
               <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                 Country <span className="text-red-500">*</span></label>
             <input
                className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                type="text" ></input>
            </div>

          <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                phone <span className="text-red-500">*</span></label>
              <input
                className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
                 type="text" ></input>
          </div>

          <div className="relative mt-5">
            <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              className="w-[100%] h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm border-gray-300 ring-0"
              type="text"
            ></input>
          </div>
          
          <div className="mt-7 ">
            <input
              type="checkbox"
              id="box1"
              name="box1"
              value="Box"
              className="h-4 w-4"
            ></input>
            <label
              for="vehicle1"
              className="pl-3 text-md font-semibold text-gray-800"
            >
              Create an Account
            </label>
            <br></br>
          </div>
          <div className="mt-10">
            <div className="flex">
              <h1 className="font-semibold text-2xl text-gray-800">
                Ship to a different address ?
              </h1>
              <input
                className="ml-48 h-4 w-4"
                type="checkbox"
                id="box1"
                name="box1"
                value="Box"
              ></input>
            </div>
          </div>

          <div className="relative mt-10">
            <label className="absolute top-[-11px] left-[20px] bg-[#fff] px-2 text-gray-500 text-sm">
              Other Notes (optional)
            </label>
            <input
              className="w-[100%] h-44 border rounded-lg px-6 text-gray-500 text-sm pb-28 border-gray-300 ring-0"
              type="text"
              placeholder="Notes about your order, e.g. speacial notes for delivery."
            ></input>
          </div>
        </div>

         <div className="right-section h-[1150px] bg-[#f9f3f0] border rounded-md ml-8">
          <div className="w-[600px]">
            <h1 className="mt-5 ml-12 text-xl font-semibold">Your order</h1>

           <div className="bg-white rounded-md  w-[540px] h-[550px] ml-7 mt-5">
            
             <div className="flex border-b-2 w-[500px] ml-4 mt-4 pt-12 pb-3 ">
              <p className="text-xl font-semibold">product</p>
              <p className="ml-[347px] text-xl font-semibold">subTotal</p>
             </div>

             
             <div className="flex border-b-2 w-[500px] ml-4 py-4">
                <p className="text-md font-semibold">Commodo Blown Lamp x1</p>
                <p className="ml-[250px]  text-md font-semibold">$117.00</p>
              </div>

              <div className="flex  border-b-2 w-[500px] ml-4 py-4 ">
                <p className="text-md font-semibold">Commodo Blown Lamp x1</p>
                <p className="ml-[250px] text-md font-semibold">$198.00</p>
              </div>

              <div className="flex  border-b-2 w-[500px] ml-4 py-4">
                <p className="text-md font-semibold">SubTotal</p>
                <p className="ml-[378px] text-md font-semibold">$117.00</p>
              </div>

              <div className="flex ml-4 mt-4    ">
                  <p className="text-md font-semibold">Shipping method</p>
                  <p className="ml-[320px] text-md font-semibold">$35.00</p>
                </div>
       
                <div className="mt-2 ml-4  border-b-2 py-2 ">
                  <input type="radio" id="box1" name="box1" value="Box"></input>
                  <label for="vehicle1" className="text-gray-500 text-lg">
                    {" "}
                    Free Shippping
                  </label>
                  <br></br>
                  <input type="radio" id="box2" name="box2" value="box"></input>
                    <label for="vehicle2" className="text-gray-500 text-lg ml-2">
                      Local
                    </label>
                    <br></br>
                  <input type="radio" id="box3" name="box3" value="Box"></input>
                     <label for="vehicle3" className="text-gray-500 text-lg ml-2">
                      Flat rate
                     </label>
                    <br></br>
                    </div>
      
           <div className="flex mt-7 mb-4 ">
                <p className="ml-5 text-xl font-bold">Total</p>
                <p className="ml-[380px] text-xl font-bold">$323.00</p>
              </div>

              <div className="ml-7 mt-10 w-[535px] border-b-2 pb-4">
                <input 
                type="radio"
                id="box1"
                name="box1"
                value="h-4 w-4"
                ></input>
                <label for="vehicle1" className="ml-3 text-xl font-medium">
                  Direct bank transfer
                </label> 
                <p className="text-md text-gray-500 mt-4 ml-6">
                Make your payment directly into our bank account. Please use
                your<br></br> Order ID as the payment reference. Your order will
                not be shipped<br></br> until the funds have cleared in our
                account.
                </p>  
            </div>

            <div className="ml-7 mt-3 w-[535px] border-b-2 pb-1 ">
              <input
                type="radio"
                id="box1"
                name="box1"
                value="Box"
                className="h-4 w-4"
                ></input>
              <label for="vehicle1" className="ml-3 text-xl font-medium">
                Cash on delivery
              </label>
              <p className="text-md text-gray-500 mt-3 ml-6 pb-4">
                pay with cash upon delivery       </p>          
          </div>

            <div className="ml-7 mt-3 w-[535px] border-b-2">
              <input
                type="radio"
                id="box1"
                name="box1"
                value="Box"
                className="h-4   w-4"
                ></input>
              <label for="vehicle1" className="ml-3 text-xl font-medium">
                PayPal
              </label>
              <p className="text-md text-gray-500 mt-4 ml-6 pb-4">
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>

                    
          </div>
          
        
      </div>
    </div>    
 </div>  
</div>
<div>
  <Footer2/>
</div>
            
    </>
  );
};
