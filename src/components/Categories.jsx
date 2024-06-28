import React, { useState } from "react";
import { getCategories } from "../data";


const Categories = () => {
  const categoryList = getCategories()

  const[active, setActive] = useState(0);

  // for navigation in category
  const changeCategory = (index) => {
    setActive(index)
  }
  return <>
    <div className="flex gap-12 w-11/12 mx-auto py-8 text-base overflow-auto">
      {categoryList.map((category, index) => (
        <p key={index} className={`cursor-pointer ${index === active ? 'text-white transition-all ease-in-out' : 'text-gray hover:text-gray-hover transition-all ease-in'}`} onClick={() => {changeCategory(index)}}>{category}</p>
      ))}
    </div>
  </>;
};

export default Categories;
