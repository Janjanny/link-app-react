import React from "react";
import { resetData } from "../data";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white py-3 border-b border-gray border-solid">
      <nav className="flex w-11/12 mx-auto justify-between items-center py-1">
        <a href="/" className=" font-bold text-3xl">Links</a>

        <button onClick={() => resetData()}>reset</button>
        <div className="flex gap-3">
          <div className="flex border-solid border border-gray py-2 px-4 text-sm rounded-3xl">
            <input
              type="text"
              className=" bg-black focus:outline-none outline-1 text-start text-sm w-[180px]"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
