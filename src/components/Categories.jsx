import React, { useState } from "react";
import { getCategories } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const Categories = ({categoryFn, categoryList}) => {

  useGSAP(() => {
    gsap.fromTo(".category", {opacity: 0}, {opacity: 1, duratiom: 1, stagger: 0.1})
  })


  const[active, setActive] = useState("All");

  // for navigation in category
  const changeCategory = (index) => {
    setActive(index)
    categoryFn(index)
  }
  return <>
    <div className="flex gap-12 w-11/12 mx-auto py-8 text-base overflow-auto no-scrollbar">
      {categoryList.map((category, index) => (
        <p key={index} className={`cursor-pointer ${category === active ? 'text-white transition-all ease-in-out' : 'text-gray hover:text-gray-hover transition-all ease-in category opacity-1 '}`} onClick={() => {changeCategory(category)}}>{category}</p>
      ))}
    </div>
  </>;
};

export default Categories;
