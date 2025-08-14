import React from "react";
import DiscBanner from "../components/DiscBanner";
import RelatedProducts from "../components/RelatedProducts";
import Like from "../components/Like";
import { TiTickOutline } from "react-icons/ti";

function Fourth() {
  const like = [
    {
      image: "/Images/cloth/1.jpg",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      image: "/Images/cloth/1.jpg",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      image: "/Images/cloth/1.jpg",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      image: "/Images/cloth/1.jpg",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
    {
      image: "/Images/cloth/1.jpg",
      title: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
    },
  ];
  const relatedproducts = [
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
    {
      image: "/Images/cloth/6.jpg",
      title: "Xiaomi Redmi 8 Original ",
      price: "$32.00-$40.00",
    },
  ];
  return (
    <>
      <div className="w-full  bg-[#F8F9FA] px-20 py-4">
        <div className="w-full bg-white rounded-xl border border-[#DEE2E7] p-4 flex gap-6">
          <div className="flex flex-col items-center w-1/4">
            <div className="border border-gray-200 rounded-lg p-1 mb-4">
              <img
                src="/Images/cloth/product-main.png"
                alt="Mens Long Sleeve T-shirt"
                className="w-52 h-52 object-contain"
              />
            </div>
            <img src="/Images/cloth/Gallery.png" alt="" />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-green-600 font-medium">In stock</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h2>

              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                <img src="/Images/icon/rating.png" alt="" />
                <span className="text-orange-500 font-bold">9.3</span>
                <span>32 reviews</span>
                <span>154 sold</span>
              </div>

              <div className="grid grid-cols-3 border border-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="p-3 bg-orange-50 border-r border-gray-200 text-center">
                  <p className="text-lg font-bold text-orange-600">$98.00</p>
                  <p className="text-xs text-gray-500">50-100 pcs</p>
                </div>
                <div className="p-3 border-r border-gray-200 text-center">
                  <p className="text-lg font-bold text-gray-800">$90.00</p>
                  <p className="text-xs text-gray-500">100-700 pcs</p>
                </div>
                <div className="p-3 text-center">
                  <p className="text-lg font-bold text-gray-800">$78.00</p>
                  <p className="text-xs text-gray-500">700+ pcs</p>
                </div>
              </div>

              <div className="divide-y divide-gray-200 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Price:</span>
                  <span className="text-gray-800">Negotiable</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Type:</span>
                  <span className="text-gray-800">Classic shoes</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Material:</span>
                  <span className="text-gray-800">Plastic material</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Design:</span>
                  <span className="text-gray-800">Modern nice</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Customization:</span>
                  <span className="text-gray-800 text-right">
                    Customized logo and design custom packages
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Protection:</span>
                  <span className="text-gray-800">Refund Policy</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500">Warranty:</span>
                  <span className="text-gray-800">2 years full warranty</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/4 h-max border border-gray-200 rounded-lg p-4 flex flex-col ">
            <div>
              <h3 className="text-sm text-gray-500">Supplier</h3>
              <p className="text-lg font-bold text-gray-800">
                Guanjoi Trading LLC
              </p>
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>Germany, Berlin</p>
                <p>Verified Seller</p>
                <p>Worldwide shipping</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Send inquiry
              </button>
              <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
                Seller’s profile
              </button>
            </div>
          </div>
        </div>

        <div className="flex py-4 gap-4">
          <div className="w-full h-[600px] bg-white px-4 py-4 rounded-xl border border-[#DEE2E7]">
            <div className="flex items-center gap-4 border-b border-gray-300 px-4 pb-2">
              <ul className="flex gap-6">
                <li className="cursor-pointer">Description</li>
                <li className="cursor-pointer">Reviews</li>
                <li className="cursor-pointer">Shipping</li>
                <li className="cursor-pointer">About Seller</li>
              </ul>
            </div>
            <div className="px-4 mt-4">
              <p className="text-base text-[#505050]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="px-4 py-3">
              <table className="border border-gray-300 rounded-xl w-full max-w-md text-left">
                <tbody>
                  <tr>
                    <td className="bg-[#EEEEEE] font-semibold p-2">Model</td>
                    <td className="bg-white p-2">#8786867</td>
                  </tr>
                  <tr>
                    <td className="bg-[#EEEEEE] font-semibold p-2">Style</td>
                    <td className="bg-white p-2">Classic style</td>
                  </tr>
                  <tr>
                    <td className="bg-[#EEEEEE] font-semibold p-2">
                      Certificate
                    </td>
                    <td className="bg-white p-2">ISO-898921212</td>
                  </tr>
                  <tr>
                    <td className="bg-[#EEEEEE] font-semibold p-2">Size</td>
                    <td className="bg-white p-2">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="bg-[#EEEEEE] font-semibold p-2">Memory</td>
                    <td className="bg-white p-2">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-96 h-32 px-4 py-3 text-[#505050]">
              <p className="flex justify-start items-center">
                <TiTickOutline /> Some great feature name here
              </p>
              <p className="flex justify-start items-center">
                <TiTickOutline /> Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="flex justify-start items-center">
                <TiTickOutline /> Duis aute irure dolor in reprehenderit
              </p>
              <p className="flex justify-start items-center">
                <TiTickOutline /> Some great feature name here
              </p>
            </div>
          </div>
          {/* You May Like */}
          <div className="w-1/4 h-max bg-[#FFFFFF]  rounded-xl border border-[#DEE2E7] px-4 py-4">
            <p className="text-[#1C1C1C] text-xl font-semibold ">
              You May Like
            </p>
            <div>
              {like.map((item) => (
                <Like
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="w-full h-80 bg-[#FFFFFF]  rounded-xl border border-[#DEE2E7] px-5 py-3">
          <p className="text-[#1C1C1C] text-xl font-semibold ">
            Related Products
          </p>
          <div className="grid grid-cols-6 gap-2">
            {relatedproducts?.map((items) => (
              <RelatedProducts
                image={items.image}
                title={items.title}
                price={items.price}
              />
            ))}
          </div>
        </div>
        <DiscBanner />
      </div>
    </>
  );
}

export default Fourth;
