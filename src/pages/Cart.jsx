import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import Cart2 from "../components/Cart2";
import Cart1 from "../components/Cart1";
import DiscBanner from "../components/DiscBanner";

function Cart() {
  const cart1 = [
    {
      image: "/Images/cloth/1.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description:
        "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
      price: "$78.99",
    },
    {
      image: "/Images/cloth/2.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description:
        "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
      price: "$78.99",
    },
    {
      image: "/Images/cloth/3.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description:
        "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
      price: "$78.99",
    },
  ];
  const cart2 = [
    {
      image: "/Images/tech/img.png",
      price: "99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      image: "/Images/tech/img1.png",
      price: "99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      image: "/Images/tech/img2.png",
      price: "99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      image: "/Images/tech/img3.png",
      price: "99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
    },
  ];
  return (
    <>
      <div className="w-full  bg-[#F8F9FA] p-2 lg:px-20 lg:py-4">
        <h3 className="font-semibold text-2xl text-[#1C1C1C]">My Cart</h3>
        <div className="w-full flex flex-col lg:flex lg:flex-row py-4 gap-4 ">
          <div className="w-full h-max p-2 bg-[#FFFFFF]  rounded-xl border border-[#DEE2E7]">
            <div className="py-3">
              {cart1?.map((items) => (
                <Cart1
                  image={items?.image}
                  title={items.title}
                  description={items.description}
                  price={items.price}
                />
              ))}
            </div>
            <div className="w-full flex flex-row justify-between py-2">
              <button className="text-white justify-between border w-max flex items-center py-2 px-4 rounded-lg bg-[#0D6EFD] text-base font-medium">
                <FaArrowLeftLong /> Back to Shop
              </button>
              <button className="bg-white border w-max flex items-center px-3 py-2 rounded-lg text-[#0D6EFD] text-base font-medium">
                Remove All
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className=" hidden lg:block w-64 h-max py-3 px-2 bg-[#FFFFFF] space-y-3 rounded-xl border border-[#DEE2E7]">
              <p className="text-base text-gray-600">Have a coupon?</p>
              <div className="w-60 h-10 border border-[#E0E0E0] rounded-lg p-2">
                <input
                  className="w-40 px-2 border-r"
                  type="text"
                  placeholder="Add a Coupon"
                />
                <button className="font-medium text-[#0D6EFD] pl-2">
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="space-y-2 text-gray-800">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">$1403.97</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Discount:</span>
                  <span>- $60.00</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Tax:</span>
                  <span>+ $14.00</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>$1357.97</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-[#00B517] text-white py-2 rounded-lg">
                Checkout
              </button>
              <div className=" w-full flex justify-center items-center pt-3 gap-2">
                <img src="Images/payments/payment.png" alt="" />
                <img src="Images/payments/payment-1.png" alt="" />
                <img src="Images/payments/payment-2.png" alt="" />
                <img src="Images/payments/payment-3.png" alt="" />
                <img src="Images/payments/payment-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-4 pb-6">
          <div className="flex flex-row w-80 py-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center ">
              <MdLock className="w-6 h-6" />
            </div>
            <div className="px-2 ">
              <p className="text-[#1C1C1C]">Secure Payment</p>
              <p className="text-gray-400">Have you ever finally just </p>
            </div>
          </div>
          <div className="flex flex-row w-80  py-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center ">
              <MdMessage className="w-6 h-6" />
            </div>
            <div className="px-2 ">
              <p className="text-[#1C1C1C]">Customer Support</p>
              <p className="text-gray-400">Have you ever finally just </p>
            </div>
          </div>
          <div className="flex flex-row w-80  py-3">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center ">
              <TbTruckDelivery className="w-6 h-6" />
            </div>
            <div className="px-2 ">
              <p className="text-[#1C1C1C]">Free Delivery</p>
              <p className="text-gray-400">Have you ever finally just </p>
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-xl  text-[#1C1C1C]">
            Saved for Later
          </h5>
        </div>
        <div className="w-full h-full bg-[#FFFFFF] rounded-xl border border-[#DEE2E7]  lg:p-4">
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
            {cart2?.map((item, index) => (
              <Cart2
                key={index}
                image={item?.image}
                price={item?.price}
                title={item?.title}
                className="w-full h-40"
              />
            ))}
          </div>
        </div>
        <DiscBanner />
      </div>
    </>
  );
}

export default Cart;
