// /* eslint-disable no-unused-vars */
// //import React from "react";
// import Sale from "../components/Sale";
// import Items from "../components/Items";
// import Services from "../components/Services";
// import Region from "../components/Region";
// import Offer from "../components/Offer";

// function Home() {
//   const services = [
//     {
//       image: "/Images/services/1.png",
//       icon: "/Images/icon/Avatar.png",
//       description: "Source from Industry Hubs",
//     },
//     {
//       image: "/Images/services/2.png",
//       icon: "/Images/icon/Avatar.png",
//       description: "Customize Your Products",
//     },
//     {
//       image: "/Images/services/3.png",
//       icon: "/Images/icon/Avatar.png",
//       description: "Fast, reliable shipping",
//     },
//     {
//       image: "/Images/services/4.png",
//       icon: "/Images/icon/Avatar.png",
//       description: "Product monitoring",
//     },
//   ];
//   const flags = [
//     {
//       image: "/Images/flags/Property 1=AE.png",
//       name: "Arabic Emirates",
//       shop: "shopname.ae",
//     },
//     {
//       image: "/Images/flags/Property 1=AU.png",
//       name: "Australia",
//       shop: "shopname.au",
//     },
//     {
//       image: "/Images/flags/Property 1=US.png",
//       name: "United States",
//       shop: "shopname.us",
//     },
//     {
//       image: "/Images/flags/Property 1=RU.png",
//       name: "Russia",
//       shop: "shopname.ru",
//     },
//     {
//       image: "/Images/flags/Property 1=IT.png",
//       name: "Italy",
//       shop: "shopname.it",
//     },
//     {
//       image: "/Images/flags/Property 1=DK.png",
//       name: "Denmark",
//       shop: "shopname.dk",
//     },
//     {
//       image: "/Images/flags/Property 1=FR.png",
//       name: "France",
//       shop: "shopname.fr",
//     },
//     {
//       image: "/Images/flags/Property 1=CN.png",
//       name: "China",
//       shop: "shopname.cn",
//     },
//     {
//       image: "/Images/flags/Property 1=GB.png",
//       name: "Great Britain",
//       shop: "shopname.gb",
//     },
//   ];
//   console.log(services);
//   return (
//     <div className="w-full bg-[#F8F9FA] px-4 md:px-10 lg:px-20 py-4">
//       {/* Hero Section */}
//       <div className="w-full min-h-96 flex flex-col lg:flex-row justify-between items-center bg-white space-y-4 lg:space-y-0 lg:space-x-4 rounded-xl border border-[#DEE2E7]">
//         {/* Left Menu */}
//         <div className="w-full lg:w-[250px] space-y-1">
//           <ul className="text-left rounded-xl space-y-1">
//             {[
//               "Automobiles",
//               "Clothes and wear",
//               "Home interiors",
//               "Tools, equipments",
//               "Sports and outdoor",
//               "Animal and pets",
//               "Machinery tools",
//               "More category",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className="h-10 p-2 font-medium hover:bg-[#E5F1FF] rounded-xl"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Hero Banner */}
//         <div className="w-full lg:w-[700px] h-[360px] rounded-md bg-[url('/Images/15bee8c1b9d77e50133ea130b3270887efd96310.png')] bg-contain bg-no-repeat">
//           <div className="w-max h-auto pt-20 px-10 md:px-20">
//             <p className="font-medium text-xl">Latest trending</p>
//             <p className="font-bold text-2xl">Electronic items</p>
//             <button className="px-6 py-2 text-black bg-white rounded-md mt-2 font-semibold">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Info Card */}
//         <div className="w-full lg:w-[250px] space-y-2">
//           <div className="p-4 bg-[#E3F0FF] rounded-xl">
//             <div className="flex items-center">
//               <img
//                 className="h-11 w-11 object-cover"
//                 src="/Images/icon/Avatar.png"
//                 alt="Avatar"
//               />
//               <div className="ml-3">
//                 <p className="font-semibold">Hi User,</p>
//                 <p className="font-normal">Lets get started</p>
//               </div>
//             </div>
//             <button className="w-full mt-2 py-2 text-white bg-[#0D6EFD] rounded-md font-semibold">
//               Join Now
//             </button>
//             <button className="w-full mt-2 py-2 text-[#0D6EFD] bg-white rounded-md font-semibold">
//               Login
//             </button>
//           </div>
//           <div className="p-4 h-24 bg-[#F38332] rounded-xl text-white">
//             Get US $10 off with a new supplier
//           </div>
//           <div className="p-4 h-24 bg-[#55BDC3] rounded-xl text-white">
//             Send quotes with supplier preferences
//           </div>
//         </div>
//       </div>

