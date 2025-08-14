import React from "react";

function Items({ image, price, description }) {
  return (
    <>
      <div className=" w-52 h-72 p-4 rounded-md bg-white border border-[#DEE2E7]">
        <div>
          <img src={image} alt="" />
        </div>
        <p className="font-medium my-1">${price}</p>
        <p className="font-normal text-sm text-gray-500">{description}</p>
      </div>
    </>
  );
}

export default Items;
