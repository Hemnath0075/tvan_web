import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function RefundPolicy() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-10">
        <div className="">
          <h1 className="text-3xl py-4 text-[#468B93] text-center">
            REFUND POLICY
          </h1>
          <h1 className="text-2xl py-2 text-[#468B93]">Return</h1>
          <p>
            Product must be returned to us within ------- days from the date it
            has been delivered to the customer. Product must be returned with
            all tags attached in its original condition along with all packing
            material, courier receipt, invoice & other papers.
          </p>
          <h1 className="text-2xl py-2 text-[#468B93]">Refund</h1>
          <p>
            Once the Product is received to the company successfully, TVAN
            Jewellers will instantly initiate the refund to your source account
            or chosen method of refund within 5-7 working days.
          </p>
          <h1 className="text-2xl py-2 text-[#468B93]">
            Refund and Cancellation for Service Provider Company
          </h1>
          <p>
            Due to service providers in nature “NO REFUND”,“NO CANCELLATION”
            will be entertained once the Payment has been made.
          </p>
          <h1 className="text-2xl py-2 text-[#468B93]">Cancellation Policy</h1>
          <p className="mb-10">
            Please note an order can only be canceled within 24 hours of placing
            the order. Once the order is processed after 24 hours, no
            cancellation request will be entertained.However return is possible
            for all orders/products.
            <br />
            OR Customers can CANCEL order only before the Order has been
            shipped/Dispatched. After the Product/s have been shipped, The
            Customer CANNOT Cancel the Orders. However return is possible for
            all orders/products.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RefundPolicy;
