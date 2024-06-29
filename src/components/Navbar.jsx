import React, { useState } from "react";
import { getCategories, resetData } from "../data";
import { getBookmarks } from "../data";

const Navbar = () => {

  const bookmarkList = getBookmarks();
  // console.log(bookmarkList)
  // console.log(bookmarkList[0].title)

  
  const [searchedBookmark, setSearchedBookmark] = useState(" ")
  console.log(searchedBookmark)
  
  const regex = RegExp(searchedBookmark.toLowerCase(), 'gi')

  const [isFocused, setIsFocused] = useState(false)

  



  return (
    <div className="w-full bg-black text-white py-3 border-b border-gray border-solid">
      <nav className="flex w-11/12 mx-auto justify-between items-center py-1">
        <a href="/" className=" font-bold text-3xl">Links</a>

        <button onClick={() => resetData()}>reset</button>
        <div className="flex gap-3 relative">
          {/* search bar */}
          <div className="flex border-solid border border-gray py-2 px-4 text-sm rounded-3xl">
            <input
              type="text"
              className=" bg-black focus:outline-none outline-1 text-start text-sm w-[250px]"
              placeholder="Search..."
              
              onChange={(e) => {setSearchedBookmark(e.target.value)}}
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
          {/* search result */}
          {isFocused && <div className="absolute w-full h-content top-[45px] rounded-md overflow-hidden z-30">

          {bookmarkList.map((bookmark) => (regex.test(bookmark.title.toLowerCase()) ? <div className=" border-b pb-[8px] bg-black-card hover:bg-black-card-hover transition-all ease-in p-[1rem]"> <a href={bookmark.url} className="font-bold hover:underline" target="_blank">{bookmark.title}</a>
          <p className="text-xs text-gray cursor-default">{bookmark.description.length <= 28 ? bookmark.description: (bookmark.description.slice(0, 28) + '...')}</p>
          </div> : ''))}


            </div>}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
