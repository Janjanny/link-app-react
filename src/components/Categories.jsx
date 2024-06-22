import React, { useState } from "react";

const Categories = () => {
  const categoryList = ["All", "Socials", "Personal", "Education", "Shopping", "Games", "Music"];

  const[active, setActive] = useState(0);

  const changeCategory = (index) => {
    setActive(index)
  }
  return <>
    <div className="flex gap-12 w-11/12 mx-auto py-8 text-base">
      {categoryList.map((category, index) => (
        <p key={index} className={`cursor-pointer ${index === active ? 'text-white' : 'text-gray'}`} onClick={() => {changeCategory(index)}}>{category}</p>
      ))}
    </div>
  </>;
};

export default Categories;
