import React from 'react'
import Card from './Card'
import { getBookmarks } from '../data'
import { useState } from 'react'
import IsEmpty from './IsEmpty'


const Bookmarks = ({bookmarks, setBookmarks, deleteBookmark, currentCategory}) => {


  return (
    <div className='w-11/12 min-h-screen mx-auto mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-auto gap-4 pb-[12rem] relative'>


      {bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).length === 0 ? (<IsEmpty/>) : bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).map((bookmark, index) => (<Card 
      name={bookmark.title}
      desc={bookmark.description}
      link={bookmark.url}
      img={bookmark.image}
      key={index}
      index={index}
      deleteBookmark={deleteBookmark}
      />))}

      {/* {bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).length === 0 ? (
  <IsEmpty />
) : (
  bookmarks.filter((bookmark) => currentCategory === "All" || bookmark.category === currentCategory).map((bookmark, index) => (
    <Card
      name={bookmark.title}
      desc={bookmark.description}
      link={bookmark.url}
      img={bookmark.image}
      key={index}
      index={index}
      deleteBookmark={deleteBookmark}
    />
  ))
)} */}

      
    </div>
  )
}

export default Bookmarks