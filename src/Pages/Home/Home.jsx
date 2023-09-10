import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../../assets/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg";
import NextArrow from "../../assets/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg";
import Footer from "../../Components/Footer/Footer";
import goldScheme1 from "../../assets/images/goldscheme1.png";
import Product1 from "../../assets/images/product1.png";
import Product2 from "../../assets/images/product2.png";
import Product3 from "../../assets/images/product3.png";
import Product4 from "../../assets/images/product4.png";
import Product5 from "../../assets/images/product6.png";
import Product6 from "../../assets/images/product10.png";
import Product7 from "../../assets/images/product11.png";
import ProductCard from "../../Components/ProductCard";
import SchemePlan from '../../assets/images/schemeBanner.png';
import Star from '../../assets/images/star-svgrepo-com (1).svg'
import Scheme1 from '../../assets/images/scheme1.png';
import Scheme2 from '../../assets/images/scheme2.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: "1",
        color: "white",
      }}
      onClick={onClick}
    >
      <img src={NextArrow} alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        color: "white",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <img src={PrevArrow} alt="" />
    </div>
  );
}

function Home() {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <div className="">
        <div className="">
          <Slider {...sliderSettings}>
            <img src={Banner1} alt="" className="h-[30vh] md:h-auto"/>
            <img src={Banner2} alt="" className="h-[30vh] md:h-auto"/>
            <img src={Banner3} alt="" className="h-[30vh] md:h-auto"/>
          </Slider>
        </div>
        <div className="w-full flex justify-center items-center flex-col px-[3vw]">
          <h2 className="text-[4vmin] py-8">Gold <span className="text-[#468B93]">Savings Scheme</span></h2>
          <div className="flex flex-row px-[1%] w-full justify-between">
            <div className="flex flex-col md:flex-row px-[1%] w-full justify-evenly gap-4">
              <div className="w-full md:w-[30vw] h-auto bg-white rounded-md card">
                <img
                  src={Scheme1}
                  alt=""
                  className="w-full md:w-[40vw] h-[30vh] rounded-t-md"
                />
                <div className="p-4">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[30vw] h-auto bg-white rounded-md card">
                <img
                  src={Scheme2}
                  alt=""
                  className="w-full md:w-[40vw] h-[30vh] rounded-t-md"
                />
                <div className="p-4">
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="">
            <div className="w-[30vw] h-auto bg-white rounded-md card">
                <img
                  src="https://www.radhajewellers.com/images/feature-pic-2.jpg"
                  alt=""
                  className="w-[40vw] h-[30vh] rounded-t-md"
                />
                <div className="p-4">
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[20px] h-[20px]">
                      <img src={Star} alt="" />
                    </div>
                    <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className=""></div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="text-[4vmin] py-8">Shop By <span className="text-[#468B93]">Category</span></h2>
          <div className="h-auto md:h-[50vh] bg-white">
            <div className="bg-[#F8F6F4] h-auto md:h-full w-[90vw] flex flex-col md:flex-row gap-4">
              <div className="flex flex-col basis-[40%] gap-4">
                <div className="flex flex-row basis-[50%] gap-4 rounded-md">
                  <div className="grow_flex bg-red-50 rounded-md">
                    <img
                      src={Product1}
                      alt=""
                      className="rounded-md image_grid cursor-pointer"
                    />
                  </div>
                  <div className="grow_flex bg-red-50 rounded-md">
                    <img
                      src={Product4}
                      alt=""
                      className="rounded-md image_grid cursor-pointer"
                    />
                  </div>
                </div>
                <div className="basis-[50%] bg-blue-200 rounded-md overflow-hidden">
                  <img
                    src={Product2}
                    alt=""
                    className="rounded-md image_grid object-cover cursor-pointer"
                  />
                </div>
              </div>
              <div className="basis-[20%] bg-slate-400 rounded-md">
                <img
                  src={Product3}
                  alt=""
                  className="rounded-md image_grid cursor-pointer"
                />
              </div>
              <div className="flex flex-col basis-[40%] gap-4">
                <div className="basis-[50%] bg-blue-200 rounded-md overflow-hidden">
                  <img
                    src={Product5}
                    alt=""
                    className="object-cover image_grid cursor-pointer"
                  />
                </div>
                <div className="flex flex-row basis-[50%] gap-4">
                  <div className="grow_flex bg-red-50 rounded-md">
                    <img
                      src={Product6}
                      alt=""
                      className="rounded-md image_grid cursor-pointer"
                    />
                  </div>
                  <div className="grow_flex bg-red-50 rounded-md">
                    <img
                      src={Product7}
                      alt=""
                      className="rounded-md image_grid cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col h-[auto]">
          <h2 className="text-[4vmin] py-8">Popular <span className="text-[#468B93]">Products</span></h2>
          <div className="h-auto bg-white w-[90vw] slick-product pb-8">
            <Slider {...settings}>
              <ProductCard img={Product1} />
              <ProductCard img={Product2} />
              <ProductCard img={Product3} />
              <ProductCard img={Product4} />
              <ProductCard img={Product5} />
              <ProductCard img={Product6} />
              <ProductCard img={Product7} />
              <ProductCard img={Product1} />
              <ProductCard img={Product1} />
              <ProductCard img={Product1} />
              <ProductCard img={Product1} />
              <ProductCard img={Product1} />
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