//       {/* Deals and Offers */}
//       <div className="my-6 bg-white rounded-xl border border-[#DEE2E7] p-4">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-64 mb-4 md:mb-0 md:mr-4">
//             <p className="font-bold text-xl">Deals and Offers</p>
//             <p className="text-sm text-gray-500">Hygiene Equipments</p>
//             <img src="/Images/time.png" alt="Time" className="mt-2" />
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
//             <Offer
//               image="/Images/tech/8.jpg"
//               name="Smart Watches"
//               discount="-25%"
//             />
//             <Offer image="/Images/tech/7.jpg" name="Laptops" discount="-15%" />
//             <Offer image="/Images/tech/6.jpg" name="Cameras" discount="-45%" />
//             <Offer
//               image="/Images/tech/5.jpg"
//               name="HeadPhones"
//               discount="-25%"
//             />
//             <Offer
//               image="/Images/tech/3.jpg"
//               name="Smart Phones"
//               discount="-35%"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Home & Decor */}
//       <SectionBlock
//         title="Home and Decor"
//         backgroundImage="/Images/BlockItemFirst.jpg"
//         items={[
//           { title: "Soft Chairs", price: 10, image: "/Images/interior/1.jpg" },
//           { title: "Sofa & Chair", price: 19, image: "/Images/interior/6.jpg" },
//           {
//             title: "Kitchen Dishes",
//             price: 19,
//             image: "/Images/interior/5.jpg",
//           },
//           {
//             title: "Smart Watches",
//             price: 19,
//             image: "/Images/interior/3.jpg",
//           },
//           {
//             title: "Kitchen Mixer",
//             price: 100,
//             image: "/Images/interior/9.jpg",
//           },
//           { title: "Blenders", price: 39, image: "/Images/interior/8.jpg" },
//           {
//             title: "Home Appliance",
//             price: 19,
//             image: "/Images/interior/7.jpg",
//           },
//           { title: "Coffee Maker", price: 10, image: "/Images/interior/4.jpg" },
//         ]}
//       />

//       {/* Electronics */}
//       <SectionBlock
//         title="Consumer electronics and gadgets"
//         backgroundImage="/Images/Esection.png"
//         items={[
//           { title: "Smart Watches", price: 19, image: "/Images/tech/8.jpg" },
//           { title: "Cameras", price: 89, image: "/Images/tech/6.jpg" },
//           { title: "Headphones", price: 10, image: "/Images/tech/9.jpg" },
//           { title: "Smart Watches", price: 90, image: "/Images/tech/2.jpg" },
//           { title: "Gaming Set", price: 35, image: "/Images/tech/5.jpg" },
//           { title: "Laptops & PC", price: 10, image: "/Images/tech/7.jpg" },
//           { title: "SmartPhones", price: 29, image: "/Images/tech/2.jpg" },
//           {
//             title: "Electric Kettle",
//             price: 240,
//             image: "/Images/tech/10.jpg",
//           },
//         ]}
//       />

