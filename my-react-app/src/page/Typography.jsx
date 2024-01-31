import React from "react";
import Line from '../assets/Typography/asset 20.png'
import Footer2 from "../component/footer2";
import { AllTopBar } from "../component/Hometopbar/dropdown";
import Navbar from "../component/navbar";

export default function Typography(){
    return(
        <>
            {/* <......image-section....> */}
             <div>
              <AllTopBar/>
             </div>
             <div className="sticky z-50 top-0">
                <Navbar/>
             </div>
            <div className="">
               <div className="">
                  <img src={Line} className="" alt/>
               </div>

               {/* <.....Typeface-section....> */}

               <div className="flex"> 
                 <div className="pl-64">
                    <h1 className="pt-20 font-sans font-semibold text-5xl">h1 - A Visual Type Scale</h1>
                    <h2 className="pt-5 font-semibold text-4xl font-sans">h2 - A Visual Type Scale</h2>
                    <h3 className="pt-5 font-sans text-3xl font-semibold">h3 - A Visual Type Scale</h3>
                    <h4 className=" pt-5 text-2xl font-semibold ">h4 - A Visual Type Scale</h4> 
                    <h5 className="pt-5 text-xl font-semibold">h5 - A Visual Type Scale</h5>
                    <h6 className="pt-5 text-lg font-semibold">h6 - A Visual Type Scale</h6>
                 </div>
                 
                 <div className="pl-32">
                    <h1 className="pt-20 font-semibold text-5xl font-sans">46px</h1>
                    <h2 className="pt-5 font-semibold text-4xl">32px</h2>
                    <h3 className="pt-5 text-3xl font-semibold ">28px</h3>
                    <h4 className="pt-5 font-semibold text-2xl">24px</h4>
                    <h5 className="pt-5 font-semibold text-xl ">20px</h5>
                    <h6 className="pt-5 font-semibold text-lg">18px</h6>
                 </div>
            </div>  

            <div className="pl-64 pt-7">
                <p className="text-[#777777] text-base">B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident <br />
                 quos amet non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam <br />
                 beatae itaque dicta vitae! Magni esse ex rem.</p>

                 <p className="text-[#777777] pt-4 text-sm">B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet <br />
                  non hic animi. Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta <br /> 
                  vitae! Magni esse ex rem.</p>

                  <p className="text-[#777777] pt-3 text-xs">B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima, provident quos amet non hic animi. <br />
                   Natus dolorum reprehenderit debitis voluptatem magnam beatae itaque dicta vitae! Magni esse ex rem.</p>
            </div> 

            </div>
            <div>
                <Footer2/>
            </div>
        </>
    )
}