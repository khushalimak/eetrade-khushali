import React, { Component } from "react";
import Slider from "react-slick";
import first from "../../assets/VARIATION2/asset 7.png"
import second from "../../assets/VARIATION2/asset 8.png"
import third from "../../assets/VARIATION2/asset 9.png"
import four from "../../assets/VARIATION2/asset 10.png"
import five from "../../assets/VARIATION2/asset 11.png"
import six from "../../assets/VARIATION2/asset 3.png"
import seven from "../../assets/VARIATION2/asset 4.png"
import eight from "../../assets/VARIATION2/asset 5.png"
import nine from "../../assets/VARIATION2/asset 6.png"
import gogle from "../../assets/VARIATION2/asset 2.png"

export default class P2Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <>
        <div className="relative z-10">
          <h1
            className="absolute px-2 py-1 rounded-md bg-[#417EF0] font-bold text-xs text-white top-8 right-[13%]"
            style={{ boxShadow: "0 8px 16px 0 rgba(53,119,240,.3) " }}
          >
            20% OFF
          </h1>
          <div className="absolute top-[480px] left-[85%]">
            <a
              className="h-12 w-12 flex justify-center items-center bg-white rounded-full hover:bg-[#417EF0]  duration-300 hover:text-white"
              href=""
            >
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-5 mr-28">
          <div className="col-span-1">
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              vertical={true}
              infinite={false}
            >
              <div className="my-2">
                <img
                  className="rounded-full w-14 mx-3 ring-2 ring-[#417EF0]"
                  src={first}
                  alt=""
                />
              </div>
              <div className="my-2">
                <img
                  className="rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300"
                  src={second}
                  alt=""
                />
              </div>
              <div className="my-2">
                <img
                  className="rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300"
                  src={third}
                  alt=""
                />
              </div>
              <div className="my-2">
                <img
                  className="rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300"
                  src={four}
                  alt=""
                />
              </div>
              <div className="my-2">
                <img
                  className="rounded-full w-14 mx-3 hover:ring-2 hover:ring-[#417EF0] duration-300"
                  src={five}
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <div className="col-span-4 w-[550px]">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              arrows={false}
            >
              <div>
                <img
                  className="rounded-lg w-[550px] h-[520px] cursor-pointer"
                  src={gogle}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-full"
                  src={six}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-full"
                  src={seven}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-full"
                  src={eight}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-lg w-full"
                  src={nine}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
