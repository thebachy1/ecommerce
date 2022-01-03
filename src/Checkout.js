import React from "react";
import banner from "./images/banner.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout flex p-[20px] bg-white h-max">
      <div className="checkout_left">
        <img
          className="checkout_ad w-full mb-[10px] h-[150px] object-cover"
          src={banner}
          alt=""
        />
        <div>
          <h2 className="checkout_title mr-[10px] p-[10px] border-b border-gray-300">
            Tu carrito de compras
          </h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
