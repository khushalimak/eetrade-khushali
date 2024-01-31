import React from 'react'
import img1 from '../assets/Homepage/asset 40.png';
import img2 from '../assets/Homepage/asset 41.png';
import img3 from '../assets/Homepage/asset 42.png';
import img4 from '../assets/Homepage/asset 43.png';
import img5 from '../assets/Homepage/asset 44.png';

const HomeService = () => {
    return (
        <>
            <div className="pb-[50px] mt-5 text-[#292930] container mx-auto">
                <div className="text-center">
                    <p className="text-[#FF497C] font-medium"><i class="ri-thumb-up-line bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>Why Us</p>
                    <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">Why People Choose Us</h1>
                </div>

                <div className="grid grid-cols-5 gap-x-10  mt-20">
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src={img1} alt="" />
                        </div>
                        <p>Fast & Secure Delivery </p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src={img2} alt="" />
                        </div>
                        <p>100% Guarantee On Product</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src={img3} alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src={img4} alt="" />
                        </div>
                        <p>24 Hour Return Policy</p>
                    </div>
                    <div className="border border-gray-200 rounded-md py-[50px] px-[50px] font-bold leading-[26px] text-center hover:shadow-2xl duration-500">
                        <div className="flex justify-center">
                            <img className="mb-6" src={img5} alt="" />
                        </div>
                        <p>Next Level Pro Quality</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService
