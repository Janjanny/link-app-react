import React from 'react'

const Card = () => {
    
    const links = [
        {
            name: 'Facebook', 
            link: 'https://www.facebook.com/', 
            desc: 'Create an account or log into Facebook. Connect with friends, family and other people you know.'},

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
    <div className=' bg-black-card w-full h-full'>
        <div className="link-icon"></div>
    </div>
  )
}

export default Card