import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "react-slick";
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import axios from "axios";

function Home() {
  useEffect(()=>{
    const getData=async()=>{
      const res=await axios.get('https://savingsapi.vedhatechnology.com/api/GetTodaysRate',{
      "Date":"2022-09-16"
    })
    console.log(res)
    }
    getData();
  },[])
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade:true
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
    </div>
  );
}

export default Home;
