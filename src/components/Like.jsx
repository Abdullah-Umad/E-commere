import React from "react";

function Like({ image, title, price }) {
  return (
    <>
      <div className="w-full h-20 py-4 mb-2 flex">
        <div className="w-20 h-20 border rounded-lg ">
          <img className="object-cover py-1 rounded-lg" src={image} alt="" />
        </div>
        <div className="px-2">
          <p className="text-[#1C1C1C] text-base">{title}</p>
          <p className="text-gray-500 text-base">{price}</p>
        </div>
      </div>
    </>
  );
}

export default Like;
