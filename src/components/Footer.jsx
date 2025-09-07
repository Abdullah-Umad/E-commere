import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-10 lg:px-20 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
