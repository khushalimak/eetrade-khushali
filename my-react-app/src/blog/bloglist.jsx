import React from "react";
import alexa from '../assets/gridlist/asset 2.png'
import rimage1 from '../assets/gridlist/asset 3.png'
import uda  from '../assets/gridlist/asset 4.png'
import rimage2 from '../assets/gridlist/asset 5.png'
import video from '../assets/gridlist/asset 6.png'
import shoes from '../assets/gridlist/asset 7.png'
import rimage3 from '../assets/gridlist/asset 8.png'
import image1 from '../assets/gridlist/asset 9.png'
import image2 from '../assets/gridlist/asset 10.png'
import image3 from '../assets/gridlist/asset 11.png'
import image4 from '../assets/gridlist/asset 12.jpeg'
import image5 from '../assets/gridlist/asset 13.jpeg'
import image6 from '../assets/gridlist/asset 14.jpeg'
import { AllTopBar } from "../component/Hometopbar/dropdown";
import Navbar from "../component/navbar";
import SubFooter from "../component/subfooter";
import Footer2 from "../component/footer2";





export default function Blog(){
    return(
        <>
        <div>
           <AllTopBar/>
        </div>

       <div className="sticky z-50 top-0">
        <Navbar/>
       </div>
        <div className="BLOG-LIST-SECTION ">
        <div className="FIRST-PART flex bg-[#f8f8f8] justify-between p-12">
          <div className="">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">Blogs</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">Blog List</h1>
          </div>
          <div className="mx-20">
            <img className="" src={alexa}></img>
          </div>
        </div>

        <div className="MAIN-SECTION flex">
          <div className="LEFT-SECTION">
          <div className="DUBAI-SECTION bg-[#f9f3f0] h-[400px] w-[850px] mt-20 rounded-lg ml-32 border-l-4 border-red-200 p-14">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                Dubai’s Offers its Take Nike SB Dunk.
              </a>
              <div className="MAIN-SECTION flex mt-8">
                <div className="image">
                  <img className="h-12 w-12" src={rimage1}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Ralph Edwards
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 27, 2022 |</li>
                    <li className="ml-2">9 min to read</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. <br />
                Vestibulum eget risus velit. Aliquam tristique libero at dui
                sodales, et placerat orci lobortis. <br />
                Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
                mauris.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="image ml-32 border-t-2 mt-20 border-gray-100">
              <img className="rounded-lg mt-20" src={uda}></img>
            </div>

            <div className="ml-32 mt-8 border-b-2 border-gray-100">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="MAIN-SECTION flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 25, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. <br />
                Vestibulum eget risus velit. Aliquam tristique libero at dui
                sodales, et placerat orci lobortis. <br />
                Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
                mauris.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 mb-14 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="bg-[#f9f3f0] h-[250px] w-[850px] mt-16 rounded-lg ml-32 border-l-4 border-red-200 p-10">
              <a
                href="#"
                className="text-4xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                “An oral history of the AIM away message <br />
                (by the people who were there)”
              </a>
              <div className="MAIN-SECTION flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 22, 2022 |</li>
                    <li className="ml-2">300k Views</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="VIDEO-SECTION">
              <div className="Image flex justify-center mt-20 relative ml-32 mb-10 after:absolute after:content-[''] after:w-[100%] after:-h-[100%] after:bg-black after:top-0 after:bottom-0 after:left-0 after:right-0 after:rounded-md after:opacity-[0.2] after:z-10">
                <img className="rounded-md" src={video}></img>
                <a
                  href="https://www.youtube.com/watch?v=OtyNyNL-Vyc"
                  target="_blank"
                  className="absolute top-[50%] -translate-x-2/4 -translate-y-2/4 left-[50%] mx-auto z-20 rounded-full bg-black hover:opacity-80"
                >
                  <i className="fa-solid fa-play w-40 h-40 text-4xl z-30 text-white flex justify-center items-center opacity-100"></i>
                </a>
              </div>
            </div>
                
            <div className="rounded-lg ml-32 mt-8">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="MAIN-SECTION flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 25, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. <br />
                Vestibulum eget risus velit. Aliquam tristique libero at dui
                sodales, et placerat orci lobortis. <br />
                Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
                mauris.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 mb-16 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>


            <div className="IMAGE-SECTION ml-32 border-t-2 border-gray-100 relative group">
              <a href="#" className="">
                <img className="rounded-lg mt-16" src={shoes}></img>
              </a>
              <div className="absolute top-[58%] w-[100%]">
                <a
                  href="#"
                  className="left-btn absolute left-10 group-hover:left-2 duration-300 hover:scale-110"
                >
                  <i class="ri-arrow-left-line  bg-[#F6F7FB] p-4 rounded-md text-gray-400"></i>
                </a>
                <a
                  href="#"
                  className="right-btn absolute right-10 group-hover:right-2 duration-300 hover:scale-110"
                >
                  <i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md text-gray-400"></i>
                </a>
              </div>
            </div>


            <div className="rounded-lg ml-32 mt-8">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="MAIN-SECTION flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage3}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Leslie Alexander
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 15, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release
                November 21 in Greater China. A global <br />
                release follows November 24.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="BUTTON-SECTION">
              <div className="ml-32 my-20">
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

          <div className="RIGHT-SECTION ml-8">
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
                  <div className="IMAGE-CONTENT ml-4">
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
                  <div className="IMAGE-CONTENT ml-4">
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
                  <div className="IMAGE-CONTENT ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Gallaudet University <br />
                      innovation in education
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 ">
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
                  <div className="IMAGE-CONTENT ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Men's Fashion Tshirt
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300">
                        <del>$30</del>
                      </li>
                      <li className="ml-2 font-semibold text-lg">$20</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg mt-6">
                <div className="MAIN-SECTION flex  border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image5}
                      ></img>
                    </a>
                  </div>
                  <div className="IMAGE-CONTENT ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Nike Shoes
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300">
                        <del>$200</del>
                      </li>
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
                  <div className="IMAGE-CONTENT ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Addidas Shoes
                    </a>
                    <ul className="flex text-sm mt-2">
                      <li className="text-lg text-gray-300">
                        <del>300</del>$
                      </li>
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
              <ul className="list-disc marker:text-gray-300 leading-8 ">
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