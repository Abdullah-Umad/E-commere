import React from "react";
import { Link } from "react-router";

function Product({ image, title, price, discount, description }) {
  return (
    <div
      className={` h-52 p-2 border  bg-white rounded-lg border-[#DEE2E7] flex `}
    >
      <div className={` w-44 h-48"`}>
        <img className="object-cover" src={image} alt="" />
      </div>
      <div className={`py-3 px-2 w-max lg:w-[650px] h-56"}`}>
        <p className="text-base text-[#1C1C1C] font-medium">{title}</p>
        <div className="flex flex-row mt-3 items-center ">
          <p className="text-xl font-semibold ">{price}</p>
          <p className="ml-2 text-base text-gray-500 line-through font-semibold">
            {discount}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <img src="/Images/icon/rating.png" alt="" />
          <p className="ml-1 text-[#FF9017] text-base font-normal">7.5</p>
          <p
            className={` h-2 w-2 mx-2 font-normal  text-xs text-[#DEE2E7] bg-[#DEE2E7] rounded-full`}
          >
            .
          </p>
          <p className={` ml-1 text-[#8B96A5] text-base font-normal`}>
            154 orders
          </p>
          <p
            className={` h-2 w-2 mx-2 font-normal  text-xs text-[#DEE2E7] bg-[#DEE2E7] rounded-full`}
          >
            .
          </p>
          <p className={`ml-1 text-[#00B517] text-base font-normal `}>
            Free Shipping
          </p>
        </div>

        <div className="mt-3">
          <p className={`text-gray-600 hidden lg:block `}>{description}</p>
          <button className={`text-[#0D6EFD] text-base font-medium`}>
            <Link to="/fourth"> View Details </Link>
          </button>
        </div>
      </div>
      <img
        className="w-10 h-10 object-cover hidden lg:block"
        src="/Images/icon/heart.png"
        alt=""
      />
    </div>
  );
}

export default Product;
