import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import axios from "axios";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from '../../assets/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg'
import NextArrow from '../../assets/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'
import Footer from "../../Components/Footer/Footer";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right:'10px',zIndex:'1',color:'white'}}
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
      style={{ ...style, display: "block",left:'10px',color:'white',zIndex:'1' }}
      onClick={onClick}
    >
      <img src={PrevArrow} alt="" />
      </div>
  );
}


function Home() {
  // useEffect(()=>{
  //   // fetch('https://savingsapi.vedhatechnology.com/api/GetTodaysRate').then(()=>console.log("done"))
  //   const getData=async()=>{
  //     const res=await axios.post('https://savingsapi.vedhatechnology.com/api/GetTodaysRate',{
  //     "Date":"2022-09-16",
  //     headers: {
  //       "Cache-Control": "no-cache",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   },)
  //   console.log(res)
  //   }
  //   getData();
  // },[])
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade:true,
    nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>,
  };
  return (
    <div className="min-h-screen w-full bg-[#F8F6F4]">
      <Navbar/>
      <div className="">
        <div className="">
        <Slider {...sliderSettings}>
                    <img src={Banner1} alt="" />
                    <img src={Banner2} alt="" />
                    <img src={Banner3} alt="" />
        </Slider>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
