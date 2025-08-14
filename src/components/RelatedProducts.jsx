import React from "react";

function RelatedProducts({ image, title, price }) {
  return (
    <>
      <div className="w-44 h-64 p-2">
        <div className="w-40 h-40 bg-[#EEEEEE] border rounded-lg ">
          <img className="object-cover p-2 rounded-lg" src={image} alt="" />
        </div>
        <div>
          <p className="text-gray-600 text-base">{title}</p>
          <p className="text-gray-500 text-base">{price}</p>
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;
