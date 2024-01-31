import React from "react";
import alexa from './assets/policy/asset 2.png'
import about from "./assets/about/asset 3.png";
import customer from './assets/about/asset 4.png'
import experience from './assets/about/asset 5.png'
import won from './assets/about/asset 6.png'
import image1 from './assets/about/asset 10.png'
import image2 from './assets/about/asset 7.png'
import image3 from './assets/about/asset 8.png'
import image4 from './assets/about/asset 9.png'
import feature1 from './assets/about/asset 11.png'
import feature2 from './assets/about/asset 12.png'
import Navbar from "./component/navbar";
import Footer2 from "./component/footer2";
import { AllTopBar } from "./component/Hometopbar/dropdown";
import SubFooter from "./component/subfooter";




export default function About(){
    return(
        <>
        <div>
          <AllTopBar/>
        </div>
        <div>
          <Navbar/>
        </div>
          <section className="ABOUT-SECTION ">
          <div className="first-part flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-20">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">About Us</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              About Our Store
            </h1>
          </div>
          <div className="mx-16 relative z-10">
          <span className="before:content-[''] before:absolute before:w-[110px] before:h-[110px] before:bg-white before:rounded-full 
          before:-top-3 before:right-16 before:-z-10"></span>
            <img className="" src={alexa}></img>
          </div>
        </div>


        <div className="px-32">
            <div className="About-Store flex items-center mt-[80px] mb-[250px]">
              <div>
                <img src={about} alt="" />
              </div>
              <div className="ml-[80px] w-[60%]">
                <div className="flex mb-2">
                  <i class="far fa-shopping-basket h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
                  <h1 className="flex items-center text-[#3577F0] text-sm font-bold ml-2">
                    About Store
                  </h1>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-[#27272E] mb-8">
                    Online shopping includes both buying things online.
                  </h1>
                  <p className="text-gray-500 text-xl leading-9 mb-8">
                    Salesforce B2C Commerce can help you create unified,
                    intelligent digital commerce experiences — both online and
                    in the store.
                  </p>
                </div>
                <div className="text-gray-500 grid grid-cols-2 gap-7  text-sm ">
                  <p>
                    Empower your sales teams with industry tailored solutions
                    that support manufacturers as they go digital, and adapt to
                    changing markets & customers faster by creating new
                    business.
                  </p>
                  <p>
                    Salesforce B2B Commerce offers buyers the seamless,
                    self-service experience of online shopping with all the B2B
                  </p>
                </div>
              </div>
            </div>
            

            <div className="3-box absolute top-[1000px] pr-24 mx-auto container">
              <div className="grid grid-cols-3 gap-7">
                <div className="py-[50px] px-[60px] bg-white rounded-md  hover:border hover:border-[#3577F0] shadow-md ">
                  <img className="mb-5 " src={customer} alt="" />
                  <h1 className=" mb-3 text-lg text-[#27272E] font-bold">
                    40,000+ Happy Customer
                  </h1>
                  <p className="text-gray-500 text-sm leading-6">
                    Empower your sales teams with industry tailored solutions
                    that support.
                  </p>
                </div>
                <div className="py-[50px] px-[60px] bg-white rounded-md hover:border hover:border-[#3577F0] shadow-md ">
                  <img className="mb-5" src={experience} alt="" />
                  <h1 className=" mb-3 text-lg text-[#27272E] font-bold">
                    16 Years of Experiences
                  </h1>
                  <p className="text-gray-500 text-sm leading-6">
                    Empower your sales teams with industry tailored solutions
                    that support.
                  </p>
                </div>
                <div className="py-[50px] px-[60px] bg-white rounded-md hover:border hover:border-[#3577F0] shadow-md ">
                  <img className="mb-5" src={won} alt="" />
                  <h1 className=" mb-3 text-lg text-[#27272E] font-bold">
                    12 Awards Won
                  </h1>
                  <p className="text-gray-500 text-sm leading-6">
                    Empower your sales teams with industry tailored solutions
                    that support.
                  </p>
                </div>
              </div>
              </div>
            </div>
         

          <div className="OUR-TEAM-SECTION bg-[#F6F6F6]">
            <div className="px-32 pt-[180px]">
              <div className="flex justify-between items-center ">
                <div className="flex mb-2">
                  <i class="ri-team-fill h-6 w-6 text-base border bg-[#8C71DB] text-white rounded-full flex items-center justify-center"></i>
                  <h1 className="flex items-center text-[#8C71DB] text-sm font-bold ml-2">
                    Our Team
                  </h1>
                </div>
                <div className="text-gray-400">
                  <i class="ri-arrow-left-line mr-7"></i>
                  <i class="ri-arrow-right-line "></i>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-[#27272E]">
                  Expart Management Team
                </h1>
              </div>
            </div>

            <div className="pl-32 mt-10 grid grid-cols-4 gap-10">
              <div>
                <div className="rounded-md overflow-hidden">
                  <img
                    className="bg-cover hover:scale-110 duration-300"
                    src={image1}
                    alt=""
                  />
                </div>
                <h1 className="text-gray-500 mt-5">Founder</h1>
                <p className="text-lg text-[#27272E] font-bold mb-16">
                  Rosalina D. Willson
                </p>
              </div>
              <div>
                <div className="rounded-md overflow-hidden">
                  <img
                    className="bg-cover hover:scale-110 duration-300"
                    src={image2}
                    alt=""
                  />
                </div>
                <h1 className="text-gray-500 mt-5">CEO</h1>
                <p className="text-lg text-[#27272E] font-bold mb-16">
                  Ukolilix X. Xilanorix
                </p>
              </div>
              <div>
                <div className="rounded-md overflow-hidden">
                  <img
                    className="bg-cover hover:scale-110 duration-300 "
                    src={image3}
                    alt=""
                  />
                </div>
                <h1 className="text-gray-500 mt-5">Designer</h1>
                <p className="text-lg text-[#27272E] font-bold mb-16">
                  Alonso M. Miklonax
                </p>
              </div>
              <div>
                <div className="rounded-md overflow-hidden">
                  <img
                    className="bg-cover hover:scale-110 duration-300 "
                    src={image4}
                    alt=""
                  />
                </div>
                <h1 className="text-gray-500 mt-5">Designer</h1>
                <p className="text-lg text-[#27272E] font-bold mb-16">
                  Alonso M. Miklonax
                </p>
              </div>
            </div>
          </div>

          <div className="SOLUTION-SECTION">
            <div className="px-32">
              <div className=" flex items-center mt-[80px] ">
                <div>
                  <img className="rounded-lg" src={feature1} alt="" />
                </div>
                <div className="ml-[80px] w-[55%]">
                  <h1 className="text-gray-500 text-sm mb-2">Features #01</h1>
                  <h1 className="text-4xl font-bold text-[#27272E] mb-6">
                    Solutions that work together
                  </h1>
                  <p className="text-gray-500 text-sm leading-6">
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <button className="border px-7 py-3 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">
                    Get In Touch
                  </button>
                </div>
              </div>

              <div className=" flex items-center my-[80px]">
                <div className="mr-[70px] w-[55%]">
                  <h1 className="text-gray-500 text-sm mb-2">Features #01</h1>
                  <h1 className="text-4xl font-bold text-[#27272E] mb-6">
                    Solutions that work together
                  </h1>
                  <p className="text-gray-500 text-sm leading-6">
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <button className="border px-7 py-3 rounded-md font-semibold mt-8 text-[#27272E]  hover:bg-[#3577F0] hover:text-white duration-500">
                    Get In Touch
                  </button>
                </div>
                <div>
                  <img className="rounded-lg" src={feature2} alt="" />
                </div>
              </div>
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