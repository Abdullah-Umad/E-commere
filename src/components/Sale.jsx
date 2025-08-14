import React from "react";

function Sale({ title, price, image }) {
  return (
    <>
      <div className="w-56 h-32 p-3 border-y border-l">
        <h5>{title}</h5>
        <div className="w-14 h-6">
          <p className="text-gray-500 text-[13px]">
            From <br />
            USD {price}
          </p>
        </div>
        <div className="flex items-end justify-end">
          <img className="w-16 " src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Sale;
