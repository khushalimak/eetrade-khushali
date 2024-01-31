import React from "react";
import Bgimg from  '../assets/comingsoon/asset 1.jpeg'
import Logo from '../assets/comingsoon/asset 0.png'
 
export default function Coming(){
    return(
        <>
          <div className=" flex "> 
            <div className="">
                <img src={Bgimg} className="h-screen" alt=""/>
            </div>

            <div className="">
                <div className="">
                    <img src={Logo} className="pt-72 pl-96" alt=""/>                
                 </div>
                 <p className="text-4xl font-bold pl-56 pt-4">Our new website is on the way</p>
                 <p className="pl-80 pt-4 text-slate-500 text-base ">We're coming soon! We're working hard to give you <br /><span className="pl-28">the best experince.</span> </p>
                 <div className="pt-5 ps-80 flex">
                <p className="flex justify-around h-24 w-24 text-white bg-[#3577f0] pt-2.5 text-2xl text-center rounded-full shadow-2xl">0<br/>Day</p>
                <p className='flex justify-around h-24 w-24 text-white bg-[#3577f0] pt-2.5 ml-5 text-2xl text-center rounded-full shadow-2xl'>00 <br /> Hrs</p> 
                <p className='flex justify-around h-24 w-24 text-white bg-[#3577f0] pt-2.5 ml-5 text-2xl text-center rounded-full shadow-2xl'>00 <br /> Min</p> 
                <p className='flex justify-around h-24 w-24 text-white bg-[#3577f0] pt-2.5 ml-5 text-2xl text-center rounded-full shadow-2xl'>00 <br /> Sec</p> 
               </div>

    
               </div>
              
       
           </div> 
           
        </>
    )
}










// <div className='pt-5 ps-80 flex'> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 text- text-center rounded-full shadow-2xl'>0 <br /> day</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Hrs</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Min</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Sec</p> 
//                 </div>
//                 <div className='pt-5 ps-80 flex'> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 text- text-center rounded-full shadow-2xl'>0 <br /> day</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Hrs</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Min</p> 
//                     <p className='flex justify-around h-24 w-24 text-white bg-blue-600 pt-2.5 ml-5 text- text-center rounded-full shadow-2xl'>00 <br /> Sec</p> 
//                 {/* </div> */}










