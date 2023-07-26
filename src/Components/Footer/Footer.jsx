import React from "react";
import location from "../../assets/icons/home_pin_FILL0_wght400_GRAD0_opsz48.svg";
import landline from "../../assets/icons/call_FILL0_wght400_GRAD0_opsz48.svg";
import mobile from "../../assets/icons/phone_iphone_FILL0_wght400_GRAD0_opsz48.svg";
import mail from "../../assets/icons/mail_FILL0_wght400_GRAD0_opsz48.svg";
import instagram from "../../assets/icons/instagram-1-svgrepo-com.svg";
import facebook from "../../assets/icons/facebook-color-svgrepo-com.svg";
import twitter from "../../assets/icons/twitter-color-svgrepo-com.svg";
import whatsapp from "../../assets/icons/whatsapp-svgrepo-com.svg";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-[#F9F5F6] bottom-0 flex flex-col footer">
      <div className="flex flex-row pr-[2vw] pl-[2vw] pt-[2vw] h-full justify-between w-[100vw]">
        <div className="h-full">
          <h2 className="text-[3vmin] font-bold border-b-2 border-black">
            Products
          </h2>
          <div className="flex flex-col justify-around">
            <a href="#">Purchase Plans</a>
            <a href="#">Gold</a>
            <a href="#">Silver</a>
            <a href="#">Diamonds</a>
            <a href="#">Platinum</a>
          </div>
        </div>
        <div className="h-full">
          <h2 className="text-[3vmin] font-bold  border-b-2 border-black">
            Useful Links
          </h2>
          <div className="flex flex-col justify-around">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Direct Me</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
        <div className="flex flex-col h-full font-bold">
          <h2 className="text-[3vmin]  border-b-2 border-black font-bold">
            Contact
          </h2>
          <div className="flex flex-col justify-between flex-auto">
            <div className="flex flex-row justify-center items-center">
              <img src={location} alt="" className="w-[3vw] h-[5vh]" />
              <p className="w-[20vw]">
                {
                  "Address:-East Car Street, TVAN Corner,Tiruchengode - 637 211. Namakkal District."
                }
              </p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={landline} alt="" className="w-[2vw] h-[5vh]" />
              <p className="w-[20vw]">{"(04288) 252591, 256081, 253591"}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={mobile} alt="" className="w-[2vw] h-[5vh]" />
              <p className="w-[20vw]">{"+91 97885 35555"}</p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={mail} alt="" className="w-[2vw] h-[4vh]" />
              <p className="w-[20vw]">{"tvangold@gmail.com"}</p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col items-center gap-1">
          <iframe
            className="mb-1"
            title="id"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.379126083216!2d77.89736119999999!3d11.3799859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9619122a5c2ff%3A0x72af12867473ee36!2sTVAN%20Jewellers!5e0!3m2!1sen!2sin!4v1690105998192!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center bg-[#FCF9F9] p-4">
        <div className=""></div>
        <div className="">
          <p>© 2023 TVAN Jewellers Private Limited. All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <img src={instagram} alt="" className="w-[2vw] h-[4vh]" />
          <img src={facebook} alt="" className="w-[2vw] h-[4vh]" />
          <img src={twitter} alt="" className="w-[2vw] h-[4vh]" />
          <img src={whatsapp} alt="" className="w-[2vw] h-[4vh]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
