import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Product from "../components/Product";
import ThirdProduct from "../components/ThirdProduct";
import News from "../components/News";
import { FaThList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

function Second() {
  const [ViewMode, setViewMode] = useState("list");

  const products = [
    {
      image: "/Images/tech/1.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$980.00",
      discount: "$1128.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "/Images/tech/2.jpg",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "$980.00",
      discount: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "/Images/tech/3.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$980.00",
      discount: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "/Images/tech/4.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$980.00",
      discount: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "/Images/tech/5.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$980.00",
      discount: "$1128.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image: "/Images/tech/6.jpg",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: "$980.00",
      discount: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#F8F9FA] px-20 py-4 flex">
        <div>
          <SideBar />
        </div>
        <div className="flex-1">
          <div className="w-full flex justify-end items-end gap-3 mb-4">
            <button onClick={() => setViewMode("list")}>
              <FaThList />
            </button>
            <button onClick={() => setViewMode("grid")}>
              <IoGridSharp />
            </button>
          </div>
          <div
            className={`p-2 ${
              ViewMode === "grid" ? "grid grid-cols-3 gap-4" : "space-y-2"
            }`}
          >
            {products.map((item, index) =>
              ViewMode === "grid" ? (
                <ThirdProduct
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              ) : (
                <Product
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  discount={item.discount}
                  description={item.description}
                />
              )
            )}
          </div>
        </div>
      </div>
      <News />
    </>
  );
}

export default Second;
