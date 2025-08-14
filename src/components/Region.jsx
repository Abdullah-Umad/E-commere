import React from "react";

function Region({ image, name, shop }) {
  return (
    <>
      <div className="w-52 h-9 flex flex-row items-center ">
        <img className="w-7 h-5 object-cover  " src={image} alt="" />
        <div className="w-28 h-auto p-3 -space-y-2">
          <p className=" w-40 text-base font-normal text text-[#1C1C1C]">
            {name}
          </p>
          <p className="text-sm text-gray-500">{shop}</p>
        </div>
      </div>
    </>
  );
}

export default Region;
