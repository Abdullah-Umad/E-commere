import React from "react";
function Offer({ image, name, discount }) {
  return (
    <div
      className="w-44 h-[14rem] bg-white
     py-3 m-1  border-l border-[#DEE2E7] flex flex-col items-center justify-center "
    >
      <div>
        <img className="w-32 object-cover" src={image} alt="" />
      </div>
      <p className="font-normal my-1 ">{name}</p>
      <div>
        <p className="font-normal px-3 text-sm text-red-500 bg-[#FFE3E3] rounded-2xl">
          {discount}
        </p>
      </div>
    </div>
  );
}

export default Offer;
