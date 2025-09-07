import React, { useState } from "react";
import { FaBars, FaFirstOrder } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  IoCartOutline,
  IoClose,
  IoHomeOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import Second from "../pages/Second";
import { Routes, Route, Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { TbCategory } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col px-4 md:px-10 lg:px-20 pt-4">
        <div className="w-full flex items-center justify-between lg:hidden">
          <div className="h-8 w-36">
            <img src="/Brand/logo-colored.svg" alt="Brand logo" />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="h-8 w-36">
            <img src="/Brand/logo-colored.svg" alt="Brand logo" />
          </div>

          <div className="flex flex-1 mx-10 rounded-lg h-12 items-center outline outline-[#0D6EFD] gap-2 bg-white shadow px-2">
            <input
              className="flex-1 h-full px-3 py-1 rounded-md outline-none"
              type="search"
              placeholder="Search"
            />
            <select className="w-40 h-full px-3 py-1 border rounded-md outline-none">
              <option value="">Home</option>
              <option value="electronics">All Category</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Kitchen</option>
              <option value="books">Books</option>
            </select>
            <button className="h-full px-4 text-white bg-[#0D6EFD] rounded-md">
              Search
            </button>
          </div>

          <div className="flex space-x-4">
            {[
              { src: "/Actions/Vector-3.png", label: "Profile" },
              { src: "/Actions/Vector-2.png", label: "Message" },
              { src: "/Actions/Vector-1.png", label: "Orders" },
              { src: "/Actions/Vector.png", label: "My Cart", link: "/cart" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {item.link ? (
                  <Link to={item.link}>
                    <img src={item.src} alt={item.label} />
                    <p className="text-[#8B96A5] text-[12px]">{item.label}</p>
                  </Link>
                ) : (
                  <>
                    <img src={item.src} alt={item.label} />
                    <p className="text-[#8B96A5] text-[12px]">{item.label}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 lg:hidden w-full flex flex-col gap-2 bg-white shadow rounded-lg outline outline-[#0D6EFD] p-2">
          <input
            className="px-3 py-2 rounded-md outline-none border"
            type="search"
            placeholder="Search"
          />
          <select className="px-3 py-2 border rounded-md outline-none">
            <option value="">All Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
          </select>
          <button className="py-2 bg-[#0D6EFD] text-white rounded-md">
            Search
          </button>
        </div>
      </div>

      <hr className="my-3" />

      <div className="hidden lg:flex w-full h-14 items-center justify-between px-20">
        <div className="flex items-center gap-8">
          <img src="/Images/icon/menu.png" alt="" className="h-5 w-5" />
          <ul className="flex space-x-8 text-sm">
            <li className="font-semibold cursor-pointer">
              <Link to="/"> Home </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/second">Hot Offer</Link>
            </li>
            <li className="cursor-pointer">Gift Boxes</li>
            <li className="cursor-pointer">Project</li>
            <li className="cursor-pointer">Menu Items</li>
            <li>
              <select className="outline-none border-none">
                <option value="">Help</option>
              </select>
            </li>
          </ul>
        </div>

        <div>
          <select className="outline-none border-none">
            <option value="">English, USD</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <p>Ship to</p>
          <img className="h-4 w-6" src="/Images/flags/germany.png" alt="Flag" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <RxAvatar className="w-8 h-8 rounded-full" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="cursor-pointer">Sign in</span> |
                <span className="cursor-pointer">Register</span>
              </p>
            </div>

            <ul className="flex flex-col gap-4 mt-4 text-gray-700 text-sm">
              <li className="flex items-center gap-3">
                <IoHomeOutline className="w-4 h-4" />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center gap-3">
                <TbCategory className="w-4 h-4" />
                <Link to="/second">Categories</Link>
              </li>
              <li className="flex items-center gap-3">
                <IoIosHeartEmpty className="w-4 h-4" />
                <Link to="/favorites">Favorites</Link>
              </li>
              <li className="flex items-center gap-3">
                <FaFirstOrder className="w-4 h-4" />
                <Link to="/orders">My orders</Link>
              </li>
              <li className="flex items-center gap-3">
                <IoLanguageOutline className="w-4 h-4" />
                <span>English | USD</span>
              </li>
              <li className="flex items-center gap-3">
                <RiCustomerService2Line className="w-4 h-4" />
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="flex items-center gap-3">
                <IoCartOutline className="w-4 h-4" />
                <Link to="/cart">Cart</Link>
              </li>
            </ul>

            <div className="mt-auto pt-4 border-t text-xs text-gray-500 flex flex-col gap-2">
              <li>User agreement </li>
              <li>Partnership</li>
              <li>Privacy policy</li>
            </div>
          </div>
        </div>
      )}

      <hr />
    </>
  );
}

export default Navbar;
