import React from 'react'

import {bookmarks} from '../data'

const Card = () => {
    
    

  return (
    <div className=' bg-black-card w-full text-white h-[18rem] p-6 rounded-lg overflow-hidden'>
        <div className="link-icon min-h-[10rem] flex justify-center items-center"><div className=" bg-slate-300 h-[5rem] w-[5rem] rounded-full"></div></div>
        <div className="link-text">
            <h1 className=' font-bold'>{bookmarks[0].name}</h1>
            <p className=' text-xs font-light text-gray-hover mt-1'>{bookmarks[0].desc}</p>
        </div>
    </div>
  )
}

export default Card