import React from "react";
import first from '../assets/varaition1/asset 2.png'
import second from '../assets/varaition1/asset 3.png'
import third from '../assets/varaition1/asset 4.png'
import four from '../assets/varaition1/asset 5.png'
import five from '../assets/varaition1/asset 5.png'
import six from '../assets/varaition1/asset 6.png'
import seven from '../assets/varaition1/asset 7.png'
import eight from '../assets/varaition1/asset 8.png'
import nine from '../assets/varaition1/asset 9.png'
import ten from '../assets/varaition1/asset 10.png'
import easy from '../assets/varaition1/asset 11.png'
import service from '../assets/varaition1/asset 12.png'
import  product from '../assets/varaition1/asset 13.png'
import Footer2 from "../component/footer2";
import Navbar from "../component/navbar";
import { AllTopBar } from "../component/Hometopbar/dropdown";
import SubFooter from "../component/subfooter";
import { Link } from "react-router-dom";
import Data from '../Data.json'
import ShopJsonSlide from "./Shopsjson";
export default function Variation1(){
    return(
        <>

            <div>
              <AllTopBar/>
            </div>
            <div className="sticky top-0 z-50">
              <Navbar/>
            </div>

            <section className="IMAGE-DESCRIPTION  bg-[#F9F3F0]">
            <div className="grid grid-cols-2 gap-16 py-[90px] px-[120px] container mx-auto ">
            <div className="MAIN-DIV-PHOTOES grid grid-cols-2 gap-5">
            <img
              className="rounded-md bg-cover h-[350px]"
              src={first}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={second}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={third}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={four}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={five}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={six}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={seven}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={eight}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={nine}
              alt=""
            />
            <img
              className="rounded-md bg-cover"
              src={ten}
              alt=""
            />
          </div>

          <div className="MAIN-DIV-DETAILS h-[1340px] sticky top-28">
            <h1 className="font-bold text-4xl text-[#292930] tracking-wide mb-8">
              Ella Everyday Tote
            </h1>
            <h1 className="font-semibold text-2xl text-[#292930] mb-5">
              $155.00 - $255.00
            </h1>
            <div className="flex border-b-2 border-gray-200">
              <span className="text-[#FFA800]">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-line"></i>
              </span>
              <p className="text-gray-500 hover:text-[#292930] duration-500 ml-2 pb-5 ">
                (2 customer reviews)
              </p>
            </div>
            <ul className="text-[#417EF0] text-md pt-5 mb-7">
              <li>
                <i class="ri-check-line mr-3"></i>In stock
              </li>
              <li>
                <i class="ri-check-line mr-3"></i>Free delivery available
              </li>
              <li>
                <i class="ri-check-line mr-3"></i>Sales 30% Off Use Code:
                MOTIVE30
              </li>
            </ul>
            <p className="text-gray-500 mb-10">
              In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer
              ante est, hendrerit in rutrum quis, elementum eget magna.
              Pellentesque sagittis dictum libero, eu dignissim tellus.
            </p>
            <div>
              <div className="flex items-center mb-5">
                <h1 className="mr-12 font-semibold text-xl text-[#292930]">
                  Colors:
                </h1>
                <ul className="flex items-center">
                  <li className="bg-[#AAE6F8] h-3 w-3 mx-2 rounded-full outline outline-2 outline-offset-4 outline-[#AAE6F8]"></li>
                  <li className="bg-[#5F8AF7] h-3 w-3 mx-2 rounded-full"></li>
                  <li className="bg-[#59C3C0] h-3 w-3 mx-2 rounded-full"></li>
                </ul>
              </div>
              <div className="flex items-center mb-10">
                <h1 className="mr-16 font-semibold text-xl text-[#292930]">
                  Size:
                </h1>
                <ul className="flex items-center">
                  <li className="bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer">
                    XS
                  </li>
                  <li className="bg-white rounded-full px-5 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer">
                    S
                  </li>
                  <li className="bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer">
                    M
                  </li>
                  <li className="bg-white rounded-full px-5 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer">
                    L
                  </li>
                  <li className="bg-white rounded-full px-4 py-3 text-gray-500 border-2 hover:border-gray-500 duration-150 m-1 cursor-pointer">
                    XL
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="bg-gray-100 py-[4px] px-[12px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer">
                    -
                  </span>
                  <h1 className="font-semibold text-lg mx-5">1</h1>
                  <span className="bg-gray-100 py-[4px] px-[10px] rounded-full hover:ring-[#3577F0]  hover:ring-2 duration-300 cursor-pointer">
                    +
                  </span>
                </div>
                <div className="flex items-center">
                <div className="mx-4">
                    <a
                      href="#"
                      className='relative z-10 font-bold bg-[#3577F0] text-white pl-14 pr-14 pt-4 pb-4 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:bg-[#3577F0]
                                                before:left-0
                                                before:top-0
                                                before:right-0 
                                                before:bottom-0
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:rounded-md
                                               '
                    >
                      Add to Cart
                    </a>
                  </div>

                  <div className="flex mx-5">
                    <a
                      href="#"
                      className="relative z-10 px-1 py-3 border-2 rounded-md
                                                before:absolute 
                                                before:h-[100%]
                                                before:w-[100%]
                                                before:rounded-md
                                                before:bg-[#3577F0]
                                                before:scale-0 
                                                before:-z-10
                                                before:hover:scale-105
                                                before:duration-300
                                                before:top-0
                                                before:bottom-0
                                                before:left-0
                                                before:right-0
                                                "
                    >
                      <i class="ri-heart-line text-2xl px-4 py-4  text-gray-600 hover:border-none hover:text-white duration-300"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <h1 className="text-[#3577F0] font-bold text-2xl tracking-wide mb-12">
                  Description
                </h1>
                <div>
                  <h1 className="font-bold text-xl text-[#292930] mb-5">
                    Specifications:
                  </h1>
                  <p className="text-gray-500 mb-8">
                    We’ve created a full-stack structure for our working
                    workflow processes, were from the funny the century initial
                    all the made, have spare to negatives. But the structure was
                    from the funny the century rather, initial all the made,
                    have spare to negatives.
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-[#292930] mb-5">
                    Care & Maintenance:
                  </h1>
                  <p className="text-gray-500 mb-10">
                    Use warm water to describe us as a product team that creates
                    amazing UI/UX experiences, by crafting top-notch user
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-10">
                  <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full mt-2">
                    <img
                      className="h-8"
                      src={easy}
                      alt=""
                    />
                  </div>
                  <h1 className="font-semibold text-xl text-[#292930]">
                    Easy Returns
                  </h1>
                </div>
                <div className="mr-10">
                  <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full mt-2">
                    <img
                      className="h-8"
                      src={service}
                      alt=""
                    />
                  </div>
                  <h1 className="font-semibold text-xl   text-[#292930]">
                    Quality Service
                  </h1>
                </div>
                <div>
                  <div className="flex justify-center items-center h-16 w-16 bg-white rounded-full">
                    <img
                      className="h-8"
                      src={product}
                      alt=""
                    />
                  </div>
                  <h1 className="font-semibold text-xl text-[#292930]">
                    Original Product
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
             {/* <--------json-data------> */}

             <div>
               <ShopJsonSlide/>
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