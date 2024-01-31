import React from "react";
import alexa from '../assets/grid/asset 2.png'
import digital from '../assets/grid/asset 3.png'
import photography from '../assets/grid/asset 4.png'
import music from '../assets/grid/asset 5.png'
import sports from '../assets/grid/asset 3.png'
import studio from '../assets/grid/asset 4.png'
import utility from '../assets/grid/asset 5.png'
import sketch from '../assets/grid/asset 3.png'
import image1 from '../assets/grid/asset 6.png'
import image2 from '../assets/grid/asset 7.png'
import image3 from '../assets/grid/asset 8.png'
import image4 from '../assets/grid/asset 9.jpeg'
import image5 from '../assets/grid/asset 10.jpeg'
import image6 from '../assets/grid/asset 11.jpeg'
import { AllTopBar } from "../component/Hometopbar/dropdown";
import Navbar from "../component/navbar";
import SubFooter from "../component/subfooter";
import Footer2 from "../component/footer2";


export default function Grid(){
    return(
        <>
        <div>
          <AllTopBar/>
        </div>
        <div>
          <Navbar/>
        </div>
            
        <div className="BLOG-GRID-SECTION">
        <div className="FIRST-PART flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-16">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">Blogs</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              Blog Grid
            </h1>
          </div>
          <div className="mx-16">
            <img className="" src={alexa}></img>
          </div>
        </div>
        
        <div className="MAIN-SECTION flex">
           <div className="RIGHT-SECTION ml-36">
           <div className="FIRST-PART mt-20 flex">
              <div className="DIGITAL-PART border rounded-lg p-5">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={digital}
                    ></img>
                  </a>
                  <button className="absolute left-[71%] top-[75%] border rounded-lg p-1 bg-[#ddd9d9a9] text-white text-sm">
                    Digital Art's
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Keeping yourself safe when buying <br />
                      NFTs on eTrade
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>

              <div className="DIGITAL-PART border rounded-lg p-5 ml-7">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={photography}
                    ></img>
                  </a>
                  <button className="absolute left-[68%] top-[75%] border rounded-lg p-1 bg-[#ddd9d9a9] text-white text-sm">
                    Photography
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Important updates for listing and <br />
                      delisting your NFTs
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>
            </div>

               <div className="SECOND-PART mt-7 flex">
               <div className="DIGITAL-PART border rounded-lg p-5">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={music}
                    ></img>
                  </a>
                  <button className="absolute left-[79%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Music
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      10 tips for avoiding scams and staying <br />
                      safe on the decentralized web
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>

              <div className="DIGITAL-PART border rounded-lg p-5 ml-7">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={sports}
                    ></img>
                  </a>
                  <button className="absolute left-[78%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Sports
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Keeping yourself safe when buying <br />
                      NFTs on eTrade
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>
           </div>

           <div className="THIRD-PART mt-7 flex">
              <div className="DIGITAL-PART border rounded-lg p-5">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={studio}
                    ></img>
                  </a>
                  <button className="absolute left-[65%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Virtual Studio
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Important updates for listing and <br />
                      delisting your NFTs
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>

              <div className="DIGITAL-PART border rounded-lg p-5 ml-7">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={utility}
                    ></img>
                  </a>
                  <button className="absolute left-[78%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Utility
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      10 tips for avoiding scams and staying <br />
                      safe on the decentralized web
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="FORTH-PART mt-7 flex">
              <div className="DIGITAL-PART border rounded-lg p-5">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={sketch}
                    ></img>
                  </a>
                  <button className="absolute left-[77%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Sketch
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Keeping yourself safe when buying <br />
                      NFTs on eTrade
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>

              <div className="DIGITAL-PART border rounded-lg p-5 ml-7">
                <div className="IMAGE-SECTION relative overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      className="h-52 w-[350px] rounded-lg hover:scale-110 duration-300"
                      src={photography}
                    ></img>
                  </a>
                  <button className="absolute left-[69%] top-[75%] border rounded-lg px-2 py-1 bg-[#ddd9d9a9] text-white text-sm">
                    Digital Art's
                  </button>
                </div>
                <div className="CONTENT-SECTION">
                  <a href="#">
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 duration-300 my-5">
                      Important updates for listing and <br />
                      delisting your NFTs
                    </h1>
                  </a>
                  <a
                    href="#"
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Read More<i class="fa-solid fa-arrow-right ml-3"></i>
                  </a>
                </div>
              </div>
            </div>

              
            <div className="BUTTON-SECTION">
              <div className="my-20">
                <ul className="flex">
                  <li className="border px-4 py-2 mr-3 rounded-lg bg-blue-500 text-white text-lg">
                    1
                  </li>

                  <a href="#">
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      2
                    </li>
                  </a>

                  <a href="#">
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      3
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      4
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      5
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-md">
                      <i class="fa-solid fa-arrow-right"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="LEFT-SECTION ml-10">
           <div className="IMAGE-SECTION border p-8 mt-20 rounded-lg">
           <div className="rounded-lg">
                <h1 className="text-lg font-semibold">Latest Posts</h1>
                <div className="main-section flex mt-8 border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image1}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Dubai’s FRAME Offers its <br />
                      Take on the
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 mb-7">
                      <li className="">Mar 27, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg  mt-6">
                <div className="MAIN-SECTION flex border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image2}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Apple presents App Best <br />
                      of 2020 winners
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 mb-7">
                      <li className="">Mar 20, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="rounded-lg  mt-6">
                <div className="MAIN-SECTION flex">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image3}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Gallaudet University <br />
                      innovation in education
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2">
                      <li className="">Mar 15, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="PRODUCT-SECTION border p-8 mt-10 rounded-lg">
              <div className="rounded-lg">
                <h1 className="text-lg font-semibold">
                  Recent Viewed Products
                </h1>
                <div className="MAIN-SECTION flex mt-8 border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image4}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Men's Fashion Tshirt
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300"><del>$30</del></li>
                      <li className="ml-2 font-semibold text-lg">$20</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg mt-6">
                <div className="MAIN-SECTION flex border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image5}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Nike Shoes
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300"><del>$200</del></li>
                      <li className="ml-2 font-semibold text-lg">$150</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg mt-6">
                <div className="MAIN-SECTION flex">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image6}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Addidas Shoes
                    </a>
                    <ul className="flex text-sm mt-2">
                      <li className="text-lg text-gray-300"><del>$300</del></li>
                      <li className="ml-2 font-semibold text-lg">$200</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="SEARCH-SECTION border rounded-lg mt-10 p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-7">
                Search
              </h1>
              <form className="relative">
                <button className="absolute">
                  <i class="fa-solid fa-magnifying-glass mt-4 ml-5 text-gray-400 border focus:border-blue-400 ring-0"></i>
                </button>
                <input
                  className=" h-12 w-[320px] border rounded-lg pl-14 bg-gray-100"
                  placeholder="Search"
                  type="text"
                ></input>
              </form>
            </div>

            <div className="ARCHIEVES-SECTION border rounded-lg mt-10 p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-5">
                Archives List
              </h1>
              <ul className="list-disc marker:text-gray-300 leading-8">
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#" className="">
                    January 2020
                  </a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">February 2020</a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">March 2020</a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">April 2020</a>
                </li>
              </ul>
            </div>

            <div className="relative mt-10 border rounded-lg p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-5">
                Archives Dropdown
              </h1>
              <select
                className="w-[100%]  h-12 bg-white border mt-2 rounded-lg px-6  text-gray-500 text-sm focus:border-blue-500 ring-0 cursor-pointer"
                type="text"
              >
                <option value="">Select Month</option>
                <option value="">England</option>
                <option value="">New Zealand</option>
                <option value="">Switerland</option>
                <option value="">United kindom (UK)</option>
                <option value="">United States (USA)</option>
              </select>
            </div>

            <div className="TAGS-SECTION border rounded-lg p-7 mt-10">
              <h1 className="mb-8 text-lg text-gray-700 font-semibold">Tags</h1>
              <div className="flex">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Design
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  HTML
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Graphic
                </a>
              </div>
              <div className="flex mt-3">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Development
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  UI/UX Design
                </a>
              </div>
              <div className="flex mt-3">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300    px-4 py-2 rounded-full mr-3"
                >
                  eCommerce
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  CSS
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  JS
                </a>
              </div>
            </div>
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