//       {/* Send Inquiry Section */}
//       <div
//         className="my-6 p-4 bg-cover bg-no-repeat border border-[#DEE2E7] rounded-xl"
//         style={{
//           backgroundImage: `linear-gradient(to right, #2C7CF1, #00D1FF80), url('/Images/inc.png')`,
//         }}
//       >
//         <div className="flex flex-col lg:flex-row justify-between items-start">
//           <div className="text-white max-w-xl">
//             <h2 className="font-semibold text-3xl mb-2">
//               An easy way to send requests to all suppliers
//             </h2>
//             <p className="text-lg font-light">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             </p>
//           </div>
//           <form className="mt-4 lg:mt-0 w-full lg:w-[490px] bg-white border border-[#DEE2E7] rounded-lg p-4 space-y-3">
//             <h4 className="font-semibold text-lg">Send quote to suppliers</h4>
//             <input
//               className="w-full h-10 px-2 border border-[#DEE2E7] rounded-md"
//               placeholder="What Item you need?"
//               type="text"
//             />
//             <textarea
//               className="w-full h-20 px-2 border border-[#DEE2E7] rounded-md"
//               placeholder="Type more details"
//             ></textarea>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 className="w-full sm:w-[45%] h-10 px-2 border border-[#DEE2E7] rounded-md"
//                 placeholder="Quantity"
//                 type="text"
//               />
//               <input
//                 className="w-full sm:w-[30%] h-10 px-2 border border-[#DEE2E7] rounded-md"
//                 placeholder="0"
//                 type="number"
//               />
//             </div>
//             <button className="w-full py-3 text-white bg-[#0D6EFD] rounded-md font-semibold">
//               Send Inquiry
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Recommended Items */}
//       <div className="my-6">
//         <h4 className="font-semibold text-2xl mb-4">Recommended Items</h4>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {[...Array(10)].map((_, i) => (
//             <Items
//               key={i}
//               image={`/Images/cloth/${(i % 7) + 1}.jpg`}
//               price={10.35}
//               description={"T-shirts with multiple colors, for men"}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Services */}
//       <div className="my-6">
//         <h4 className="font-semibold text-2xl mb-4">Our Extra Services</h4>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {services?.map((item, index) => (
//             <Services
//               image={item?.image}
//               icon={item?.icon}
//               description={item?.description}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Regions */}
//       <div className="my-6">
//         <h4 className="font-semibold text-2xl mb-4">Suppliers by Region</h4>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//           {flags?.map((item, index) => (
//             <Region image={item.image} name={item?.name} shop={item.shop} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Shared block for home and electronics sections
// const SectionBlock = ({ title, backgroundImage, items }) => (
//   <div className="my-6 bg-white rounded-xl border border-[#DEE2E7]">
//     <div className="flex flex-col lg:flex-row">
//       <div
//         className="w-full lg:w-72 h-64 bg-cover bg-no-repeat rounded-tl-xl rounded-bl-xl"
//         style={{
//           backgroundImage: `linear-gradient(to right, #FFE8BA66), url('${backgroundImage}')`,
//         }}
//       >
//         <div className="py-6 m-4 px-4">
//           <p className="font-bold text-xl">{title}</p>
//           <button className="py-2 px-4 mt-2 text-black bg-white rounded-md font-semibold">
//             Source Now
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 w-full">
//         {items.map((item, i) => (
//           <Sale
//             key={i}
//             title={item.title}
//             price={item.price}
//             image={item.image}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default Home;

import React from "react";
import Sale from "../components/Sale";
import Items from "../components/Items";
import Services from "../components/Services";
import Region from "../components/Region";
import Offer from "../components/Offer";
import News from "../components/News";

