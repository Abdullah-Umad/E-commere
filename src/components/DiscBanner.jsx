import React from "react";

function DiscBanner() {
  return (
    <>
      <div className="w-full h-32 border rounded-xl mt-4 flex text-white">
        <div className="bg-[#237CFF] basis-[60%] rounded-l-xl px-6 py-8">
          <p className="font-semibold text-2xl">
            Super discount on more than 100 USD
          </p>
          <p className="font-normal text-base">
            Have you ever finally just write dummy info
          </p>
        </div>
        <div className="bg-[#005ADE] basis-[40%] rounded-r-xl flex items-center  justify-end px-6">
          <button className="border border-[#FF9017] bg-[#FF9017] px-4 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default DiscBanner;
