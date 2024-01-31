import React from "react";
import { AllTopBar } from "./component/Hometopbar/dropdown";
import alexa from './assets/grid/asset 2.png'
import Footer2 from "./component/footer2";
import Navbar from "./component/navbar";





const Contact=()=>{
    return(
        <>
            <div>
                <AllTopBar/>
           </div>
           <div>
              <Navbar/>
           </div>
         

           <div>
            <div className="CONTACT-MAIN SECTION ">
            <div className="FIRST-PART flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-16">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">contact</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              Contact With Us
            </h1>
          </div>
          <div className="mx-16 relative z-10">
          <span className="before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full 
          before:-top-3 before:right-16 before:-z-10"></span>
            <img className="" src={alexa}></img>
          </div>
        </div>
        
            </div>

           <section className='FORM-MAP container mx-auto'>
                    <div className='flex my-[100px]'>

                        <div>
                            <h1 className='text-3xl font-semibold text-[#292930]'>We would love to hear from you.</h1>
                            <p className='text-gray-500 mt-4'>If you’ve got great products your making or looking to work with us then drop us a line.</p>

                            <div>
                                <div className='flex mt-10'>
                                    <div className='relative text-gray-500 mr-7'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Name<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="text" className=' w-[330px] border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                    <div className='relative text-gray-500 mr-7'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Phone<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="number" className='w-[330px] border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                    <div className='relative text-gray-500'>
                                        <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>E-mail<span className='text-[#E76458] ml-1'>*</span></label>
                                        <input type="email" className='w-[330px] border border-gray-300  px-10 py-5 rounded-md font-normal focus:outline-blue-400' />
                                    </div>
                                </div>

                                <div className='relative text-gray-500 mt-8'>
                                    <label className='absolute -top-3 left-7 bg-white px-2 font-semibold text-sm'>Your Message</label>
                                    <textarea className='resize-none w-full border border-gray-300 rounded-md font-normal focus:outline-blue-400 
                                    px-9 py-5' cols="" rows="5"></textarea>
                                </div>

                   <div className="mr-44 mt-16">
                    <a href="#"
                      className='relative z-10 text-center text-xl font-bold bg-[#3577F0] text-white pt-4 pb-4 pr-3 pl-3 rounded-md 
                                                before:absolute
                                                before:content-[""]
                                                before:px-32
                                                before:py-5
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
                      Send message
                    </a>
                  </div>
                            </div>
                        </div>

                        <div className='ml-14 text-gray-500'>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Our Store</h1>
                                <p className='mb-5 leading-8'>8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
                                <p>Phone: +123 456 7890</p>
                                <p className='mb-10 leading-8'>Email: Hello@etrade.com</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Careers</h1>
                                <p className='mb-10'>Instead of buying six things, one that you really like.</p>
                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-[#292930] mb-5'>Opening Hours:</h1>
                                <p>Monday to Saturday: 9am - 10pm</p>
                                <p className='leading-8'>Sundays: 10am - 6pm</p>
                            </div>
                        </div>

                    </div>
                </section>
           </div>

           <div>
              <Footer2/>
           </div>


        </>
    )
}
export default Contact