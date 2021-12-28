import React from "react";
import lata from "./images/producto-lata.jpg";

function Product({ title, image, price }) {
  return (
    <div className="product flex flex-col w-full bg-white z-10 items-center justify-end m-[10px] p-[20px] max-h-[400px] min-w-[100px]">
      <div className="product_info h-[100px] mb-[15px] w-full">
        <p>{title}</p>
        <p className="product_price mt-[5px]">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        className="max-h-[200px] w-full object-contain mb-[15px]"
        src={image}
      />
      <button className="bg-[#20ACE8] border-[1px] border-solid mt-[10px] border-[#225DB7] text-[#111] p-[2px]">
        Añadir al carrito
      </button>
    </div>
  );
}

export default Product;
