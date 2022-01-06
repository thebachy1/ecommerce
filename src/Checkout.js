import React from "react";
import banner from "./images/banner.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout flex p-[20px] bg-white h-max">
      <div className="checkout_left mx-[5px]">
        <img
          className="checkout_ad w-full mb-[10px]"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title mr-[10px] p-[10px] border-b border-gray-300 font-bold">
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
