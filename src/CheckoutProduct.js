import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct flex my-[20px]">
      <img
        className="checkoutProduct_image object-contain width-[180px] h-[180px]"
        src={image}
      />
      <div className="checkoutProduct_info pl-[20px]">
        <p className="checkoutProduct_title text-[17px] font-extrabold">
          {title}
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button
          className="bg-[#20ACE8] border-[1px] border-solid mt-[10px] border-[#225DB7]"
          onClick={removeFromBasket}
        >
          Quitar del carrito
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
