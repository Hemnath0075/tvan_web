import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

function ShippingPolicy() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-10">
        <div className="">
          <h1 className="text-3xl py-4 text-[#468B93] text-center">
            Shipping Policy
          </h1>
          <h1 className="text-2xl py-2 text-[#468B93]">
            Shipping & Delivery Policies
          </h1>
          <p>
            TVAN Jewellers ships its products to almost all parts of India.
            Orders placed will be shipped within 24* hrs. We ship on all days
            except Sunday and National Holidays. For all areas serviced by
            reputed couriers, the delivery time would be within 3 to 4 business
            days of shipping (business days exclude Sundays and other holidays).
            For other areas the products will be shipped through ---------------
            and may take 1-2 weeks depending on location. At times there might
            be unexpected delays in the delivery of your order due to
            unavoidable and undetermined logistics challenges beyond our control
            for which TVAN Jewellers is not liable and would request its users
            to cooperate as TVAN Jewellers continuously tries to nought such
            instances. Also, TVAN Jewellers reserves the right to cancel your
            order at its sole discretion in cases where it takes longer than
            usual delivery time or the shipment is physically untraceable and
            refund the amount paid for cancelled product(s) to your source
            account.
          </p>
          <h1 className="text-2xl py-2 text-[#468B93]">
            1. Eligibility to use our site
          </h1>
          <p>
            Use of the Site is available only to persons who can legally enter
            into contracts under applicable laws. Persons who are "incompetent
            to contract", within the meaning of the Indian Contract Act, 1872
            including un-discharged insolvents etermsAndCondition. are not
            eligible to use the Site. “www.tvanjewellers.com” reserves the right
            to terminate your access to the Site if it discovers that you are
            under the age of 18 years or suffers from any other disability, as
            recognized under Indian Contract Act, 1872.
          </p>
          <h1 className="text-2xl py-2 text-[#468B93]">Contact Us:-</h1>
          <p className="mb-10">
            TVAN Jewellers East Car Street, TVAN Corner, Tiruchengode - 637 211.
            Namakkal District. +91 97885 35555 tvangold@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingPolicy;
