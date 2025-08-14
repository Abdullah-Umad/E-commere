import React from "react";

function Services({ image, icon, description }) {
  return (
    <>
      <div className="w-72 h-52 bg-white border border-[#DEE2E7] rounded-lg">
        <div
          className="w-full h-32 bg-cover bg-bottom relative rounded-t-lg"
          style={{
            backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.6)),url(${image})`,
          }}
        >
          <div className="absolute -bottom-4 right-8">
            <img
              src={icon}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
        </div>
        <p className="mx-6 my-4 w-44 font-medium text-base">{description}</p>
      </div>
    </>
  );
}

export default Services;
