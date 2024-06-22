import React from 'react'

const Card = () => {
    
    const links = [
        {
            name: 'Facebook', 
            link: 'https://www.facebook.com/', 
            desc: 'Create an account or log into Facebook. '},

        {
            name: 'Youtube', 
            link: 'https://www.youtube.com/', 
            desc: 'Share your videos with friends, family, and the world.'},

        {
            name: 'Youtube', 
            link: 'https://www.twitter.com/?lang=en', 
            desc: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'},

    ]

  return (
    <div className=' bg-black-card w-full text-white h-[18rem] p-6 rounded-lg overflow-hidden'>
        <div className="link-icon min-h-[10rem] flex justify-center items-center"><div className=" bg-slate-300 h-[5rem] w-[5rem] rounded-full"></div></div>
        <div className="link-text">
            <h1 className=' font-bold'>{links[0].name}</h1>
            <p className=' text-xs font-light text-gray-hover mt-1'>{links[0].desc}</p>
        </div>
    </div>
  )
}

export default Card