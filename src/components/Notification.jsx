import React from 'react'

const Notification = ({notificationMessage, setNotifActive}) => {
  return (

    <>
    <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer z-10' ></div>
    <div className=' text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[11] px-[2.5rem] py-[2.5rem] bg-black-card shadow-md rounded-md flex flex-col justify-center items-center'>
        <h1 className=' text-lg mb-7 flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" color='text-gray-500' className=" size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
{notificationMessage}</h1>
        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-fit' onClick={() => {setNotifActive(false)}} >Confirm</button>
    </div>
    
    </>
  )
}

export default Notification