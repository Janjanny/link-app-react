import React, { useState } from 'react'

const CategoryModal = ({isActive, setActive, handleAddCategory}) => {

  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    handleAddCategory(category);
    setActive(!isActive)
  }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
        {/* blur bg */}
        <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer' onClick={() => {setActive(!isActive)}}></div>

        <div className='relative z-10 px-[2.5rem] py-[3rem] bg-black-card text-white rounded-md shadow'>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Add Category</label>
        <input type="text" name="price" id="price" class="block rounded-md border-0 py-1.5 pl-3  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black w-[20rem]" placeholder="Enter Category Name" onChange={(e) => setCategory(e.target.value)}></input>

        


        <div className="buttons flex mt-9 justify-center items-center gap-2">
          <button onClick={() => {setActive(!isActive)}} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Close</button>

          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => {handleSubmit()}}>Submit</button>
        </div>
      </div>


    </div>
  )
}

export default CategoryModal