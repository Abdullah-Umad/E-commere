import Sale from "../components/Sale";
import Items from "../components/Items";
import Services from "../components/Services";
import Region from "../components/Region";
import Offer from "../components/Offer";
import News from "../components/News";

function Home() {
  return (
    <>
      <div className=" w-full bg-[#F8F9FA] lg:px-20 lg:py-4 px-10 ">
        <div className="w-full min-h-96 flex justify-between items-center bg-[#FFFFFF] space-x-4 rounded-xl border border-[#DEE2E7]">
          <div className="flex flex-row justify-center">
            <div className="hidden md:block lg:block max-h-[360px] max-w-[250px] space-y-3 ml-2 mr-10">
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
            <div className="w-full max-w-[700px] mx-auto my-auto rounded-md overflow-hidden relative">
              <img
                src="/Images/15bee8c1b9d77e50133ea130b3270887efd96310.png"
                alt="Latest trending"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 p-4 md:p-20 flex flex-col justify-center h-full">
                <p className="font-medium text-lg md:text-xl text-white">
                  Latest trending
                </p>
                <p className="font-bold text-xl md:text-2xl text-white">
                  Electronic items
                </p>
                <button className="w-auto px-6 py-2 mt-2 text-black bg-white rounded-md font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block max-h-[360px] max-w-[250px] mx-7 space-y-2">
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
        <div className=" md:h-60 h-auto w-full  bg-white my-4 flex flex-col md:flex md:flex-row rounded-xl border border-[#DEE2E7] ">
          <div className="w-full  md:w-64 py-6 m-4 px-4 space-y-2 flex flex-row md:flex-col ">
            <div className="flex flex-col">
              <p className="font-bold text-xl">Deals and Offers</p>
              <p className="font-normal text-sm text-gray-500">
                Hygiene Equipments
              </p>
            </div>
            <img className="ml-auto mr-5" src="/Images/time.png" alt="" />
          </div>
          <div className="overflow-x-auto lg:overflow-hidden">
            <div className="flex gap-4 min-w-max px-4 lg:grid lg:grid-cols-5 lg:min-w-0 lg:px-0">
              <Offer
                image={"/Images/tech/8.jpg"}
                name={"Smart Watches"}
                discount={"-25%"}
                className="w-1/2 flex-shrink-0 lg:w-auto"
              />
              <Offer
                image={"/Images/tech/7.jpg"}
                name={"Laptops"}
                discount={"-15%"}
                className="w-1/2 flex-shrink-0 lg:w-auto"
              />
              <Offer
                image={"/Images/tech/6.jpg"}
                name={"Cameras"}
                discount={"-45%"}
                className="w-1/2 flex-shrink-0 lg:w-auto"
              />
              <Offer
                image={"/Images/tech/5.jpg"}
                name={"HeadPhones"}
                discount={"-25%"}
                className="w-1/2 flex-shrink-0 lg:w-auto"
              />
              <Offer
                image={"/Images/tech/3.jpg"}
                name={"Smart Phones"}
                discount={"-35%"}
                className="w-1/2 flex-shrink-0 lg:w-auto"
              />
            </div>
          </div>
        </div>
        {/* Home & Decor */}
        <div className="w-full bg-white my-4 rounded-xl border border-[#DEE2E7]">
          <div className="hidden lg:flex h-64 w-full rounded-xl">
            <div
              className="w-72 h-64 bg-cover bg-no-repeat rounded-tl-xl rounded-bl-xl"
              style={{
                backgroundImage: `linear-gradient(to right, #FFE8BA66), url('/Images/BlockItemFirst.jpg')`,
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
                title={"Soft Chairs"}
                price={10}
                image={"/Images/interior/1.jpg"}
              />
              <Sale
                title={"Sofa & Chair"}
                price={19}
                image={"/Images/interior/6.jpg"}
              />
              <Sale
                title={"Kitchen Dishes"}
                price={19}
                image={"/Images/interior/5.jpg"}
              />
              <Sale
                title={"Smart Watches"}
                price={19}
                image={"/Images/interior/3.jpg"}
              />
              <Sale
                title={"Kitchen Mixer"}
                price={100}
                image={"/Images/interior/9.jpg"}
              />
              <Sale
                title={"Blenders"}
                price={39}
                image={"/Images/interior/8.jpg"}
              />
              <Sale
                title={"Home Appliance"}
                price={19}
                image={"/Images/interior/7.jpg"}
              />
              <Sale
                title={"Coffee Maker"}
                price={10}
                image={"/Images/interior/4.jpg"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden p-4">
            <p className="font-bold text-xl text-center">Home and Decor</p>

            <div className="overflow-x-auto flex gap-4 h-36">
              <Sale
                title={"Soft Chairs"}
                price={10}
                image={"/Images/interior/1.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Sofa & Chair"}
                price={19}
                image={"/Images/interior/6.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Kitchen Dishes"}
                price={19}
                image={"/Images/interior/5.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Smart Watches"}
                price={19}
                image={"/Images/interior/3.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Kitchen Mixer"}
                price={100}
                image={"/Images/interior/9.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Blenders"}
                price={39}
                image={"/Images/interior/8.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Home Appliance"}
                price={19}
                image={"/Images/interior/7.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Coffee Maker"}
                price={10}
                image={"/Images/interior/4.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
            </div>

            <div className="text-center mt-2">
              <button className="py-3 px-6 text-black flex items-start border bg-white rounded-md font-semibold">
                Source Now
              </button>
            </div>
          </div>
        </div>

        {/* Consumer and electronics */}
        <div className="w-full bg-white my-4 rounded-xl border border-[#DEE2E7]">
          <div className="hidden lg:flex h-64 w-full rounded-xl">
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
              <Sale title={"Cameras"} price={89} image={"/Images/tech/6.jpg"} />
              <Sale
                title={"Headphones"}
                price={10}
                image={"/Images/tech/9.jpg"}
              />
              <Sale
                title={"Smart Watches"}
                price={90}
                image={"/Images/tech/2.jpg"}
              />
              <Sale
                title={"Gaming Set"}
                price={35}
                image={"/Images/tech/5.jpg"}
              />
              <Sale
                title={"Laptops & PC"}
                price={10}
                image={"/Images/tech/7.jpg"}
              />
              <Sale
                title={"SmartPhones"}
                price={29}
                image={"/Images/tech/2.jpg"}
              />
              <Sale
                title={"Electric Kettle"}
                price={240}
                image={"/Images/tech/10.jpg"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden p-4">
            <p className="font-bold text-xl text-center">
              Consumer electronics and gadgets
            </p>

            <div className="overflow-x-auto flex gap-4 h-36">
              <Sale
                title={"Smart Watches"}
                price={19}
                image={"/Images/tech/8.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Cameras"}
                price={89}
                image={"/Images/tech/6.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Headphones"}
                price={10}
                image={"/Images/tech/9.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Smart Watches"}
                price={90}
                image={"/Images/tech/2.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Gaming Set"}
                price={35}
                image={"/Images/tech/5.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Laptops & PC"}
                price={10}
                image={"/Images/tech/7.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"SmartPhones"}
                price={29}
                image={"/Images/tech/2.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
              <Sale
                title={"Electric Kettle"}
                price={240}
                image={"/Images/tech/10.jpg"}
                className="w-40 h-36 flex-shrink-0"
              />
            </div>
            <div className="text-center mt-2">
              <button className="py-3 px-6 flex items-start border text-black bg-white rounded-md font-semibold">
                Source Now
              </button>
            </div>
          </div>
        </div>

        {/* Form  */}
        <div
          className="p-2 w-full h-[250px] lg:h-[445px] md:h-[445px]  rounded-md border border-[#DEE2E7] bg-cover bg-no-repeat "
          style={{
            backgroundImage: `linear-gradient(to right, #2C7CF1, #00D1FF80), url('/Images/inc.png')`,
          }}
        >
          <div className="flex justify-between">
            <div className="ml-4 w-96 h-auto my-8 ">
              <h2 className="text-white font-semibold text-xl md:text-3xl p-3">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-white font-light text-lg p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="mr-4 my-8 py-4">
              <form
                className="hidden md:block lg:block w-[490px] max-h-96 bg-white border border-[#DEE2E7] rounded-lg p-3 space-y-4 px-2"
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
          <h4 className="my-6 font-semibold text-xl text-center md:text-left md:text-2xl">
            Recommended Items
          </h4>
          <div className="w-full h-auto my-3 mx-4">
            <div className="grid grid-cols-2  gap-2 lg:grid-cols-5 md:grid-cols-3 ">
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
          <h4 className="my-6 font-semibold text-xl text-center md:text-left md:text-2xl">
            Our Extra Services
          </h4>
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-2">
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
          <h4 className="my-6 font-semibold text-xl text-center md:text-left md:text-2xl">
            Suppliers by Region
          </h4>
          <div className="w-full">
            <div className=" grid lg:grid-cols-5 gap-2 md:grid-cols-4 grid-cols-3">
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
