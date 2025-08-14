import React from "react";
import { TiShoppingCart } from "react-icons/ti";
function Cart2({ image, price, title }) {
  return (
    <>
      <div className="w-64 h-full p-4 space-y-2">
        <img
          className=" w-56 h-56 object-cover rounded-lg"
          src={image}
          alt=""
        />
        <p className="text-xl font-semibold ">${price}</p>
        <p className="text-gray-600">{title}</p>
        <button className="bg-white border w-max flex items-center pr-4 pl-1 py-2 rounded-lg text-[#0D6EFD] text-base font-medium">
          <TiShoppingCart />
          Move to Cart
        </button>
      </div>
    </>
  );
}

export default Cart2;
