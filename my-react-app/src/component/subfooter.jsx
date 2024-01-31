import React from "react";
import image from '../assets/Homepage/asset 65.jpeg'
import mail from '../assets/Homepage/asset 66.png'
// import envelope from '../assets/Homepage/'

export default function SubFooter(){
    return(
        <>
                 <div className="IMAGE-SECTION   relative flex justify-center mt-10">
          <img className="rounded-md " src={image}></img>
          <div className="absolute flex left-[15%] mt-24">
          <i class="fa-regular fa-envelope-open absolute left-20 border rounded-full bg-blue-700 p-1 text-white"></i>
            <h1 className="text-blue-600 font-semibold ml-28">Newsletter</h1>
          </div>
          <h1 className="absolute mt-36  text-4xl font-bold left-[20%]">
            Get Weekly Update
          </h1>
          <input
            className="absolute mt-56  h-14 w-[400px] rounded-lg  left-[20%] pl-16 text-black"
            placeholder="example@gmail.com"
            type="text"
          ></input>
         
              <img src={mail} className='absolute top-[240px] left-[22%]'  alt="" />

          <button
            className="absolute mt-56 mr-2 border border-black px-7 py-3 rounded-lg bg-gray-800 text-white text-md font-sans"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      
        </>
    )
}