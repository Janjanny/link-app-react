import React from 'react'


const Card = ({name, desc, link, img, deleteBookmark, index}) => {
    

  return (
    <>
        <a href={link} target='_blank'><div className=' bg-black-card w-full text-white min-h-[18rem] p-6 rounded-lg relative hover:bg-black-card-hover transition-all ease-in'>
          <button className="delete-icon absolute right-[1.5rem]" onClick={() => deleteBookmark(index)}>

          

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer text-[#57585F] hover:text-[#ACADB7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

          </button>
            <div className="link-icon min-h-[10rem] flex justify-center items-center">
              {/* <div className=" bg-slate-300 h-[5rem] w-[5rem] rounded-full"></div> */}
              <img src={img} alt="icon" className=' w-[4.5rem]' />
            </div>
            <div className="link-text">
                <a href={link} target='_blank' className=' hover:underline'><h1 className=' font-bold'>{name.length <= 25 ? name : name.slice(0, 25) + '...'}</h1></a>
                <p className=' text-xs font-light text-gray-hover mt-1 cursor-default'>{desc.length <= 50 ? desc : desc.slice(0, 81) + '...'}</p>
            </div>
        </div></a>
    </>
  )
}

export default Card