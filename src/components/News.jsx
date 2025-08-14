import React from "react";

function News() {
  return (
    <div className="w-full bg-[#EFF2F4] flex flex-col justify-center items-center py-8 px-4 text-center">
      <h4 className="font-bold text-[20px] mb-2">
        Subscribe on our newsletter
      </h4>
      <p className="mb-4 text-sm max-w-md">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
        <input
          className="rounded-md h-10 w-full sm:w-64 px-3 outline-[#0D6EFD]"
          type="email"
          placeholder="Email"
        />
        <button className="h-10 px-4 text-white bg-[#0D6EFD] rounded-md">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default News;
