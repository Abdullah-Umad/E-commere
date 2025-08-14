import React from "react";

function ThirdProduct({ image, title, price }) {
  return (
    <div className="w-72 h-96 p-2 border border-[] bg-white rounded-lg border-[#DEE2E7] flex flex-col items-center">
      <div className="w-56 h-56 ">
        <img className="object-cover" src={image} alt="" />
      </div>

      <hr className="w-72" />
      <div className="w-52 h-80 py-1 px-1 ">
        <div className="flex flex-row mt-3 items-center ">
          <p className="text-xl font-semibold ">{price}</p>

          <img
            className="ml-28 w-10 h-10 object-cover"
            src="/Images/icon/heart.png"
            alt=""
          />
        </div>

        <div className="flex flex-row items-center">
          <img src="/Images/icon/rating.png" alt="" />
          <p className="ml-1 text-[#FF9017] text-base font-normal">7.5</p>
        </div>

        <div className="mt-3">
          <p className="text-gray-800">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdProduct;
