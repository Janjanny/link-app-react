import React from 'react'
import { addBookmark } from '../data'
import { getCategories } from '../data';
import { useState } from 'react';

const LinkModal = ({isActive, setActive}) => {
  const categories = getCategories()
  categories.splice(0,1)
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addBookmark(url); // Call addBookmark with the URL and category
    setActive(!isActive); // Close the modal
  };
  

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
      {/* blur bg */}
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer' onClick={() => {setActive(!isActive)}}></div>
      <div className='relative z-10 px-[2.5rem] py-[3rem] bg-black-card text-white rounded-md shadow'>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Link</label>
        <input type="text" name="price" id="price" class="block rounded-md border-0 py-1.5 pl-3  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black w-[20rem]" placeholder="Enter link" value={url} onChange={(e) => {setUrl(e.target.value)}}></input>

        <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mt-8">Category</label>
        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-black pl-3" value={category} onChange={(e) => {setCategory(e.target.value)}}>
              {categories.map((category, index) => (<option key={index}>{category}</option>))}
            </select>


        <div className="buttons flex mt-9 justify-center items-center gap-2">
          <button onClick={() => {setActive(!isActive)}} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Close</button>

          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => {handleSubmit()}}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LinkModal