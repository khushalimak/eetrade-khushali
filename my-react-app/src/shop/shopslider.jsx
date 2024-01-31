import React from "react";
import alexa from '../assets/policy/asset 2.png'
import Footer2 from "../component/footer2";
import Navbar from "../component/navbar";
import { AllTopBar } from "../component/Hometopbar/dropdown";
import SubFooter from "../component/subfooter";
import { Link } from "react-router-dom";
import Data from '../Data.json'

export default function Shopnoslider(){
    return(
        <>
         <div>
          <AllTopBar/>
         </div>

            <div className="sticky z-50 top-0">
              <Navbar/>
            </div>

            <div className="FIRST-PART flex bg-[#f8f8f8] justify-between p-12 ">
        <div className="mx-16">
          <p className="text-gray-400 font-semibold">
            Home | <span className="text-blue-500">My Account</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-5">Explore All Products</h1>
        </div>
        <div className="mx-16 relative z-10">
          <span className="before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full 
          before:-top-3 before:right-16 before:-z-10"></span>
          <img className="" src={alexa}></img>
        </div>
      </div>

      <section className='sticky top-[730px]'>
                    <a href="#top-scroll" className='absolute -bottom-40 right-10'><i class="fa-solid fa-arrow-up bg-[#3577F0] p-4 rounded-md text-white"></i></a>
                </section>

                <section className='my-[100px] container'>
                    <div className='flex justify-between items-center mx-24'>
                        <div className=''>
                            <div className='border-[2px] border-gray-300 rounded-md inline-block'>
                                <select name="" id="" className='rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                    <option className='text-lg' value="Categories">Categories</option>
                                    <option className='text-lg' value="Fashion">Fashion</option>
                                    <option className='text-lg' value="Electronics">Electronics</option>
                                    <option className='text-lg' value="Furniture">Furniture</option>
                                    <option className='text-lg' value="Beauty">Beauty</option>
                                </select>
                            </div>
                            <div className='border-[2px] border-gray-300 rounded-md inline-block mx-7'>
                                <select name="" id="" className='rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                    <option className='text-lg' value="Categories">Color</option>
                                    <option className='text-lg' value="Fashion">Red</option>
                                    <option className='text-lg' value="Electronics">Blue</option>
                                    <option className='text-lg' value="Furniture">Green</option>
                                    <option className='text-lg' value="Beauty">Pink</option>
                                </select>
                            </div>
                            <div className='border-[2px] border-gray-300 rounded-md inline-block'>
                                <select name="" id="" className=' rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                    <option className='text-lg' value="Categories">Price Range</option>
                                    <option className='text-lg' value="Fashion">0 - 100</option>
                                    <option className='text-lg' value="Electronics">100 - 500</option>
                                    <option className='text-lg' value="Furniture">500 - 1000</option>
                                    <option className='text-lg' value="Beauty">1000 - 1500</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className='border-[2px] border-gray-300 rounded-md inline-block'>
                                <select name="" id="" className=' rounded-md outline-none border-r-[20px] border-r-white text-base pl-7 pr-3 py-4'>
                                    <option className='text-lg' value="Categories">Sort by Latest</option>
                                    <option className='text-lg' value="Fashion">Sort by Name</option>
                                    <option className='text-lg' value="Electronics">Sort by Price</option>
                                    <option className='text-lg' value="Furniture">Sort by Viewed</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='PRODUCTJSON mt-14 mx-24'>
                        <div className='grid grid-cols-4 gap-10'>
                            {
                                Data.map(Data => {
                                    return (
                                        <>
                                            <div className='group mb-10'>
                                                <div className='relative overflow-hidden rounded-[35px]'>
                                                    <div>
                                                        <img className='w-72 h-72 object-cover group-hover:scale-110 duration-200' src={Data.image} alt="" />

                                                        <div className=' absolute left-5 -bottom-12 group-hover:bottom-10 duration-700 group-hover:opacity-100'>
                                                            <div className='flex justify-center'>
                                                                <div className='flex items-center'>
                                                                    <div className='hover:scale-110 duration-300 inline-block'>
                                                                        <Link to="/Wishlist" href="" className=''><i class="fa-regular fa-heart  bg-white p-3 rounded-[4px]"></i></Link>
                                                                    </div>
                                                                    <div className='mx-4'>
                                                                        <Link to="/Cart" href="#" className=" w-32 h-32 p-2 z-10 bg-[#ff497c] text-white font-bold rounded-[4px] relative 
                                                                                before:absolute
                                                                                before:contetn-['']
                                                                                before:px-10
                                                                                before:py-5
                                                                                before:bg-[#ff497c] 
                                                                                before:left-0
                                                                                before:top-0
                                                                                before:right-0
                                                                                before:bottom-0
                                                                                before:rounded-[4px]
                                                                                before:-z-10
                                                                                before:hover:scale-110
                                                                                before:duration-300">
                                                                            Add to Cart</Link>
                                                                    </div>
                                                                    <div className='hover:scale-110 duration-300 inline-block '>
                                                                        <a href="#" className=''><i class="fa-regular fa-eye bg-white p-3 rounded-[4px]"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    <div className='mt-4'>
                                                        <a className='text-gray-500 font-semibold tracking-wider hover:text-[#3577F0] duration-300 cursor-pointer'>{Data.title}</a>
                                                    </div>
                                                    <div className='flex text-xl font-bold mt-2'>
                                                        <h1 className='text-[#292930] mr-3'>{Data.newprice}</h1>
                                                        <del className='text-gray-300'>{Data.oldprice}</del>
                                                    </div>
                                                    <div>
                                                        <ul className='flex items-center mt-3'>
                                                            <li className='bg-[#AAE6F8] h-3 w-3 mr-2 rounded-full outline outline-2 outline-offset-4 outline-[#AAE6F8] cursor-pointer'></li>
                                                            <li className='bg-[#5F8AF7] h-3 w-3 mx-2 rounded-full cursor-pointer'></li>
                                                            <li className='bg-[#59C3C0] h-3 w-3 mx-2 rounded-full cursor-pointer'></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <div className='text-center mt-10'>
                            <a href="#" className="px-40 p-3 z-5 bg-[#F6F7FB] text-gray-800 font-bold rounded-[4px] relative 
                                before:absolute
                                before:contetn-['']
                                before:px-10
                                before:py-5
                                 before:bg-[#F6F7FB] 
                                before:left-0
                                before:top-0
                                before:right-0
                                before:bottom-0
                                before:rounded-[4px]
                                before:-z-10
                                before:hover:scale-110
                                before:duration-300">
                                Load More</a>
                        </div>
                    </div>
                </section>
     

               
        <div>
          <SubFooter/>
        </div>
       <div>
           <Footer2/>
       </div>
        </>
    )
}