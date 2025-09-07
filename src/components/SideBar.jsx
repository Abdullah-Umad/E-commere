import React from "react";

function SideBar() {
  return (
    <>
      <div className="w-56 h-full p-2 space-y-2">
        {/* Category */}
        <hr />
        <div className="w-56 h-auto py-1 px-2">
          <div className="space-y-2">
            <p className="font-semibold text-[#1C1C1C]">Category</p>
          </div>
          <ul className="font-normal text-base ">
            {[
              "Mobile Accessory",
              "Electronics",
              "Smart Phones",
              "Modern Tech",
            ].map((item) => (
              <li key={item}>{item} </li>
            ))}
            <button className="text-[#0D6EFD] text-base font-medium">
              See All
            </button>
          </ul>
        </div>
        {/* Brands */}
        <div className="w-56 h-auto py-1 px-2">
          <hr />
          <div className="space-y-2">
            <p className="font-semibold text-[#1C1C1C]">Brands</p>
          </div>
          <ul className="font-normal text-base">
            {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
            <button className="text-[#0D6EFD] text-base font-medium">
              See All
            </button>
          </ul>
        </div>
        {/* Features */}
        <div className="w-56 h-auto py-1 px-2">
          <hr />
          <div className="space-y-2">
            <p className="font-semibold text-[#1C1C1C]">Features</p>
          </div>
          <ul className="font-normal text-base">
            {[
              "Metallic",
              "Plastic Cover",
              "8GB Ram",
              "Super Power",
              "Large Memory",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
            <button className="text-[#0D6EFD] text-base font-medium">
              See All
            </button>
          </ul>
        </div>
        {/* Price */}
        <div className="w-56 h-auto py-1 px-2">
          <hr />
          <div className="space-y-3">
            <p className="font-semibold text-[#1C1C1C]">Price Range</p>
            <input className="w-full" type="range" name="" id="" />

            {/* Min & Max Inputs */}
            <div className="flex items-center gap-2">
              <div>
                <p>Min</p>
                <input
                  type="number"
                  placeholder="99"
                  className="w-24 px-1 py-1 border border-gray-300 rounded"
                />
              </div>

              <div>
                <p>Max</p>
                <input
                  type="number"
                  placeholder="999999"
                  className="w-24 px-1 py-1 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full text-blue-600 bg-white border border-gray-400  py-1 rounded">
              Apply
            </button>
          </div>
        </div>

        {/* Condition */}
        <div className="w-56 h-auto py-1 px-2">
          <hr />
          <div className="space-y-2">
            <p className="font-semibold text-[#1C1C1C]">Condition</p>
          </div>
          <ul className="font-normal text-base">
            {["Any", "Refurbrished", "Brand New", "Old Items"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <input type="radio" id={item} />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
        {/* Ratings */}
        <div className="w-56 h-auto py-1 px-2">
          <hr />
          <div className="space-y-2">
            <p className="font-semibold text-[#1C1C1C]">Ratings</p>
          </div>
          <ul className="font-normal text-base">
            {[
              "/Images/Ratings/rating5.png",
              "/Images/Ratings/rating4.png",
              "/Images/Ratings/rating3.png",
              "/Images/Ratings/rating2.png",
            ].map((imgSrc, index) => (
              <li key={index} className="flex items-center gap-2">
                <input type="checkbox" id={`checkbox-${index}`} />
                <img
                  src={imgSrc}
                  alt={`Option ${index + 1}`}
                  className="w-20 h-5 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
