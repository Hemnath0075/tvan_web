import React, { useEffect, useState } from "react";
import logo from "../../assets/images/tvan.png";
import user from "../../assets/icons/person_FILL0_wght400_GRAD0_opsz48.svg";
import bag from "../../assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg";
import location from "../../assets/icons/home_pin_FILL0_wght400_GRAD0_opsz48.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Input, Modal } from "antd";
import loginImage from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import playStoreImage from "../../assets/images/google-play.png";
import axios from "axios";
import instagram from "../../assets/icons/instagram-1-svgrepo-com.svg";
import facebook from "../../assets/icons/facebook-color-svgrepo-com.svg";
import twitter from "../../assets/icons/twitter-color-svgrepo-com.svg";
import whatsapp from "../../assets/icons/whatsapp-svgrepo-com.svg";

import { Button, Drawer } from "antd";
import MenuIcon from "../../assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";
import { useLocation, useNavigate } from "react-router-dom";


function Navbar({navigateSections}) {
  const currentPage = useLocation();
  console.log(currentPage.pathname)
  const navigate = useNavigate();
  const [userDiv, setUserDiv] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [priceData, setPriceData] = useState([
      {"SRate":0,
      "GRate":0,}
  ]);
  console.log(priceData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };

  useEffect(()=>{
    const getTodaysPrice=async()=>{
      const currentDate = new Date();
      console.log(currentDate-19e5)
      // Extract year, month, and day from the date
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Subtract 1 from the month and pad with '0' if needed
      const day = String(currentDate.getDate()).padStart(2, '0');
      console.log(day)
      const formattedDate = `${year}-${month}-${day}`;
      // const data = await axios.get(`http://65.1.2.188:8057/getTodayPrice?date=${formattedDate}`)
      const data = await axios.post(`https://vedhatech-001-site6.gtempurl.com/api`,{
        "date":formattedDate
      })
      console.log("this is from the api",data)
      if(data.data===null){
        setPriceData(  [{"SRate":0,
        "GRate":0,}])
      }
      else{
        setPriceData(data.data)
      }
    }
    getTodaysPrice();
  },[])
  console.log(priceData)

//   console.log(priceData);
  return (
    <>
      <div className="w-full bg-white h-auto md:hidden flex flex-col items-center">
        <div className="flex flex-row w-full basis-[50%] justify-between items-center">
          <img src={MenuIcon} alt="" className="h-[5vh]" onClick={showDrawer}/>
          <img src={logo} alt="" className="h-[8vh]" />
          <img
            src={user}
            alt=""
            className="w-[6vw] h-[5vh] cursor-pointer relative mr-[10%]"
            onClick={() => setUserDiv(true)}
            // onMouseLeave={() => setUserDiv(false)}
          />
          {userDiv && (
            <div
              className="absolute w-[40vw] md:w-[20vw] right-[1%] h-[30vh] z-10 bg-white md:h-[30vh]  top-[7%] rounded-md border-2 p-[1%] flex flex-col justify-evenly"
              onMouseOver={() => setUserDiv(true)}
              onMouseLeave={() => setUserDiv(false)}
            >
              <div className="">
                <h3 className="font-bold">Your Account</h3>
                <p>
                  Track Your Orders, Manage Payment, Edit Profile And Much
                  More..
                </p>
              </div>
              <div className="flex w-full flex-col justify-center items-center gap-4">
                <button
                  className="p-[2%] bg-slate-200 border-2 flex-grow w-full rounded-md text-black font-bold"
                  onClick={() => {
                    showModal();
                    setIsLoginModal(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="p-[2%] bg-slate-200 border-2 flex-grow w-full rounded-md text-black font-bold"
                  onClick={() => {
                    showModal();
                    setIsLoginModal(false);
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          )}
          <Drawer
            title="TVAN JEWELLERS"
            placement="left"
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col gap-4">
            <p onClick={()=>navigate('/')} className="border-2 p-2">Home</p>
            </div>
          </Drawer>
        </div>
        {/* <div className="w-full flex flex-row items-center bg-[#d4f3f7] text-black px-2 py-2 rounded-md">
        <div className="flex flex-row gap-4 justify-between w-full">
            <a
              href="https://instagram.com/tvan.jewellers?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <img src={instagram} alt="" className="w-[4vw] h-[4vh]" />
            </a>
            <a href="https://www.facebook.com/tvantiruchengode" target="_blank">
              <img src={facebook} alt="" className="w-[2vw] h-[4vh]" />
            </a>
            <img src={whatsapp} alt="" className="w-[2vw] h-[4vh]" />
          </div>
        </div> */}
        <div className="w-full flex flex-row items-center bg-[#ffd1dc] text-black px-2 py-2 rounded-md">
          <div className="">
            <p className="whitespace-nowrap">Live Rate:-</p>
          </div>
          <Slider {...sliderSettings}>
            <h3>
              {" "}
              Gold 22K 1 Gram –{" "}
              <span className="text-black">
                <span className="rupee_text">₹</span> {parseInt(priceData[0]?.GRate).toFixed(0)}
              </span>
            </h3>
            <h3>
              Gold 22k 8 Gram –{" "}
              <span className="text-black">
                <span className="rupee_text">₹</span> {parseInt(priceData[0]?.GRate * 8).toFixed(0)}
              </span>
            </h3>
            <h3>
              Silver 1 Gram –{" "}
              <span className="text-black">
                <span className="rupee_text">₹</span> {priceData[0]?.SRate}
              </span>
            </h3>
          </Slider>
        </div>
      </div>
      <div className="hidden w-full bg-white h-[10vh] md:flex items-center justify-between">
        <div className="flex justify-center items-center gap-[4%] ml-4">
          <img src={logo} alt="" className="h-[8vh]" />
          <div className="w-[27vw] h-[9vh] flex flex-row gap-4 items-center bg-[#ffd1dc] text-black px-2 py-2 rounded-md text-sm">
            <div className="">
              <p className="whitespace-nowrap">Live Rate:-</p>
            </div>
            {/* <Slider {...sliderSettings}> */}
            <div className="flex flex-col">
              <h3>
                {" "}
                Gold 22K 1 Gram –{" "}
                <span className="text-black">
                  <span className="rupee_text">₹</span> {parseInt(priceData[0]?.GRate).toFixed(0)}
                </span>
              </h3>
              <h3>
                Gold 22k 8 Gram –{" "}
                <span className="text-black">
                  <span className="rupee_text">₹</span>{" "}
                  {parseInt(priceData[0]?.GRate * 8).toFixed(0)}
                </span>
              </h3>
              <h3>
                Silver 1 Gram –{" "}
                <span className="text-black">
                  <span className="rupee_text">₹</span> {priceData[0]?.SRate}
                </span>
              </h3>
            </div>
            {/* </Slider> */}
          </div>
        </div>
        <div className="flex justify-center items-center mr-[5%]">
          <div className="flex flex-row gap-4 justify-between">
            <a
              href="https://instagram.com/tvan.jewellers?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <img src={instagram} alt="" className="w-[2vw] h-[4vh]" />
            </a>
            <a href="https://www.facebook.com/tvantiruchengode" target="_blank">
              <img src={facebook} alt="" className="w-[2vw] h-[4vh]" />
            </a>
            <img src={whatsapp} alt="" className="w-[2vw] h-[4vh]" />
          </div>
          {/* <div className="">
            <img
              src={location}
              alt=""
              className="w-[4vw] h-[5vh] cursor-pointer"
            />
          </div> */}
          <div className="">
            <img
              src={user}
              alt=""
              className="w-[4vw] h-[5vh] cursor-pointer relative"
              onMouseOver={() => setUserDiv(true)}
              onMouseLeave={() => setUserDiv(false)}
            />
            {userDiv && (
              <div
                className="absolute w-[30vw] bg-white z-10  h-[40vh] md:h-[30vh] right-0 top-[7%] rounded-md border-2 p-[1%] flex flex-col justify-evenly"
                onMouseOver={() => setUserDiv(true)}
                onMouseLeave={() => setUserDiv(false)}
              >
                <div className="">
                  <h3 className="font-bold">Your Account</h3>
                  <p>
                    Track Your Orders, Manage Payment, Edit Profile And Much
                    More..
                  </p>
                </div>
                <div className="flex w-full flex-col justify-center items-center gap-4">
                  <button
                    className="p-[2%] bg-slate-200 border-2 flex-grow w-full rounded-md text-black font-bold"
                    onClick={() => {
                      showModal();
                      setIsLoginModal(true);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="p-[2%] bg-slate-200 border-2 flex-grow w-full rounded-md text-black font-bold"
                    onClick={() => {
                      showModal();
                      setIsLoginModal(false);
                    }}
                  >
                    Signup
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <img src={bag} alt="" className="w-[4vw] h-[5vh] cursor-pointer" />
          </div>
          <div className="">
            <a
              href="https://play.google.com/store/apps/details?id=com.tvanjewellers"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={playStoreImage}
                alt=""
                className="w-auto h-[5vh] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden w-full bg-[#e063a2] text-white h-[6vh] md:flex items-center justify-start font-bold gap-[4vw]">

        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200 ml-[3vw]" onClick={()=>navigate('/')}>
          HOME
        </h3>
        {currentPage.pathname==="/" && <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200" onClick={()=>{navigateSections('category')}}>
          CATEGORY
        </h3>}
        {currentPage.pathname==="/" && <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200" onClick={()=>navigateSections('products')}>
          PRODUCTS
        </h3>}
        {currentPage.pathname==="/" && <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200" onClick={()=>navigateSections('schemes')}>
          GOLD SCHEME
        </h3>}
        {currentPage.pathname==="/" && <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200" onClick={()=>navigateSections('contactus')}>
          CONTACT US
        </h3>}
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="w-full h-full flex flex-row">
          <div className="basis-[60%]">
            <img src={loginImage} alt="" className="h-full" />
          </div>
          <div className="basis-[40%] flex flex-col items-start justify-evenly w-full mt-[5%] p-[2%]">
            <h3 className="font-bold text-[4vmin]">Register With Us</h3>
            <div className="flex flex-col justify-start items-center w-full">
              {!isLoginModal && (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  method="post"
                  className="flex flex-col justify-center items-center w-full gap-[3vh]"
                >
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.username ? "border-red-600" : "border-blue-200"
                      }`}
                  />
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.email ? "border-red-600" : "border-blue-200"
                      }`}
                    placeholder="Email"
                  />
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="tel"
                    {...register("mobile", { required: true })}
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.mobile ? "border-red-600" : "border-blue-200"
                      }`}
                    placeholder="Mobile Number"
                  />
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.password ? "border-red-600" : "border-blue-200"
                      }`}
                    placeholder="Password"
                  />

                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    type="submit"
                    value="Signup"
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                  />
                  <button
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                  >
                    Already Have an Account? Login
                  </button>
                </form>
              )}
              {isLoginModal && (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  method="post"
                  className="flex flex-col justify-center items-center w-full gap-[3vh]"
                >
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.email ? "border-red-600" : "border-blue-200"
                      }`}
                    placeholder="Email"
                  />
                  {errors.username && (
                    <span className="w-full flex justify-start text-[2vmin] text-red-500">
                      **This field is required
                    </span>
                  )}
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.password ? "border-red-600" : "border-blue-200"
                      }`}
                    placeholder="Password"
                  />

                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    type="submit"
                    value="Login"
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                  />
                  <button
                    className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                  >
                    Don't Have an Account? Register Here
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
