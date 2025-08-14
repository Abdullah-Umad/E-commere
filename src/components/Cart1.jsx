import React from "react";

function Cart1({ image, title, description, price }) {
  return (
    <>
      <div className="w-full h-max bg-[#FFFFFF] border-b border-[#DEE2E7] flex flex-row p-2">
        <div className="w-20 h-20">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-base text-[#1C1C1C] font-medium">{title}</p>
          <p className="w-80 text-base text-gray-500">{description}</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-white border w-max py-1 px-2 rounded-lg text-red-600 text-sm">
              Remove
            </button>
            <button className="bg-white border w-max py-1 px-2 rounded-lg text-[#0D6EFD] text-sm">
              Save for Later
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end  ml-4">
          <p className="text-lg font-semibold">{price}</p>
          <label className="text-sm text-gray-600" htmlFor="quantity">
            Quantity:
            <input
              type="number"
              id="quantity"
              placeholder="1"
              className="border border-gray-300 rounded px-2 py-1 w-16 ml-2"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Cart1;
