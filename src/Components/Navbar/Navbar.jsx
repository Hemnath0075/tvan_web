import React, { useState } from "react";
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

function Navbar() {
  const [userDiv,setUserDiv]=useState(false);
  const [isLoginModal,setIsLoginModal]=useState(false);
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
  return (
    <>
      <div className="w-full bg-white h-[10vh] border-b-2 flex items-center justify-between">
        <div className="">
          <img src={logo} alt="" className="h-[8vh]" />
        </div>
        <div className="flex justify-center items-center mr-[5%]">
          <h3>Live Rate:-</h3>
          <div className="w-[18vw]">
            <Slider {...sliderSettings}>
              <h3>
                {" "}
                Gold 22K 1 Gram –{" "}
                <span className="text-red-400">₹ 5490.00</span>
              </h3>
              <h3>
                Gold 22k 8 Gram –{" "}
                <span className="text-red-400">₹ 43920.00</span>
              </h3>
              <h3>
                Silver 1 Gram – <span className="text-red-400">₹ 75.50</span>
              </h3>
            </Slider>
          </div>
          <div className="">
            <img
              src={location}
              alt=""
              className="w-[4vw] h-[5vh] cursor-pointer"
            />
          </div>
          <div className="">
            <img
              src={user}
              alt=""
              className="w-[4vw] h-[5vh] cursor-pointer relative"
              onMouseOver={()=>setUserDiv(true)}
              onMouseLeave={()=>setUserDiv(false)}
            />
            {userDiv&&<div className="absolute w-[20vw] bg-white h-[30vh] right-[1%] top-[7%] rounded-md border-2 p-[1%] flex flex-col justify-evenly" onMouseOver={()=>setUserDiv(true)}
              onMouseLeave={()=>setUserDiv(false)}>
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
                  onClick={()=>{showModal();setIsLoginModal(true)}}
                >
                  Login
                </button>
                <button className="p-[2%] bg-slate-200 border-2 flex-grow w-full rounded-md text-black font-bold" onClick={()=>{showModal();setIsLoginModal(false)}}>
                  Signup
                </button>
              </div>
            </div>}
          </div>
          <div className="">
            <img src={bag} alt="" className="w-[4vw] h-[5vh] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[6vh] border-b-2 flex items-center justify-evenly">
        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200">
          HOME
        </h3>
        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200">
          TVAN
        </h3>
        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200">
          PRODUCTS
        </h3>
        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200">
          GOLD SCHEME
        </h3>
        <h3 className="cursor-pointer hover:border-b-2 hover:border-blue-200">
          CONTACT US
        </h3>
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
              {!isLoginModal&&<form onSubmit={handleSubmit(onSubmit)} method="post" className="flex flex-col justify-center items-center w-full gap-[3vh]">
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="text" {...register("username" ,{required:true})} placeholder="Username" className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.username?'border-red-600':'border-blue-200'}`}/>
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="email" {...register("email", { required: true })} className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.email?'border-red-600':'border-blue-200'}`} placeholder="Email"/>
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="tel" {...register("mobile", { required: true })} className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.mobile?'border-red-600':'border-blue-200'}`} placeholder="Mobile Number"/>
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="password" {...register("password", { required: true })} className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.password?'border-red-600':'border-blue-200'}`} placeholder="Password"/>
                
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  type="submit"
                  value="Signup"
                  className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                />
                <button className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}>Already Have an Account? Login</button>
              </form>}
              {isLoginModal&&<form onSubmit={handleSubmit(onSubmit)} method="post" className="flex flex-col justify-center items-center w-full gap-[3vh]">
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="email" {...register("email", { required: true })} className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.email?'border-red-600':'border-blue-200'}`} placeholder="Email"/>
                {errors.username && <span className="w-full flex justify-start text-[2vmin] text-red-500">**This field is required</span>}
                <input type="password" {...register("password", { required: true })} className={`px-[4%] py-[3%] w-full border-2 rounded-md ${errors.password?'border-red-600':'border-blue-200'}`} placeholder="Password"/>
                
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  type="submit"
                  value="Login"
                  className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}
                />
                <button className={`px-[4%] py-[3%] w-full border-2 rounded-md cursor-pointer bg-[#DE0606] text-white font-bold`}>Don't Have an Account? Register Here</button>
              </form>}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
