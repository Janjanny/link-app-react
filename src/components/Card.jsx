import React from 'react'


const Card = ({name, desc, link, img}) => {
    

  return (
    <>
        <div className=' bg-black-card w-full text-white h-[20rem] p-6 rounded-lg overflow-hidden'>
            <div className="link-icon min-h-[10rem] flex justify-center items-center"><div className=" bg-slate-300 h-[5rem] w-[5rem] rounded-full"></div></div>
            <div className="link-text">
                <a href={link} target='_blank' className=' hover:underline'><h1 className=' font-bold'>{name}</h1></a>
                <p className=' text-xs font-light text-gray-hover mt-1 cursor-default'>{desc.length <= 81 ? desc : desc.slice(0, 10) + '...'}</p>
            </div>
        </div>
    </>
  )
}

export default Card