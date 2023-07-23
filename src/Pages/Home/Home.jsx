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
  // useEffect(()=>{
  // fetch('https://savingsapi.vedhatechnology.com/api/GetTodaysRate').then(()=>console.log("done"))
  // const getData=async()=>{
  //   const res=await axios.post('https://savingsapi.vedhatechnology.com/api/GetTodaysRate',{
  //   "Date":"2022-09-16",
  //   headers: {
  //     "Cache-Control": "no-cache",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // },)
  // console.log(res)
  // }
  // let loginInfo = {

  // };
  // fetch('https://savingsapi.vedhatechnology.com/web/api/login', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-type': 'application/json'
  //   },
  //   body: {
  //     "Username":"hemnath",
  //     "Password":"hemnath",
  //   },
  // })
  // fetch('https://savingsapi.vedhatechnology.com/api/GetTodaysRate', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-type': 'application/json'
  //   },
  //   body: {
  //     "Date":"2022-09-16",
  //   },
  // })
  // getData();
  // },[])
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
  return (
    <div className="min-h-screen w-full bg-[#F8F6F4]">
      <Navbar />
      <div className="">
        <div className="">
          <Slider {...sliderSettings}>
            <img src={Banner1} alt="" />
            <img src={Banner2} alt="" />
            <img src={Banner3} alt="" />
          </Slider>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <h2 className="text-[4vmin]">Gold Savings Scheme</h2>
          <div className="flex flex-row px-[1%] w-full justify-between">
            <div className="w-[30vw] h-auto bg-white rounded-md card">
              <img
                src="https://www.radhajewellers.com/images/feature-pic-2.jpg"
                alt=""
                className="w-[40vw] h-[30vh] rounded-t-md"
              />
              <div className="p-4">
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[15px] h-[15px] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
              </div>
            </div>
            <div className="w-[30vw] h-auto bg-white rounded-md card">
              <img
                src="https://www.radhajewellers.com/images/feature-pic-2.jpg"
                alt=""
                className="w-[40vw] h-[30vh] rounded-t-md"
              />
              <div className="p-4">
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
              </div>
            </div>
            <div className="w-[30vw] h-auto bg-white rounded-md card">
              <img
                src="https://www.radhajewellers.com/images/feature-pic-2.jpg"
                alt=""
                className="w-[40vw] h-[30vh] rounded-t-md"
              />
              <div className="p-4">
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="w-[1vw] h-[2vh] bg-black rounded-[50%]"></div>
                  <p>Monthly Amount:- ₹ 100,₹ 1000,₹ 10000,₹ 100000,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
