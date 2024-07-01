import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'
import { useState } from 'react'
import IsEmpty from './IsEmpty'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'


const Bookmarks = ({bookmarks, setBookmarks, deleteBookmark, currentCategory}) => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current.children, {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"})
  }, {scope:container})


  return (
    <div className='w-11/12  mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4 pb-[12rem] relative' ref={container}>


      {bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).length === 0 ? (<IsEmpty/>) : bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).map((bookmark, index) => (<Card 
      name={bookmark.title}
      desc={bookmark.description}
      link={bookmark.url}
      img={bookmark.image}
      key={index}
      index={index}
      deleteBookmark={deleteBookmark}
      />))}
      
    </div>
  )
}

export default Bookmarks