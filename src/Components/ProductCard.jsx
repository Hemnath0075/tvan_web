import React from "react";

function ProductCard(props) {
  return (
      <div className="bg-white flex flex-col h-auto gap-4 justify-between  rounded-md card">
        <img src={props.img} alt="" className="rounded-md" />
        <div className="flex flex-col justify-center items-center">
          <h3>22 Kt Gold Zercon Mugappu</h3>
          <h5><span className="rupee_text">₹</span>18164.00</h5>
        </div>
      </div>
  );
}

export default ProductCard;
