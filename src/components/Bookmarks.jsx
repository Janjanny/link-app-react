import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'
import { useState } from 'react'
import IsEmpty from './IsEmpty'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'



const Bookmarks = ({bookmarks, setBookmarks, deleteBookmark, currentCategory}) => {


  console.log(bookmarks)




  return (
    <div className='w-11/12  mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4 pb-[12rem] relative' >


      {bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).length === 0 ? (<IsEmpty/>) : bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).map((bookmark, index) => (<div className='stagger-card'>
        <Card 
      name={bookmark.title}
      desc={bookmark.description}
      link={bookmark.url}
      img={bookmark.image}
      key={index}
      index={index}
      deleteBookmark={deleteBookmark}
      />
      </div>))}
      
    </div>
  )
}

export default Bookmarks