function Home() {
  return (
    <>
      <div className="w-full  bg-[#F8F9FA] px-20 py-4">
        <div className="w-full min-h-96 flex justify-between items-center bg-[#FFFFFF] space-x-4 rounded-xl border border-[#DEE2E7]">
          <div className="flex flex-row justify-center">
            <div className="max-h-[360px] max-w-[250px] space-y-3 ml-2 mr-10">
              <ul className="text-left rounded-xl space-y-1">
                {[
                  "Automobiles",
                  "Clothes and wear",
                  "Home interiors",
                  "Tools, equipments",
                  "Sports and outdoor",
                  "Animal and pets",
                  "Machinery tools",
                  "More category",
                ].map((item) => (
                  <li
                    key={item}
                    className="h-10 p-2 font-medium hover:bg-[#E5F1FF] rounded-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[700px] h-[360px] rounded-md bg-[url('/Images/15bee8c1b9d77e50133ea130b3270887efd96310.png')] bg-contain bg-no-repeat">
              <div className="w-max h-auto pt-20 px-20">
                <p className="font-medium text-xl">Latest trending</p>
                <p className="font-bold text-2xl">Electronic items</p>
                <button className="w-auto px-6 py-2 text-[#000000] bg-[#fff] rounded-md my-1 font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className=" max-h-[360px] max-w-[250px] mx-7 space-y-2">
              <div className="items-center h-36 w-60 px-4 bg-[#E3F0FF] rounded-xl p-4">
                <div className=" flex flex-row items-center">
                  <img
                    className="h-11 w-11 object-cover"
                    src="/Images/icon/Avatar.png"
                    alt=""
                  />
                  <div className="ml-3 mb-3">
                    <p className="font-semibold">Hi User,</p>
                    <p className="font-normal">Lets get started</p>
                  </div>
                </div>
                <button className="w-full px-4 text-white bg-[#0D6EFD] rounded-md my-1 font-semibold">
                  Join Now
                </button>
                <button className="w-full px-4 text-[#0D6EFD] bg-[#fff] rounded-md my-1 font-semibold">
                  Login
                </button>
              </div>
              <div className="w-60 h-24 bg-[#F38332] rounded-xl text-white">
                <p className="p-4 font-normal">
                  Get US $10 off with a new supplier
                </p>
              </div>
              <div className="w-60 h-24 bg-[#55BDC3] rounded-xl  text-white">
                <p className="p-4 font-normal">
                  Send quotes with supplier preferences
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Discount */}
        <div className="h-60  w-full  bg-white my-4 flex rounded-xl border border-[#DEE2E7]">
          <div className="w-64 py-6 m-4 px-4 space-y-2">
            <p className="font-bold text-xl">Deals and Offers</p>
            <p className="font-normal text-sm text-gray-500">
              Hygiene Equipments
            </p>
            <img src="/Images/time.png" alt="" />
          </div>
          <div className="grid grid-cols-5">
            <Offer
              image={"/Images/tech/8.jpg"}
              name={"Smart Watches"}
              discount={"-25%"}
            />
            <Offer
              image={"/Images/tech/7.jpg"}
              name={"Laptops"}
              discount={"-15%"}
            />
            <Offer
              image={"/Images/tech/6.jpg"}
              name={"Cameras"}
              discount={"-45%"}
            />
            <Offer
              image={"/Images/tech/5.jpg"}
              name={"HeadPhones"}
              discount={"-25%"}
            />
            <Offer
              image={"/Images/tech/3.jpg"}
              name={"Smart Phones"}
              discount={"-35%"}
            />
          </div>
        </div>
        {/* Home & Decor */}
        <div className="h-64  w-full  bg-white my-4 flex rounded-xl border border-[#DEE2E7]">
          <div
            className="w-72 h-64 bg-cover bg-no-repeat rounded-tl-xl rounded-bl-xl"
            style={{
              backgroundImage: `linear-gradient(to right, #FFE8BA66), url('/Images/BlockItemFirst.jpg')`,
            }}
          >
            <div className="py-6 m-4 px-4 space-y-2">
              <p className="font-bold text-xl">Home and Decor</p>
              <button className="py-3 px-6 text-black bg-[#ffffff] outline-[#0D6EFD] rounded-md my-1 font-semibold">
                Source Now
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-4">
            <Sale
              title={"Soft Chairs"}
              price={10}
              image={"/Images/interior/1.jpg"}
            />
            <Sale
              title={"Sofa & Chair"}
              price={19}
              image={"/Images/interior/6.jpg"}
            />{" "}
            <Sale
              title={"Kitchen Dishes"}
              price={19}
              image={"/Images/interior/5.jpg"}
            />{" "}
            <Sale
              title={"Smart Watches"}
              price={19}
              image={"/Images/interior/3.jpg"}
            />{" "}
            <Sale
              title={"Kitchen Mixer"}
              price={100}
              image={"/Images/interior/9.jpg"}
            />{" "}
            <Sale
              title={"Blenders"}
              price={39}
              image={"/Images/interior/8.jpg"}
            />{" "}
            <Sale
              title={"Home Appliance"}
              price={19}
              image={"/Images/interior/7.jpg"}
            />{" "}
            <Sale
              title={"Coffee Maker"}
              price={10}
              image={"/Images/interior/4.jpg"}
            />
          </div>
        </div>

        {/* Consumer and electronics */}
        <div className="h-64  w-full  bg-white my-4 flex rounded-xl border border-[#DEE2E7]">
          <div
            className="w-72 h-64 bg-cover bg-center bg-no-repeat rounded-tl-xl rounded-bl-xl"
            style={{
              backgroundImage: `linear-gradient(to right, #FFE8BA66), url('/Images/Esection.png')`,
            }}
          >
            <div className="py-6 m-4 px-4 space-y-2">
              <p className="font-bold text-xl">
                Consumer electronics and gadgets
              </p>
              <button className="py-3 px-6 text-black bg-[#ffffff] outline-[#0D6EFD] rounded-md my-1 font-semibold">
                Source Now
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-4">
            <Sale
              title={"Smart Watches"}
              price={19}
              image={"/Images/tech/8.jpg"}
            />
            <Sale title={"Cameras"} price={89} image={"/Images/tech/6.jpg"} />{" "}
            <Sale
              title={"Headphones"}
              price={10}
              image={"/Images/tech/9.jpg"}
            />{" "}
            <Sale
              title={"Smart Watches"}
              price={90}
              image={"/Images/tech/2.jpg"}
            />{" "}
            <Sale
              title={"Gaming Set"}
              price={35}
              image={"/Images/tech/5.jpg"}
            />{" "}
            <Sale
              title={"Laptops & PC"}
              price={10}
              image={"/Images/tech/7.jpg"}
            />{" "}
            <Sale
              title={"SmartPhones"}
              price={29}
              image={"/Images/tech/2.jpg"}
            />{" "}
            <Sale
              title={"Electric Kettle"}
              price={240}
              image={"/Images/tech/10.jpg"}
            />
          </div>
        </div>
        {/* Form  */}
        <div
          className="p-2 w-full h-[445px] rounded-md border border-[#DEE2E7] bg-cover bg-no-repeat "
          style={{
            backgroundImage: `linear-gradient(to right, #2C7CF1, #00D1FF80), url('/Images/inc.png')`,
          }}
        >
          <div className="flex justify-between">
            <div className="ml-4 w-96 h-auto my-8 ">
              <h2 className="text-white font-semibold text-3xl p-3">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-white font-light text-lg p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="mr-4 my-8 py-4">
              <form
                className="w-[490px] max-h-96 bg-white border border-[#DEE2E7] rounded-lg p-3 space-y-4 px-2"
                action=""
              >
                <h4 className="font-semibold text-lg">
                  Send quote to suppliers
                </h4>
                <input
                  className="w-full h-10 px-2 border border-[#DEE2E7] outline-[#0D6EFD] rounded-md text-black"
                  placeholder="What Item you need?"
                  type="text"
                />
                <input
                  className=" w-full h-20 px-2 border border-[#DEE2E7] outline-[#0D6EFD] rounded-md text-black"
                  placeholder="Type more details"
                  type="textarea"
                />
                <input
                  className="w-[45%] h-10 px-2 border border-[#DEE2E7] outline-[#0D6EFD] rounded-md text-black"
                  placeholder="Quantity"
                  type="text"
                />
                <input
                  className="w-[30%] h-10 px-2 border ml-2 border-[#DEE2E7] outline-[#0D6EFD] rounded-md text-black"
                  placeholder="0"
                  type="number"
                />
                <button className="py-3 px-6 text-white bg-[#0D6EFD] outline-[#0D6EFD] rounded-md my-1 font-semibold">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Recommended Items */}
        <div>
          <h4 className="my-6 font-semibold text-2xl">Recommended Items</h4>
          <div className="w-full h-auto my-3 mx-4">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-5 md:grid-cols-3 ">
              <Items
                image={"/Images/cloth/1.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
              <Items
                image={"/Images/cloth/3.jpg"}
                price={10.35}
                description={"Jeans shorts for men blue color"}
              />
              <Items
                image={"/Images/cloth/7.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />

              <Items
                image={"/Images/cloth/5.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
              <Items
                image={"/Images/cloth/4.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
              <Items
                image={"/Images/cloth/1.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
              <Items
                image={"/Images/cloth/3.jpg"}
                price={10.35}
                description={"Jeans shorts for men blue color"}
              />
              <Items
                image={"/Images/cloth/7.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />

              <Items
                image={"/Images/cloth/5.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
              <Items
                image={"/Images/cloth/4.jpg"}
                price={10.35}
                description={"T-shirts with multiple colors, for men"}
              />
            </div>
          </div>
        </div>
        {/* Services */}
        <div>
          <h4 className="my-6 font-semibold text-2xl">Our Extra Services</h4>
          <div className="grid grid-cols-4 gap-4">
            <Services
              image={"/Images/services/1.png"}
              icon={"/Images/icon/Avatar.png"}
              description={"Source from Industry Hubs"}
            />
            <Services
              image={"/Images/services/2.png"}
              icon={"/Images/icon/Avatar.png"}
              description={"Customize Your Products"}
            />
            <Services
              image={"/Images/services/3.png"}
              icon={"/Images/icon/Avatar.png"}
              description={"Fast, reliable shipping by ocean or air"}
            />
            <Services
              image={"/Images/services/4.png"}
              icon={"/Images/icon/Avatar.png"}
              description={"Product monitoring and inspection"}
            />
          </div>
        </div>

        {/* Suppliers */}
        <div>
          <h4 className="my-6 font-semibold text-2xl">Suppliers by Region</h4>
          <div className="w-full">
            <div className="grid grid-cols-5 gap-2">
              <Region
                image={"/Images/flags/Property 1=AE.png"}
                name={"Arabic Emirates"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=AU.png"}
                name={"Australia"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=US.png"}
                name={"United States"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=RU.png"}
                name={"Russia"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=IT.png"}
                name={"Italy"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=DK.png"}
                name={"Denmark"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=FR.png"}
                name={"France"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=AE.png"}
                name={"Arabic Emirates"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=CN.png"}
                name={"China"}
                shop={"shopname.ae"}
              />
              <Region
                image={"/Images/flags/Property 1=GB.png"}
                name={"Great Britain"}
                shop={"shopname.ae"}
              />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <News />
    </>
  );
}

export default Home;
