import React from "react";

function Cart1({ image, title, description, price }) {
  return (
    <div className="w-full bg-white border-b border-[#DEE2E7] p-3 flex flex-col">
      <div className="flex gap-3">
        <div className="w-16 h-16 flex-shrink-0">
          <img
            className="object-cover w-full h-full rounded-md border"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-sm font-medium text-[#1C1C1C] leading-snug">
            {title}
          </p>
          <p className="text-xs text-gray-500 leading-snug">{description}</p>
        </div>
        <div className="text-right text-sm font-semibold">{price}</div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center border rounded text-lg">
            −
          </button>
          <span className="text-sm">1</span>
          <button className="w-7 h-7 flex items-center justify-center border rounded text-lg">
            +
          </button>
        </div>
        <div className="space-x-1">
          <button className="bg-white border w-max py-1 px-2 rounded-lg text-red-600 text-sm">
            Remove
          </button>
          <button className="bg-white border w-max py-1 px-2 rounded-lg text-[#0D6EFD] text-sm">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart1;
