import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Second from "../pages/Second";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full flex flex-col px-4 md:px-10 lg:px-20 pt-4">
        {/* Top Row: Logo + Hamburger (mobile) */}
        <div className="w-full flex items-center justify-between lg:hidden">
          {/* Logo */}
          <div className="h-8 w-36">
            <img src="/Brand/logo-colored.svg" alt="Brand logo" />
          </div>

          {/* Hamburger (mobile only) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Layout: Logo + Search + Icons */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <div className="h-8 w-36">
            <img src="/Brand/logo-colored.svg" alt="Brand logo" />
          </div>

          {/* Search Bar (centered) */}
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

          {/* Action Icons */}
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

        {/* Mobile Search Bar */}
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

      {/* Bottom Navbar - Large Screens */}
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-3 bg-white shadow rounded-b-lg">
          <ul className="flex flex-col gap-2 text-sm">
            <li>All Category</li>
            <li>Hot Offer</li>
            <li>Gift Boxes</li>
            <li>Project</li>
            <li>Menu Items</li>
            <li>
              <select className="w-full border px-2 py-1 rounded">
                <option value="">Help</option>
              </select>
            </li>
            <li>
              <select className="w-full border px-2 py-1 rounded">
                <option value="">English, USD</option>
              </select>
            </li>
            <li className="flex items-center gap-2">
              <span>Ship to</span>
              <img
                className="h-4 w-6"
                src="/Images/flags/germany.png"
                alt="Flag"
              />
            </li>
          </ul>

          {/* Action Icons (Mobile) */}
          <div className="mt-4 flex justify-around text-xs text-[#8B96A5]">
            {[
              { src: "/Actions/Vector-3.png", label: "Profile" },
              { src: "/Actions/Vector-2.png", label: "Message" },
              { src: "/Actions/Vector-1.png", label: "Orders" },
              { src: "/Actions/Vector.png", label: "My Cart" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={item.src} alt={item.label} className="h-5" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />
    </>
  );
}

export default Navbar;

// import React from "react";

// function Navbar() {
//   return (
//     <>
//       <div className="min-w-full h-20 flex items-center  justify-between px-20">
//         <div className="h-8 w-36 object-cover">
//           <img src="/Brand/logo-colored.svg" alt="Brand logo" />
//         </div>

//         <div className="rounded-lg min-w-[600px] h-12 flex items-center outline outline-[#0D6EFD] gap-2 bg-white shadow">
//           <input
//             className="flex-1 h-full px-3 py-1  rounded-md outline-none"
//             type="search"
//             placeholder="Search"
//           />
//           <select
//             className="flex-1 w-24 h-full px-4 py-1 border-none rounded-md
//           outline-none"
//           >
//             <option value="">All Category</option>
//             <option value="electronics">Electronics</option>
//             <option value="clothing">Clothing</option>
//             <option value="home">Home & Kitchen</option>
//             <option value="books">Books</option>
//           </select>
//           <button className="h-full px-4 text-white bg-[#0D6EFD] rounded-md">
//             Search
//           </button>
//         </div>

//         <div className=" flex flex-row space-x-4">
//           <div className="flex flex-col items-center justify-center ">
//             <img src="/Actions/Vector-3.png" alt="" />
//             <p className="text-[#8B96A5] text-[12px]">Profile</p>
//           </div>
//           <div className="flex flex-col items-center justify-center ">
//             <img src="/Actions/Vector-2.png" alt="" />
//             <p className="text-[#8B96A5] text-[12px]">Message</p>
//           </div>
//           <div className="flex flex-col items-center justify-center ">
//             <img src="/Actions/Vector-1.png" alt="" />
//             <p className="text-[#8B96A5] text-[12px]">Orders</p>
//           </div>
//           <div className="flex flex-col items-center justify-center ">
//             <img src="/Actions/Vector.png" alt="" />
//             <p className="text-[#8B96A5] text-[12px]">My Cart</p>
//           </div>
//         </div>
//       </div>

//       <hr />
//       <div className="w-full h-14 flex flex-row items-center justify-between px-20">
//         <div className="flex flex-row items-center justify-center">
//           <img src="/Images/icon/menu.png" alt="" />

//           <ul className="flex flex-row space-x-8">
//             <li className="font-semibold">All Category</li>
//             <li>Hot Offer</li>
//             <li>Gift Boxes</li>
//             <li>Project</li>
//             <li>Menu Items</li>
//             <select className="outline-none border-none">
//               <option value="">Help</option>
//             </select>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <select className="outline-none border-none">
//               <option value="">English,Usd</option>
//             </select>
//           </ul>
//         </div>
//         <div className="flex flex-row items-center">
//           <p>Ship to</p>
//           <img className="h-4 w-6" src="/Images/flags/germany.png" alt="" />
//           {/* <select class="border px-2 py-1 rounded">
//             <option value="de">🇩🇪 Germany</option>
//             <option value="us">🇺🇸 United States</option>
//             <option value="fr">🇫🇷 France</option>
//           </select> */}
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// }

// export default Navbar;
