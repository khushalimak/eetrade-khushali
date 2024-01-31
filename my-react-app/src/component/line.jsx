import React from "react";
import bgimg from "../assets/about/asset 34.png";
import Slider from "react-slick";

export const Bgimg = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: false,
  };
  let slider;

  const handlePrev = () => {
    slider.slickPrev();
  };

  const handleNext = () => {
    slider.slickNext();
  };

  return (
    <>
      <div className="OFFER flex justify-center items-center">
        <div>
          <img className="w-full h-16 object-cover" src={bgimg} alt="" />
        </div>
        <div className="absolute text-white  w-[550px] mt-2">
          <div className="flex justify-between ">
            <div className="w-10">
              <button onClick={handlePrev}>
                <i class="ri-arrow-left-line "></i>
              </button>
            </div>
            <div className="h-8 w-96">
              <Slider ref={(c) => (slider = c)} {...settings}>
                <div>
                  <h1 className=" font-bold ">
                    STUDENT NOW GET 10% OFF :{" "}
                    <span className="underline hover:text-[#FF497C] duration-700">
                      GET OFFER
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className=" font-bold ">
                    STUDENT NOW GET 10% OFF :{" "}
                    <span className="underline hover:text-[#FF497C] duration-700">
                      GET OFFER
                    </span>
                  </h1>
                </div>
              </Slider>
            </div>
            <div className="w-10">
              <button onClick={handleNext}>
                <i class="ri-arrow-right-line "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
