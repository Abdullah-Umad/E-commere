import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Main Section */}
      <div className="w-full bg-white px-4 md:px-10 lg:px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="col-span-1">
          <img
            src="/Brand/logo-colored.svg"
            alt="Brand logo"
            className="mb-4"
          />
          <p className="text-sm mb-4 font-light">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/Images/icon/instagram3.svg" alt="Social" />
            ))}
          </div>
        </div>

        {[
          {
            title: "About",
            links: ["About Us", "Find Store", "Categories", "Blogs"],
          },
          {
            title: "Partnership",
            links: ["About Us", "Find Store", "Categories", "Blogs"],
          },
          {
            title: "Information",
            links: ["About Us", "Find Store", "Categories", "Blogs"],
          },
          {
            title: "For Users",
            links: ["About Us", "Find Store", "Categories", "Blogs"],
          },
        ].map((section, idx) => (
          <div key={idx} className="col-span-1">
            <ul className="space-y-1">
              <li className="font-bold mb-1">{section.title}</li>
              {section.links.map((link, index) => (
                <li key={index} className="text-sm">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-1">
          <ul>
            <li className="font-bold mb-2">Get App</li>
            <img
              className="mb-2 w-32"
              src="/Misc/market-button-1.png"
              alt="App Store"
            />
            <img
              className="mb-2 w-32"
              src="/Misc/market-button.png"
              alt="Play Store"
            />
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-[#EFF2F4] flex flex-col sm:flex-row items-center justify-between px-4 md:px-20 py-4 gap-2 text-sm">
        <p className="text-[#606060]">© 2023 Ecommerce.</p>
        <select className="outline-none border-none bg-transparent">
          <option value="">English, USD</option>
        </select>
      </div>
    </>
  );
}

export default Footer;

// import React from "react";

// function Footer() {
//   return (
//     <>
//       <div className="w-full h-48 bg-[#EFF2F4] flex flex-col justify-center items-center">
//         <div className="text-center my-3">
//           <h4 className="text center font-bold text-[20px] ">
//             Subscribe on our newsletter
//           </h4>
//           <p className="text center mb-4">
//             Get daily news on upcoming offers from many suppliers all over the
//             world
//           </p>
//           <form className="space-x-3 my-2" action="">
//             <input
//               className=" rounded-md h-8 w-64 outline-[#0D6EFD]"
//               type="email"
//               placeholder="Email"
//             />
//             <button className="h-8 px-4 text-white bg-[#0D6EFD] rounded-md">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className=" w-full h-64 flex items-center justify-between bg-[#fff] px-20">
//         <div className="h-auto max-w-64">
//           <img src="/Brand/logo-colored.svg" alt="Brand logo" />
//           <p className="my-4 font-light">
//             Best information about the company gies here but now lorem ipsum is
//           </p>
//           <div className="flex flex-row space-x-2">
//             <img src="/Images/icon/instagram3.svg" alt="" />
//             <img src="/Images/icon/instagram3.svg" alt="" />
//             <img src="/Images/icon/instagram3.svg" alt="" />
//             <img src="/Images/icon/instagram3.svg" alt="" />
//             <img src="/Images/icon/instagram3.svg" alt="" />
//           </div>
//         </div>

//         <div>
//           <ul>
//             <li className="font-bold">About</li>
//             <li>About Us</li>
//             <li>Find Store</li>
//             <li> Categories</li>
//             <li>Blogs</li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-bold">Partnership</li>
//             <li>About Us</li>
//             <li>Find Store</li>
//             <li> Categories</li>
//             <li>Blogs</li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-bold">Information</li>
//             <li>About Us</li>
//             <li>Find Store</li>
//             <li> Categories</li>
//             <li>Blogs</li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-bold">For Users</li>
//             <li>About Us</li>
//             <li>Find Store</li>
//             <li> Categories</li>
//             <li>Blogs</li>
//           </ul>
//         </div>
//         <div>
//           <ul>
//             <li className="font-bold">Get App</li>
//             <img className="my-2" src="/Misc/market-button-1.png" alt="" />
//             <img className="my-2" src="/Misc/market-button.png" alt="" />
//           </ul>
//         </div>
//       </div>

//       <div className="w-full h-16 flex flex-row items-center justify-between bg-[#EFF2F4] px-20">
//         <div>
//           <p className="font-normal text-[#606060]">© 2023 Ecommerce.</p>
//         </div>
//         <div>
//           <ul>
//             <select className="outline-none border-none">
//               <option value="">English,Usd</option>
//             </select>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;
