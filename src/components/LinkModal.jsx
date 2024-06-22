import React from 'react'

const LinkModal = ({isActive, setActive}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer' onClick={() => {setActive(!isActive)}}></div>
      <div className='relative z-10 px-[2.5rem] py-[3rem] bg-black-card text-white rounded-md shadow'>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Link</label>
        <input type="text" name="price" id="price" class="block rounded-md border-0 py-1.5 pl-3  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black w-[20rem]" placeholder="Enter link"></input>

        <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mt-8">Category</label>
        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-black pl-3">
              <option>Socials</option>
              <option>Personal</option>
              <option>Education</option>
            </select>


        <div className="buttons"></div>
      </div>
    </div>
  )
}

export default LinkModal